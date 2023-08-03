const process = require("process");
const args = process.argv.slice(2);
if (args.length < 2) {
	console.error("Usage: build.js <base URL> <output path>");
	process.exit(1);
}

const ejs = require("ejs");
const fs = require("fs");
const highlight = require("highlight.js");
const mdAnchor = require("markdown-it-anchor");
const mdBase = require("markdown-it");
const path = require("path");
const transliteration = require("transliteration");

const [baseUrl, outputPath] = args;

// Build the table of contents.

let toc = null;

{ // Block containing resources while building table of contents.

const tocParser = mdBase({
	html: true,
	linkify: true
});

function buildPageToc(contents) {
	const pageToc = [];
	const buildingStack = [pageToc];
	const currentOrdinals = [];
	const tokens = tocParser.parse(contents, {});
	for (let i = 0; i !== tokens.length; i++) {
		const token = tokens[i];
		if (token.type !== "heading_open") continue;
		const level = Number.parseInt(token.tag.slice(1));
		if (level < buildingStack.length) {
			buildingStack.splice(level);
			currentOrdinals.splice(level - 1);
		}
		const name = tokens[i+1].children
			.filter(token => !["html_inline", "image"].includes(token.type))
			.map(token => token.content)
			.join(' ');
		const spaceIndex = name.indexOf(' ');
		const ordinal = name.slice(0, spaceIndex - 1);
		currentOrdinals.push(ordinal);
		const subsections = [];
		const section = {
			ordinal, name,
			id: "s" + transliteration.slugify([...currentOrdinals, name.slice(spaceIndex+1)].join('-')),
			subsections
		};
		buildingStack.at(-1).push(section);
		buildingStack.push(subsections);
	}
	return pageToc;
}

let nextId = 1;
function buildTocPart(entries, baseUrl) {
	const tocPart = [];
	for (const entry of entries) {
		const entryName = entry.name;
		const spaceIndex = entryName.indexOf(' ');
		const ordinal = Number(entryName.slice(0, spaceIndex));
		const rawUrlPart = entryName.slice(spaceIndex + 1);
		const filePath = path.join(entry.path, entry.name);
		if (entry.isDirectory()) {
			const id = nextId;
			nextId++;
			const outputName = transliteration.slugify(rawUrlPart);
			const url = baseUrl + '/' + outputName;
			const subPart = buildTocPart(fs.readdirSync(filePath, { withFileTypes: true }), url);
			tocPart.push({
				ordinal, id,
				name: subPart[0].name,
				url,
				inputName: entry.name,
				outputName,
				subentries: subPart
			});
		} else {
			if (!entry.name.endsWith(".md")) continue;
			const id = ordinal === 0 ? 0 : nextId;
			if (id !== 0) nextId++;
			const contents = fs.readFileSync(filePath, "utf8");
			const newlineMatch = contents.match(/\r?\n/);
			const outputName = transliteration.slugify(rawUrlPart.slice(0, rawUrlPart.length-3)) + ".html";
			const rawName = contents.slice(0, newlineMatch.index);
			tocPart.push({
				ordinal, id,
				name: tocParser.renderInline(rawName),
				tabTitle: tocParser.parseInline(rawName).map(token => token.content).join(' '),
				url: baseUrl + '/' + outputName,
				inputName: entry.name,
				outputName,
				subentries: null,
				pageToc: buildPageToc(contents.slice(newlineMatch.index + newlineMatch[0].length))
			});
		}
	}
	tocPart.sort((entry1, entry2) => entry1.ordinal - entry2.ordinal);
	return tocPart;
}

toc = buildTocPart(fs.readdirSync("Content", { withFileTypes: true }), "");

} // Block containing resources while building table of contents.

// Render the pages.

const processingState = {};
const md = mdBase({
	html: true,
	linkify: true,
	highlight: (code, language) => {
		return language !== undefined && highlight.getLanguage(language) !== undefined
			? highlight.highlight(code, {language}).value
			: "";
	}
})
.use(require("markdown-it-attrs"))
.use(require("markdown-it-bracketed-spans"))
.use(require("markdown-it-container"), "note", {
	validate: (info) => {
		const params = info.slice(6);
		return ["note", "warning", "danger"].includes(params.slice(0, params.indexOf(' ')));
	},
	render: (tokens, index) => {
		const token = tokens[index];
		if (token.nesting === 1) {
			const params = token.info.slice(6);
			const spaceIndex = params.indexOf(' ');
			const className = params.slice(0, spaceIndex);
			const title = params.slice(spaceIndex + 1);
			return `<div class="noteBox ${className}"><div>${md.renderInline(title)}</div><div>`;
		} else {
			return "</div></div>";
		}
	}
})
.use(mdAnchor, {
	getTokensText: tokens => {
		const id = processingState.sectionIds[processingState.currentSectionIdIndex];
		processingState.currentSectionIdIndex++;
		return id;
	},
	permalink: mdAnchor.permalink.headerLink({
		class: "sectionLink"
	})
});
md.renderer.rules.link_open = (tokens, index, options, env, self) => {
	const token = tokens[index];
	const hrefIndex = token.attrIndex("href");
	const href = token.attrs[hrefIndex][1];
	if (href.startsWith("!")) {
		const ordinals = href.slice(1).split(/[.#]/g);
		let url = null;
		let currentEntry = { subentries: toc };
		let isPageRoot = true;
		for (const ordinal of ordinals) {
			if (url === null) {
				const nextEntry = currentEntry.subentries.find(entry => entry.ordinal.toString() === ordinal);
				if (nextEntry === undefined) throw new Error(`No such link: ${href}`);
				if (nextEntry.subentries === null) {
					url = nextEntry.id === 0 ? currentEntry.url : nextEntry.url;
					currentEntry = nextEntry.pageToc;
				} else {
					currentEntry = nextEntry;
				}
			} else {
				const nextEntry = (isPageRoot ? currentEntry : currentEntry.subsections).find(
					entry => entry.ordinal === ordinal
				);
				if (nextEntry === undefined) throw new Error(`No such link: ${href}`);
				currentEntry = nextEntry;
				isPageRoot = false;
			}
		}
		token.attrs[hrefIndex][1] = processingState.urlToRoot + url + (isPageRoot ? "" : '#' + currentEntry.id);
	}

	return self.renderToken(tokens, index, options);
};

const pageTemplate = fs.readFileSync("pageTemplate.ejs", "utf8");

function getPageSectionIds(pageToc) {
	return pageToc.flatMap(section => [section.id, ...getPageSectionIds(section.subsections)]);
}

let previousUrl = null;
function renderEntry(id, urlToRoot, url, breadcrumb, entry, baseInputPath, baseOutputPath, nextUrl) {
	if (entry.subentries === null) { // Is a file.
		processingState.urlToRoot = urlToRoot;
		processingState.sectionIds = getPageSectionIds(entry.pageToc);
		processingState.currentSectionIdIndex = 0;
		const contents = fs.readFileSync(path.join(baseInputPath, entry.inputName), "utf8");
		const newlineMatch = contents.match(/\r?\n/);
		fs.writeFileSync(
			path.join(baseOutputPath, entry.outputName),
			ejs.render(
				pageTemplate,
				{
					baseUrl: urlToRoot,
					url: baseUrl + url,
					id,
					toc,
					breadcrumb,
					tabTitle: entry.tabTitle,
					name: entry.name,
					pageToc: entry.pageToc,
					content: md.render(contents.slice(newlineMatch.index + newlineMatch[0].length)),
					previousUrl,
					nextUrl
				}
			),
			"utf8"
		);
	} else { // Is a folder.
		const folderInputPath = path.join(baseInputPath, entry.inputName);
		const folderOutputPath = path.join(baseOutputPath, entry.outputName);
		if (!fs.existsSync(folderOutputPath)) fs.mkdirSync(folderOutputPath);
		const newUrlToRoot = urlToRoot.length === 1 ? ".." : urlToRoot + "/..";
		const newBreadcrumb = [...breadcrumb, { html: entry.name, url: entry.url }];
		for (let i = 0; i !== entry.subentries.length; i++) {
			const subentry = entry.subentries[i];
			renderEntry(
				subentry.id === 0 ? entry.id : subentry.id,
				newUrlToRoot,
				subentry.id === 0 ? entry.url : subentry.url,
				subentry.id === 0 ? breadcrumb : newBreadcrumb,
				subentry, folderInputPath, folderOutputPath,
				i === entry.subentries.length-1 ? nextUrl : entry.subentries[i+1].url
			);
		}
	}
	previousUrl = url;
}

const baseBreadcrumb = [{ html: "C++ hiện đại", url: "" }];
for (let i = 0; i != toc.length; i++) {
	const entry = toc[i];
	renderEntry(
		entry.id, ".", entry.url,
		// Don't display a breadcrumb for the root page of the guide.
		entry.outputName === "index.html" ? [] : baseBreadcrumb,
		entry, "Content", outputPath,
		i == toc.length-1 ? null : toc[i+1].url
	);
}