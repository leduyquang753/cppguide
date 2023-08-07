const ANIMATION_OPTIONS = { duration: 300, easing: "cubic-bezier(0, 0, 0.3, 1)" };

const tocContainer = document.getElementsByClassName("tocContainer")[0];
const toc = document.getElementsByClassName("toc")[0];
const currentEntry = document.getElementById("currentEntry");

function showToc() {
	if (currentEntry !== null) currentEntry.scrollIntoView({ behavior: "instant", block: "center" });
	tocContainer.className = "tocContainer";
	toc.animate({ translate: ["-100%", "0"] }, ANIMATION_OPTIONS);
}

function hideToc(event) {
	if (!event.target.dataset.isTocCloser) return;
	tocContainer.animate({ visibility: ["visible", "visible"] }, ANIMATION_OPTIONS);
	toc.animate({ translate: ["0", "-100%"] }, ANIMATION_OPTIONS);
	tocContainer.className = "tocContainer tocContainer-hidden";
}

document.getElementsByClassName("showToc")[0].addEventListener("click", showToc);
for (const element of document.getElementsByClassName("tocCloser"))
	element.addEventListener("click", hideToc);