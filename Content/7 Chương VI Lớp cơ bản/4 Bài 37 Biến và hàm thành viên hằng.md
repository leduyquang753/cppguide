Bài 37. Biến và hàm thành viên hằng
# 1. Biến thành viên hằng

Các biến thành viên có kiểu không phải tham chiếu có thể có kiểu hằng (`const`). Giống như các biến hằng đã được trình
bày, sau khi được khởi tạo thì các biến thành viên hằng không thể được thay đổi.

Ở đây thì ta có thể thấy một lí do tại sao ta phải dùng danh sách khởi tạo thành viên trong hàm tạo. Nó có thể cho các
biến thành viên giá trị khởi tạo; sau đó, khi thân hàm tạo được chạy, các biến thành viên hằng sẽ không thể được thay
đổi nữa, vì thế ta không thể dùng phép gán với chúng được.

Lấy ví dụ lớp `DaGiac`, nếu ta để các biến thành viên là `const` thì ta sẽ không thể thay đổi chúng được:

```cpp
class DaGiac {
	public:
		const int soCanh = 4;
		const double doDaiCanh = 5.;

		DaGiac(const int soCanh, const double doDaiCanh): soCanh{soCanh}, doDaiCanh{doDaiCanh} {}
};

int main() {
	DaGiac batGiac{8, 6.5};
	
	// ! KHÔNG HỢP LỆ.
	batGiac.doDaiCanh = 15.3;
}
```

Nếu biến thành viên có kiểu là tham chiếu thì `const` sẽ áp dụng vào tham chiếu như bình thường, nhớ lại rằng ta không
thể thay đổi đích tham chiếu của một biến tham chiếu được. Và như vậy một biến tham chiếu cũng sẽ phải được khởi tạo qua
con đường danh sách khởi tạo thành viên hoặc phần khởi tạo mặc định.

::: note note Ghi chú
Trong ngôn ngữ Java không có danh sách khởi tạo thành viên, thì ngôn ngữ có cơ chế là các trường `final` ("trường" tương
tự với biến thành viên trong C++, "final" nghĩa là "cuối cùng" tương tự với biến hằng trong C++) sẽ có một cơ hội được
gán trong thân hàm tạo để lấy làm việc khởi tạo. Nếu thân hàm tạo không thực hiện gán thì đó là lỗi ngữ nghĩa.
:::

# 2. Hàm thành viên hằng

## a) Cơ chế cơ bản

Theo mặc định, C++ coi như việc gọi các hàm thành viên là có khả năng làm thay đổi dữ liệu của thực thể, vì thế ta sẽ
không thể gọi chúng trên các biến thực thể `const`. Nhưng có những hàm thành viên thực sự không thực hiện thay đổi dữ
liệu, vì vậy C++ có cơ chế khai báo các hàm đó sử dụng từ khóa `const`.

Cụ thể, ta thực hiện đặt từ khóa `const` vào sau dấu đóng ngoặc `)` của danh sách đối đầu vào. Khi đó thì hàm thành viên
sẽ không thể thực hiện thao tác có khả năng thay đổi dữ liệu của các biến thành viên, và ta có thể thực hiện gọi hàm
thành viên đó từ một thực thể `const`.

Lấy ví dụ lớp `DaGiac` có hàm thành viên `chuVi` như sau:

```cpp
class DaGiac {
	public:
		const int soCanh = 4;
		const double doDaiCanh = 5.;

		DaGiac(const int soCanh, const double doDaiCanh): soCanh{soCanh}, doDaiCanh{doDaiCanh} {}

		double chuVi() {
			return soCanh * doDaiCanh;
		}
};
```

Sau đó trong một hàm ta tạo một thực thể `const`:

```cpp
const DaGiac lucGiac(6, 4.8);
```

Nếu ta thực hiện gọi `lucGiac.chuVi()`, bộ dịch vẫn sẽ báo lỗi do kể cả khi hàm `chuVi` không thực hiện thay đổi gì lên
các biến thành viên, ngôn ngữ vẫn coi như nó có khả năng thay đổi. Để có thể gọi được ta cần làm cho hàm `chuVi` là một
hàm thành viên hằng:

```cpp
double chuVi() const {
	return soCanh * doDaiCanh;
}
```

## b) Nạp chồng hàm thành viên hằng và không hằng

Việc có `const` hay không cũng là một trong những yếu tố được xét để phân biệt các hàm thành viên. Vì vậy, ta có thể
khai báo hai hàm thành viên cùng tên, cùng danh sách kiểu đối đầu vào nhưng một hàm có `const` và một hàm thì không. Khi
thực hiện gọi, nếu thực thể là `const` thì hàm thành viên `const` sẽ được gọi, nếu không thì hàm thành viên không có
`const` sẽ được gọi.