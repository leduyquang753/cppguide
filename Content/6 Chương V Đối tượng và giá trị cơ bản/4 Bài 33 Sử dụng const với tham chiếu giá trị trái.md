Bài 33. Sử dụng `const` với tham chiếu giá trị trái
# 1. Tham chiếu giá trị trái hằng

Một biến tham chiếu giá trị trái có thể được khai báo `const`, khi đó đối tượng ban đầu không thể được thay đổi thông
qua biến tham chiếu đó. Ở đây ta gọi biến đó là một biến tham chiếu giá trị trái hằng.

Một biến tham chiếu giá trị trái hằng có thể được khởi tạo bằng một giá trị trái đại diện cho một đối tượng có thể có
hoặc không có `const`, ví dụ:

```cpp
int a{10};
const int &r{a};
```

Ta có thể thực hiện thay đổi giá trị của `a` bằng cách dùng toán tử gán với `a`, nhưng ta không thể làm điều tương tự
đối với `r` do nó có `const`.

# 2. Chuyển đổi hằng

Ta có thể thực hiện chuyển đổi một giá trị trái từ không có `const` thành có `const` và ngược lại bằng cách sử dụng biểu
thức `const_cast` (nghĩa là "ép hằng") có dạng tương tự như `static_cast`, tức là:

```cpp
const_cast<kiểu đích>(giá trị)
```

Đối với biến tham chiếu `r` ở trên ta có thể thực hiện chuyển đổi hằng để thực hiện phép gán thông qua biến `r` bằng
cách xác định kiểu đích là tham chiếu giá trị trái đến `int` không có `const` và cung cấp giá trị trái `r`:

```cpp
const_cast<int&>(r) = 15;
```

Tuy nhiên, với những đối tượng đã là `const` ngay từ đầu, ta không thể sử dụng `const_cast` để thực hiện loại bỏ `const`
rồi gán vào đối tượng được. Nếu cố làm như vậy, chương trình là không hợp lệ và sẽ có hành vi không xác định. Ví dụ như
sau là *không hợp lệ*:

```cpp
const int c{10};
const_cast<int&>(c) = -1;
```

Trong thực tế ta thường chỉ có nhu cầu sử dụng `const_cast` khi thực hiện tương tác với các dự án của ngôn ngữ C, thông
tin cụ thể hơn sẽ được trình bày trong các bài sau.

# 3. Vật chất hóa đối tượng tạm thời (temporary materialization)

Một biến tham chiếu giá trị trái hằng cũng có thể được cung cấp một giá trị thuần phải để khởi tạo, khi đó C++ thực hiện
ngầm định chuyển đổi giá trị thuần phải đó thành một đối tượng. Quá trình này được gọi là "vật chất hóa", và đối tượng
sau khi tạo ra được gọi là một đối tượng tạm thời. Thời gian sống của đối tượng tạm thời được mở rộng bằng với thời gian
sống của biến tham chiếu, tuy nhiên có một số ngoại lệ. Hai trong số các ngoại lệ đó mà liên quan đến những gì ta đã tìm
hiểu là:

1. Nếu đối tượng tạm thời được tạo ra trong câu lệnh `return` trả về tham chiếu, đối tượng sẽ bị hủy ngay sau khi câu
lệnh kết thúc. Như vậy, tham chiếu được trả về sẽ luôn treo lủng lẳng.
2. Nếu đối tượng tạm thời được tạo ra khi được truyền vào một đối tham chiếu giá trị trái hằng của một lời gọi hàm, đối
tượng tạm thời đó sẽ tồn tại cho đến khi quá trình tính giá trị của toàn bộ biểu thức chứa lời gọi hàm đó hoàn thành.

Ta có một số ví dụ như sau:

```cpp
{
	const int &v{5}; // Vật chất hóa giá trị `5`.
} // Biến tham chiếu `v` kết thúc vòng đời, đối tượng tạm thời cũng bị hủy bỏ.
```

```cpp
const int& max(const int &a, const int &b) {
	return a > b ? a : b;
}

int main() {
	std::cout << max(5, 10) << "\n";
	// Hai đối tượng tạm thời được tạo ra cho hai giá trị `5` và `10`,
	// chúng vẫn còn tồn tại đến khi biểu thức được tính giá trị xong,
	// nên ta có thể sử dụng chúng trong biểu thức.

	const int &ketQua{max(20, -10)};
	// Biến chứa một tham chiếu lủng lẳng, không thể sử dụng.
}
```