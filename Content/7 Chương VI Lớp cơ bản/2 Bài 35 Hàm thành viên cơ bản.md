Bài 35. Hàm thành viên cơ bản
Hàm thành viên, tiếng Anh là "member function", là thuật ngữ của C++ để chỉ các phương thức của lớp trong lập trình
hướng đối tượng. Thông thường, các hàm thành viên thuộc về các thực thể của lớp đó và làm cho các thực thể thực hiện một
hành động xác định.

# 1. Định nghĩa hàm thành viên cơ bản

Các hàm thành viên được khai báo bên trong thân của định nghĩa lớp, tuy nhiên định nghĩa của các hàm đó có thể được đặt
bên trong hoặc bên ngoài lớp.

## a) Định nghĩa hàm thành viên trong định nghĩa lớp

Ta thực hiện viết định nghĩa hàm bên trong định nghĩa lớp với cú pháp giống như định nghĩa hàm bình thường (hàm độc
lập).

## b) Định nghĩa hàm thành viên ngoài định nghĩa lớp

Ta thực hiện viết khai báo trước của hàm bên trong định nghĩa lớp, rồi trong một tệp mã nguồn, ta thực hiện viết định
nghĩa hàm, tuy nhiên ta cần viết thêm tên lớp và hai dấu hai chấm `::` vào trước tên của hàm để thể hiện ta đang định
nghĩa một hàm thành viên của lớp đó.

## c) Sử dụng biến thành viên bên trong hàm thành viên

Ta có thể truy cập các biến thành viên của thực thể hiện tại mà hàm thành viên đang thao tác bằng cách viết tên của
chúng. Các biến và hàm thành viên nằm trong phạm vi của lớp, phạm vi này được xét đến trong thân các hàm thành viên.

## d) Ví dụ

Ta tiếp tục sử dụng lớp `DaGiac` ở bài trước và thực hiện định nghĩa một hàm thành viên `chuVi` thực hiện tính toán với
giá trị của các biến thành viên.

Nếu định nghĩa hàm bên trong định nghĩa lớp, đoạn mã sẽ là:

```cpp
class DaGiac {
	public:
		int soCanh;
		double doDaiCanh;

		double chuVi() {
			return soCanh * doDaiCanh;
		}
};
```

Nếu định nghĩa hàm bên ngoài định nghĩa lớp, đoạn mã sẽ là:

```cpp
class DaGiac {
	public:
		int soCanh;
		double doDaiCanh;

		double chuVi();
};

double DaGiac::chuVi() {
	return soCanh * doDaiCanh;
}
```

# 2. Sử dụng hàm thành viên cơ bản

Một hàm thành viên cơ bản được gọi trên một thực thể của lớp. Để thực hiện gọi, ta thực hiện viết lần lượt: biểu thức
cho ra thực thể muốn thực hiện gọi, toán tử chấm `.`, tên hàm thành viên muốn gọi và cặp ngoặc tròn `()` chứa các đối
truyền vào hàm.

Chẳng hạn với biến `abc` với kiểu `DaGiac` như được viết ở trên, ta thực hiện viết ra màn hình kết quả của việc gọi hàm
thành viên `chuVi` như sau:

```cpp
std::cout << abc.chuVi() << '\n';
```

Một hàm thành viên cũng có thể thực hiện gọi một hàm thành viên từ thực thể hiện tại bằng cách viết cú pháp gọi hàm như
thông thường với tên hàm thành viên muốn gọi, mà không cần phải viết biểu thức cho ra thực thể. Tuy nhiên, nếu muốn gọi
hàm trên một thực thể khác với thực thể hiện tại thì vẫn cần sử dụng cú pháp như vừa trình bày.

# 3. Hàm thành viên hằng

Theo mặc định, một hàm thành viên có thể thực hiện thay đổi giá trị của các biến thành viên của thực thể. Do đó, nếu một
đối tượng chứa thực thể của lớp là hằng (`const`), hàm thành viên sẽ không thể được gọi trên nó.

Trong nhiều trường hợp, hàm thành viên chỉ có nhu cầu đọc giá trị của các biến thành viên mà không thay đổi chúng. Khi
đó, ta thực hiện khai báo điều này bằng cách viết thêm từ khóa `const` vào sau dấu đóng ngoặc tròn `)` của danh sách
biến đối. Nếu bạn thực hiện khai báo hàm thành viên ở bên trong định nghĩa lớp và định nghĩa nó ở bên ngoài, bạn cần
phải viết từ khóa `const` ở cả hai vị trí.

Trong ví dụ lớp `DaGiac` ở trên, hàm thành viên `chuVi` chỉ thực hiện đọc giá trị các biến thành viên, do đó ta có thể
đưa nó làm một hàm thành viên hằng. Mã nguồn của lớp sẽ trở thành:

```cpp
class DaGiac {
	public:
		int soCanh;
		double doDaiCanh;

		double chuVi() const;
};

double DaGiac::chuVi() const {
	return soCanh * doDaiCanh;
}
```