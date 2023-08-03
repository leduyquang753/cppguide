Bài 8. Câu lệnh rẽ nhánh, khối lệnh và kiểu Boole
# 1. Câu lệnh rẽ nhánh

Nhiều khi ta muốn thực hiện một số hành động chỉ khi một điều kiện nào đó được thỏa mãn, hoặc thực hiện một hành động
khi điều kiện thỏa mãn hoặc hành động kia nếu ngược lại. C++ cho ta thực hiện một số câu lệnh phụ thuộc vào điều kiện
bằng cách viết câu lệnh rẽ nhánh, có dạng cơ bản như sau:

```cpp
if (<điều kiện>) <câu lệnh nếu đúng>
else <câu lệnh nếu sai>
```

Phần câu lệnh nếu sai có thể bỏ qua, khi đó nếu điều kiện không được thỏa mãn, câu lệnh sẽ không thực hiện gì:

```cpp
if (<điều kiện>) <câu lệnh nếu đúng>
```

Lưu ý điều kiện luôn cần được đặt trong một cặp ngoặc tròn `()`.

Một số điều kiện cơ bản đối với kiểu dữ liệu số được liệt kê dưới đây, với `a` và `b` đại diện cho hai biểu thức cho ra
giá trị số:

- `a == b`: `a` có giá trị đúng bằng `b`.
- `a != b`: `a` có giá trị khác `b`.
- `a < b`: `a` có giá trị nhỏ hơn `b`.
- `a > b`: `a` có giá trị lớn hơn `b`.
- `a <= b`: `a` có giá trị nhỏ hơn hoặc bằng `b`, hay nói cách khác `a` không lớn hơn `b`.
- `a >= b`: `a` có giá trị lớn hơn hoặc bằng `b`, hay nói cách khác `a` không nhỏ hơn `b`.

Ví dụ, đoạn mã dưới đây sẽ viết ra màn hình `Co the qua cau.` nếu tổng hai biến số nguyên `khoiLuongXe` và
`khoiLuongHang` có giá trị nhỏ hơn `5000`, nếu không thì viết ra màn hình `Qua tai.`:

```cpp
if (khoiLuongXe + khoiLuongHang < 5000) std::cout << "Co the qua cau.";
else std::cout << "Qua tai.";
```

Lưu ý dấu chấm phẩy kết thúc là thành phần cú pháp cần thiết của mỗi câu lệnh.

::: note danger Nguy hiểm
Sau dấu đóng ngoặc của điều kiện không có dấu chẩm phẩy `;`. Nếu bạn đặt nó ở vị trí đó, nó sẽ được hiểu là một câu lệnh
rỗng cho phần câu lệnh nếu đúng, câu lệnh rỗng đó không thực hiện gì cả.
:::

# 2. Khối lệnh

## a) Cú pháp và sử dụng

Vậy nếu ta muốn thực hiện nhiều hơn một câu lệnh nếu điều kiện được thỏa mãn thì làm như thế nào? Ta có thể lặp lại lệnh
rẽ nhánh cho mỗi câu lệnh được thực hiện, nhưng rõ ràng làm như vậy sẽ không hiệu quả. C++ có cú pháp để gộp nhiều câu
lệnh với nhau gọi là khối lệnh.

Để tạo ra một khối lệnh, ta chỉ cần bao xung quanh các câu lệnh cần gộp bằng cặp ngoặc móc `{}`. Một khối lệnh được coi
là một câu lệnh, cụ thể là câu lệnh ghép. Kết thúc một khối lệnh không có dấu chấm phẩy ở cuối.

Khi viết phần chương trình chính ta cũng sử dụng cặp ngoặc móc quanh các câu lệnh, đó cũng là một khối lệnh.

Như vậy, ta có thể đưa nhiều câu lệnh vào trong một khối lệnh để sử dụng cho lệnh rẽ nhánh, ví dụ:

```cpp
if (thanhTien >= 200'000) {
	std::cout << "Mien phi giao hang.\n";
	phiGiaoHang = 0;
}
```

## b) Lệnh rẽ nhánh lồng nhau

Lệnh rẽ nhánh là một câu lệnh và vì thế nó có thể được dùng bên trong các lệnh rẽ nhánh khác để tạo ra một cây điều
kiện:

```cpp
if (ngay == thang)
	if (thanhTien >= 200'000) phiGiaoHang = 0;
	else phiGiaoHang = phiGiaoHang / 2;
else
	if (thanhTien >= 500'000) phiGiaoHang = phiGiaoHang / 2;
```

Một điểm cần chú ý khi thực hiện viết nhiều câu lệnh rẽ nhánh thành một chuỗi là mỗi phần `else` sẽ tương ứng với phần
`if` gần nhất về phía trước nó mà chưa có phần `else` tương ứng. Chẳng hạn trong ví dụ trên, `else` thứ nhất tương ứng
với `if` thứ hai, và `else` thứ hai tương ứng với `if` thứ nhất.

Điểm trên là một điểm rất dễ sai sót, nên để tránh, ta thường luôn đặt các câu lệnh vào trong các khối lệnh để xác định
cho lệnh rẽ nhánh. Ví dụ trên sẽ được viết lại thành:

```cpp
if (ngay == thang) {
	if (thanhTien >= 200'000) {
		phiGiaoHang = 0;
	} else {
		phiGiaoHang = phiGiaoHang / 2;
	}
} else {
	if (thanhTien >= 500'000) {
		phiGiaoHang = phiGiaoHang / 2;
	}
}
```

## c) Biến trong khối lệnh

Khi ta viết câu lệnh khai báo một biến trong một khối lệnh, biến đó sẽ tồn tại từ vị trí khai báo cho đến hết khối lệnh,
ví dụ:

```cpp
if (taiTrong >= 100) {
	std::cout << "Qua tai.\n";
	// Chưa thể truy cập `luongCanBo`.
	const int luongCanBo{taiTrong - 100};
	// Có thể truy cập `luongCanBo`.
	std::cout << "Can bo " << luongCanBo << " kg.\n";
}
// Không thể truy cập `luongCanBo`, biến không còn tồn tại.
```

Các câu lệnh trong một khối lệnh được nói là nằm trong phạm vi của khối lệnh đó. Khi khai báo biến, nó sẽ được đặt trong
phạm vi của khối lệnh bên trong nhất. Không thể có hai biến có tên giống nhau trong cùng một phạm vi, ví dụ đoạn mã sau
là không hợp lệ:

```cpp
{
	int a{10};
	int a{20}; // Biến bị trùng tên.
}
```

Tuy nhiên nếu có một biến nằm trong một khối lệnh mà có một biến cùng tên nằm bên ngoài trong một khối lệnh khác thì
đoạn mã sẽ được chấp nhận, do chúng nằm trong hai phạm vi khác nhau:

```cpp
int main() { // Lưu ý đây cũng là một khối lệnh.
	int a; // Nằm trong phạm vi khối lệnh bên ngoài.
	std::cin >> a;
	if (a > 5000) {
		int a{5000}; // Nằm trong phạm vi khối lệnh bên trong.
		std::cout << a << "\n"; // Truy cập biến `a` bên trong.
	} else {
		std::cout << a << "\n"; // Truy cập biến `a` bên ngoài.
	}
}
```

Khi gọi tên một biến, việc tìm biến sẽ thực hiện từ khối lệnh bên trong nhất rồi tiến dần ra bên ngoài cho đến khi tìm
được một biến với tên được gọi. Như vậy với một biến ở bên trong trùng tên với một biến ở bên ngoài, ta sẽ không thể
truy cập biến ở bên ngoài được. Vì thế, bạn nên tránh đặt tên các biến trùng nhau ngay cả khi điều đó là được cho phép.

# 3. Kiểu Boole

Thực ra, một điều kiện được đưa vào lệnh rẽ nhánh ở trên cũng là một biểu thức, nó cho ra giá trị với một kiểu dữ liệu
thể hiện kết quả của điều kiện đó. Đó là kiểu Boole, đặt theo tên nhà toán học George Boole là người đã giới thiệu về
mảng toán học liên quan đến kiểu giá trị này. Tên của kiểu trong C++ là `bool`.

Kiểu `bool` chỉ có hai giá trị: `true` có nghĩa là "đúng" và `false` có nghĩa là "sai". Như vậy nó có thể biểu diễn được
kết quả của một biểu thức điều kiện. Câu lệnh `if` lấy một giá trị với kiểu `bool` để thực hiện câu lệnh tương ứng với
giá trị đó.

C++ có những toán tử thao tác trên các giá trị kiểu `bool`, cho phép ta phối hợp các điều kiện với nhau để tạo ra một
điều kiện phức tạp, gọi là các toán tử logic. Các toán tử đó là:

- `!a`: Cho `true` nếu `a` là `false` và `false` nếu `a` là `true`, tức là nghịch đảo của `a`.
- `a && b`: Cho `true` nếu cả `a` và `b` là `true` và `false` trong các trường hợp còn lại, tức là điều kiện đúng khi
  `a` đúng *và* `b` đúng.
- `a || b`: Cho `false` nếu cả `a` và `b` là `false` và `true` trong các trường hợp còn lại, tức là điều kiện đúng khi
  `a` đúng *hoặc* `b` đúng.

Các dấu `==`, `!=`, `<`, `>`, `<=`, `>=` trong các điều kiện cũng là các toán tử, cụ thể là toán tử so sánh và cho ra
giá trị kiểu `bool`.

Thứ tự ưu tiên toán tử của các toán tử trên cùng với các toán tử tính toán trong [bài 5](!2.5#1) như sau:

1. `+a`, `-a`, `!a`
2. `a * b`, `a / b`, `a % b`
3. `a + b`, `a - b`
4. `a < b`, `a > b`, `a <= b`, `a >= b`
5. `a == b`, `a != b`
6. `a && b`
7. `a || b`

Do `!a` có độ ưu tiên cao hơn hầu hết các toán tử tính toán và điều kiện nên nếu muốn nghịch đảo một biểu thức điều
kiện, ta cần phải nhóm điều kiện đó trong một cặp ngoặc đơn `()`. Chẳng hạn để nghịch đảo điều kiện `a > 5` ta viết
`!(a > 5)`, nếu viết `!a > 5` thì phép nghịch đảo sẽ được thực hiện trên `a` mà thôi.

Việc `a && b` có độ ưu tiên cao hơn `a || b` là một điều mà chúng ta thường ít khi nhớ tới, nên để tránh nguy cơ nhớ
nhầm, dẫn đến viết và đọc nhầm, ta thường đặt các dấu ngoặc một cách tường minh khi phối hợp các điều kiện. Chẳng hạn
`a > 5 || a < 0 && b > 5` nên được viết lại thành `a > 5 || (a < 0 && b > 5)`.

Ta có thể khai báo một biến kiểu `bool` và cho nó một giá trị là một biểu thức điều kiện, và sử dụng nó trong các câu
lệnh rẽ nhánh, ví dụ:

```cpp
bool coTheQuaCau = taiTrong < 5000;
if (coTheQuaCau) {
	std::cout << "Co the qua cau.\n";
} else {
	std::cout << "Qua tai.\n";
	const int luongCanBo{taiTrong - 100};
	std::cout << "Can bo " << luongCanBo << " kg.\n";
}
```