Bài 32. Biến tham chiếu giá trị trái
# 1. Khai báo và cách sử dụng cơ bản

Ta đã được biết về giá trị trái ở [bài trước](!6.2). C++ có cơ chế cho phép ta thực hiện lưu trữ các giá trị trái vào
các biến. Chúng được gọi là các biến tham chiếu giá trị trái, tiếng Anh là "lvalue reference".

## a) Khai báo

Cú pháp khai báo biến tham chiếu giá trị trái lấy cơ sở là cú pháp khai báo biến chứa giá trị thông thường, chỉ khác ở
chỗ ta viết một dấu và `&` vào phía trước tên biến trong câu lệnh khai báo. Tên biến nào có dấu và ở phía trước, biến đó
là một biến tham chiếu giá trị trái, trong khi những tên biến còn lại không có dấu và trong câu lệnh khai báo sẽ vẫn là
các biến giá trị bình thường. Một biến tham chiếu giá trị trái bắt buộc phải được cung cấp một giá trị khởi tạo là một
giá trị trái có kiểu phù hợp, thường là một kiểu giống với kiểu của biến.

Ta lấy một ví dụ khai báo như sau:

```cpp
int a{10};
int &b{a}, c{15};
```

Câu lệnh thứ nhất khai báo biến `a` chứa giá trị kiểu `int`. Câu lệnh thứ hai khai báo hai biến: biến `b` là biến tham
chiếu giá trị trái kiểu `int` và được khởi tạo với giá trị trái `a`, còn biến `c` là một biến chứa giá trị kiểu `int`.

Do tính chất gộp với các tên biến của dấu và, nhiều người thực hiện viết dấu và sát với tên biến. Tuy nhiên, một luồng ý
kiến khác cho rằng không nên khai báo nhiều biến trong cùng một câu lệnh, và khi khai báo mỗi biến trong một câu lệnh
riêng, vấn đề gộp dấu không còn sự ảnh hưởng, nên họ có thể viết dấu và sát với tên kiểu như sau:

```cpp
int a{10};
int& b{a};
int c{15};
```

## b) Kiểu tham chiếu giá trị trái

Khi muốn biểu diễn kiểu của một tham chiếu giá trị trái, ta thực hiện viết dấu và `&` vào sau kiểu giá trị của đối tượng
mà giá trị trái thể hiện. Ví dụ kiểu tham chiếu giá trị trái đến một đối tượng kiểu `int` sẽ là `int&`.

## c) Cách sử dụng cơ bản

Do biến tham chiếu giá trị trái lưu trữ một giá trị trái, nhìn từ một góc khác ta có thể thấy rằng biến tham chiếu là
một biệt danh của đối tượng mà giá trị trái đó thể hiện. Ta có thể sử dụng tên biến tham chiếu để thay thế cho biểu thức
giá trị trái ban đầu.

Với ví dụ các biến `a`, `b`, `c` ở trên, nếu ta viết `b = c;`, do `b` đại diện cho biến `a`, giá trị của biến `a` sẽ
được gán thành giá trị của biểu thức `c` là `15`.

Sau khi một biến tham chiếu giá trị trái được khởi tạo, ta không thể làm cho biến đó tham chiếu đến một đối tượng khác
được. Phép gán vào biến tham chiếu như ta đã thấy ở trên sẽ thực hiện gán giá trị vào đối tượng ban đầu mà biến tham
chiếu đại diện.

Cần lưu ý rằng bản thân một biến tham chiếu không phải là một đối tượng.

# 2. Sử dụng tham chiếu giá trị trái với hàm

## a) Truyền tham chiếu giá trị trái vào hàm

Ta có thể khai báo các đối đầu vào của một hàm là các biến tham chiếu giá trị trái. Cú pháp cũng xuất phát từ cú pháp
khai báo đối ban đầu, sau đó ta thực hiện thêm dấu và `&` vào trước tên đối. Lưu ý ta không thực hiện viết cú pháp khởi
tạo ở vị trí khai báo (cú pháp đó ở vị trí này có ý nghĩa khác sẽ được trình bày ở các bài sau).

Khi gọi hàm, ta truyền cho đối một giá trị trái, biến đối sẽ được khởi tạo với giá trị trái đó. Như vậy, hàm có thể thực
hiện các thay đổi trên đối tượng mà giá trị trái đó đại diện.

Ví dụ ta có một hàm:

```cpp
void hoanDoi(int &a, int &b) {
	const int c{a};
	a = b;
	b = c;
}
```

Sau đó ta có đoạn mã sử dụng hàm như sau:

```cpp
int x{5}, y{6789};
std::cout << x << " " << y << "\n";
hoanDoi(x, y);
std::cout << x << " " << y << "\n";
```

Ta sẽ thấy sau lời gọi hàm, giá trị của hai biến `x` và `y` đã được thay đổi. Cụ thể, đối `a` trong hàm là tham chiếu
giá trị trái đại diện cho biến `x`, đối `b` đại diện cho biến `y`. Bằng việc dùng toán tử gán với `a` và `b`, hàm
`hoanDoi` có thể thực hiện thay đổi giá trị của hai biến `x` và `y`. Bạn có thể thử loại bỏ dấu và của các đối và theo
dõi kết quả.

Một ứng dụng phổ biến của việc truyền tham chiếu giá trị trái vào hàm là ta có thể trả về nhiều hơn một giá trị từ hàm
thông qua các biến được chuẩn bị bởi bên gọi.

## b) Trả về tham chiếu giá trị trái từ hàm

Một hàm cũng có thể trả về một tham chiếu giá trị trái. Ta viết kiểu trả về của hàm là kiểu tham chiếu giá trị trái, sau
đó ta có thể cung cấp một giá trị trái cho câu lệnh `return`. Ví dụ:

```cpp
int& layBoDem(int so, int &soSoChan, int &soSoLe) {
	return so % 2 == 0 ? soSoChan : soSoLe;
}
```

# 3. Tham chiếu lủng lẳng (dangling reference)

Nếu trong quá trình một biến tham chiếu giá trị trái tồn tại, đối tượng ban đầu không còn tồn tại nữa, thì việc sử dụng
biến tham chiếu đó không còn ý nghĩa, khi đó ta nói biến tham chiếu ở trạng thái "treo lủng lẳng". Việc sử dụng một biến
tham chiếu lủng lẳng là không hợp lệ và chương trình sẽ có hành vi không xác định.

Một ví dụ sai lầm mà nhiều người học mắc phải là viết hàm trả về tham chiếu đến một biến nằm bên trong phạm vi của hàm:

```cpp
int& taoBien() {
	int bien{0};
	return bien;
}
```

Sau khi hàm `taoBien` kết thúc, `bien` sẽ không còn tồn tại nữa, và tham chiếu được trả về sẽ ở trạng thái treo lủng
lẳng và không thể được sử dụng.

::: note note Ghi chú
Nhiều người và nhiều nguồn sẽ chỉ nhắc đến các biến tham chiếu giá trị trái với cái tên "biến tham chiếu" hoặc "tham
chiếu". Bài này nói rõ tên "biến tham chiếu giá trị trái" là bởi vì thực ra còn có các giá trị phải và đi cùng với chúng
là tham chiếu giá trị phải. Chúng sẽ được trình bày trong các bài sau.
:::