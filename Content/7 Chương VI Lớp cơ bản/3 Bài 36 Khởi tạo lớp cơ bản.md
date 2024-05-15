Bài 36. Khởi tạo lớp cơ bản
Bài này sẽ giới thiệu một số hình thức khởi tạo dữ liệu của một lớp.

# 1. Hàm tạo

## a) Cú pháp và cơ chế cơ bản

Hàm tạo, tiếng Anh là "constructor", là một hàm thành viên đặc biệt được gọi trong quá trình một thực thể của một lớp
được tạo ra, với mục đích chủ yếu là khởi tạo các giá trị dữ liệu của các biến thành viên. Hàm tạo không có kiểu trả về
và theo đó cũng không trả về giá trị nào.

Cú pháp cơ bản của hàm tạo có dạng tương tự như đối với các hàm thành viên bình thường đã trình bày ở phần trước với hai
điểm khác biệt chính:

1. Kiểu trả về không được viết (vì nó không tồn tại).
2. Tên hàm trùng với tên lớp.

Một hàm tạo có thể nhận các đối đầu vào và có thể có nhiều hàm tạo với các danh sách kiểu đối đầu vào khác nhau, hay nói
cách khác hàm tạo có thể được [nạp chồng](!3.1).

Hàm tạo chỉ có thể được gọi như là một bước trong quá trình khởi tạo một thực thể của lớp và không thể được gọi một cách
trực tiếp. Sau khi việc khởi tạo giá trị các biến thành viên được hoàn tất, thân hàm tạo sẽ được thực hiện.

## b) Danh sách khởi tạo thành viên

Như vừa được đề cập, tất cả các biến thành viên của thực thể sẽ được thực hiện khởi tạo trước khi thân hàm tạo được thực
hiện. Ta có thể điều khiển sự khởi tạo của từng biến thành viên bằng cách xác định một mục khởi tạo cho nó, các mục này
được đặt vào một vị trí gọi là danh sách khởi tạo thành viên, tiếng Anh là "member initializer list".

Danh sách khởi tạo thành viên được thêm vào bằng cách viết một dấu hai chấm `:` vào sau dấu đóng ngoặc `)` của danh sách
đối đầu vào, sau đó xác định các mục khởi tạo phân cách nhau bằng dấu phẩy `,`.

Mục khởi tạo của một biến thành viên được xác định bằng cách sử dụng một trong hai cú pháp khởi tạo trực tiếp (dùng cặp
ngoặc tròn `()`) hoặc khởi tạo danh sách (dùng cặp ngoặc móc `{}`) nhưng không viết tên kiểu của biến. Mục khởi tạo có
thể sử dụng các biến đối đầu vào của hàm tạo. Nếu như tên biến thành viên và tên biến đối đầu vào giống nhau, tên bên
ngoài cặp ngoặc sẽ luôn được xét là tên biến, còn tên bên trong cặp ngoặc sẽ mặc định được xét là tên biến đối.

Thứ tự của các mục khởi tạo trong danh sách khởi tạo thành viên là không quan trọng, cụ thể hơn, chúng không ảnh hưởng
đến thứ tự khởi tạo của các biến thành viên. Thay vào đó, các biến thành viên luôn được khởi tạo theo thứ tự khai báo
trong định nghĩa lớp từ trên xuống dưới. Mặc dù vậy, để tránh sai sót, ta thường viết thứ tự các mục khởi tạo theo thứ
tự chúng được khai báo.

Lấy ví dụ lớp `DaGiac` từ các bài trước, ta có thể viết một hàm tạo nhận vào giá trị để khởi tạo hai biến thành viên như
sau:

```cpp
DaGiac(const int soCanh, const double doDaiCanh): soCanh{soCanh}, doDaiCanh{doDaiCanh} {}
```

::: note warning Lưu ý
Việc gán giá trị vào các biến thành viên bên trong thân hàm tạo vẫn chỉ là một phép gán thông thường, không phải khởi
tạo. Việc sử dụng các phép gán trong thân hàm thay vì danh sách khởi tạo thành viên là một điều xấu và thậm chí không
thể thực hiện được với một số kiểu như tham chiếu.
:::

## c) Khởi tạo biến thành viên mặc định

Nếu bản thân các khai báo của biến thành viên có chứa phần khởi tạo, chúng sẽ là phần khởi tạo mặc định trong trường hợp
danh sách khởi tạo thành viên của một hàm tạo được gọi không xác định một biểu thức khởi tạo cho các biến đó. Ngược lại,
phần khởi tạo mặc định sẽ được bỏ qua và mục khởi tạo trong danh sách khởi tạo thành viên sẽ được áp dụng.

## d) Hàm tạo mặc định

Hàm tạo mặc định là hàm tạo không nhận một đối đầu vào nào. Hàm tạo này sẽ được gọi khi một thực thể được tạo ra mà
không có phần khởi tạo cụ thể.

Nếu định nghĩa lớp không khai báo một hàm tạo nào, thì hàm tạo mặc định sẽ ngầm định được định nghĩa nếu như các biến
thành viên đều có thể được khởi tạo theo các phần khởi tạo mặc định được xác định cho chúng. Hàm tạo mặc định ngầm định
này sẽ không có phần thân. Trong trường hợp đã có các hàm tạo khác mà bạn vẫn muốn tạo ra một hàm tạo mặc định theo như
ngầm định, bạn có thể khai báo nó nhưng thay vì viết phần thân hàm tạo, bạn thay bằng `= default;` ("default" tiếng Anh
nghĩa là "mặc định").

Với ví dụ lớp `DaGiac` từ phần trước, ta có thể xác định thêm các phần khởi tạo mặc định cho các biến thành viên và một
hàm khởi tạo mặc định như sau:

```cpp
class DaGiac {
	public:
		int soCanh = 4;
		double doDaiCanh = 5.;

		DaGiac() = default;
		DaGiac(const int soCanh, const double doDaiCanh): soCanh{soCanh}, doDaiCanh{doDaiCanh} {}

		// Các hàm thành viên khác.
};
```

## e) Ủy nhiệm hàm tạo

Một hàm tạo có thể "ủy nhiệm" (tiếng Anh là "delegate") cho một hàm tạo khác thực hiện khởi tạo trước rồi mới thực hiện
các công đoạn khởi tạo riêng của mình. Để làm điều đó, ta thực hiện viết danh sách khởi tạo thành viên với chỉ một mục
khởi tạo, trong đó, thay vì tên một biến thành viên thì ta viết tên lớp bên ngoài cặp ngoặc, và ta xác định các đối đầu
vào cho hàm tạo được ủy nhiệm bên trong cặp ngoặc. Ta không thể xác định phần khởi tạo cho các biến thành viên vào trong
danh sách khởi tạo thành viên trong trường hợp này: thân hàm tạo được ủy nhiệm sẽ được thực hiện từ trước đó, mà trước
khi điều đó xảy ra thì tất cả các biến thành viên điều đã phải được khởi tạo xong rồi.

Đối với ví dụ lớp `DaGiac`, thay vì sử dụng các phần khởi tạo mặc định, ta có thể làm cho hàm tạo mặc định truyền cho
hàm tạo còn lại các giá trị mặc định như sau:

```cpp
class DaGiac {
	public:
		int soCanh;
		double doDaiCanh;

		DaGiac(): DaGiac(4, 5.) {}
		DaGiac(const int soCanh, const double doDaiCanh): soCanh{soCanh}, doDaiCanh{doDaiCanh} {}

		// Các hàm thành viên khác.
};
```

# 2. Khởi tạo kết hợp

Một thể kết hợp (tiếng Anh là "aggregate") có thể được hiểu là một thể đơn thuần chỉ thực hiện gộp một số mẩu dữ liệu
thành phần vào với nhau. Đối với lớp, trong trường hợp cơ bản, một lớp là một thể kết hợp khi nó không được khai báo hàm
tạo nào và có tất cả các biến thành viên là `public`. Khi một lớp là thể kết hợp, cú pháp khởi tạo danh sách có thể được
sử dụng để trực tiếp truyền các giá trị khởi tạo cho các biến thành viên.

Danh sách khởi tạo (bao bằng cặp ngoặc móc `{}`) có thể có số phần tử khởi tạo từ 0 đến số biến thành viên trong thể kết
hợp, các phần tử được phân cách nhau bằng dấu phẩy `,`. Với mỗi phần tử, biến thành viên có vị trí khai báo tương ứng sẽ
được khởi tạo sao chép từ phần tử đó. Quá trình tính giá trị cho các phần tử khởi tạo sẽ được hoàn thành lần lượt. Nếu
số phần tử khởi tạo nhỏ hơn số biến thành viên, các biến thành viên còn lại sẽ được khởi tạo sử dụng phần khởi tạo mặc
định; nếu phần khởi tạo đó không tồn tại, biến thành viên sẽ được khởi tạo với một danh sách rỗng.

Bản thân mỗi phần tử trong danh sách khởi tạo có thể là một danh sách khởi tạo con, khi đó một giá trị sẽ được tạo ra sử
dụng danh sách khởi tạo đó, rồi giá trị đó được sao chép vào biến thành viên.

Ví dụ với lớp `DaGiac`, nếu ta thực hiện bỏ hết các hàm tạo, ta có thể tạo ra một thực thể như sau:

```cpp
DaGiac lucGiac{6, 10.};
```

Biến thành viên thứ nhất `soCanh` nhận giá trị `6` và biến thành viên thứ hai `doDaiCanh` nhận giá trị `10.`.

Từ phiên bản C++ 2020, ta có thể chỉ định tường minh mỗi phần tử trong danh sách khởi tạo sẽ thực hiện khởi tạo cho biến
thành viên nào. Khi đó mỗi phần tử có thể có một trong hai dạng sau:

- `.<tên biến thành viên> = <biểu thức khởi tạo>`: giá trị khởi tạo có thể là một giá trị đơn hoặc một danh sách khởi tạo,
  biến thành viên được thực hiện khởi tạo trực tiếp.
- `.<tên biến thành viên> <danh sách khởi tạo>`: biến thành viên được thực hiện khởi tạo sao chép.

Nếu danh sách khởi tạo thực hiện xác định tường minh các thành viên, thì tất cả các phần tử trong danh sách phải xác
định tường minh các thành viên. Thứ tự các biến thành viên được xác định phần tử khởi tạo phải tuân theo thứ tự chúng
được khai báo trong định nghĩa lớp.

Cú pháp khởi tạo mới này sẽ làm cho mã nguồn trở nên rõ ràng hơn (tuy nhiên trong các phiên bản C++ cũ hơn bạn có thể
chèn các mẩu chú thích vào danh sách để thể hiện các biến thành viên được khởi tạo), và cho phép ta "nhảy qua" một số
biến thành viên để viết phần tử khởi tạo cho thành viên phía sau, trong khi thực hiện khởi tạo rỗng cho các biến thành
viên kia. Chẳng hạn ta có thể tạo ra một thực thể lớp `DaGiac` như sau:

```cpp
DaGiac khongCanh{.doDaiCanh{15.}};
```

Biến thành viên `soCanh` bị nhảy qua và được khởi tạo rỗng với giá trị không, còn biến thành viên `doDaiCanh` nhận giá
trị `15.`.