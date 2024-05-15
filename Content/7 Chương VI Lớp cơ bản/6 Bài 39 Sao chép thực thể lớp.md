Bài 39. Sao chép thực thể lớp
C++ cho phép ta định nghĩa một thực thể của một lớp có thể được sao chép như thế nào. Có hai trường hợp thực thể của lớp
được sao chép: khi khởi tạo một thực thể mới từ một thực thể đã có, và khi gán một thực thể vào một biến chứa thực thể.

# 1. Hàm tạo sao chép

## a) Khai báo

Một hàm tạo sao chép là một hàm tạo có thể nhận vào một giá trị có kiểu là cùng lớp với lớp hiện tại. Thông thường, kiểu
của đối đầu vào cho hàm tạo sao chép là tham chiếu hằng đến lớp. Các thao tác để khởi tạo thực thể trong hàm tạo được
viết như bình thường sao cho thực thể mới là một bản sao của thực thể ban đầu (hoặc là không, nhưng khi đó thì mọi thứ
sẽ là do bạn chịu trách nhiệm).

Chẳng hạn, lớp `Vector2D` có thể có hàm tạo sao chép như sau:

```cpp
struct Vector2D {
	float x;
	float y;

	// Các hàm tạo tường minh do lớp không còn là thể kết hợp.
	Vector2D(): x(0.f), y(0.f) {}
	Vector2D(const float x, const float y): x(x), y(y) {}
	// Hàm tạo sao chép.
	Vector2D(const Vector2D &other): x(other.x), y(other.y) {}
};
```

Như vậy, với một `Vector2D vectorGoc;` có sẵn, ta có thể sử dụng nó khi khởi tạo một biến `Vector2D` mới như `Vector2D
vectorMoi{vectorGoc};` hay `Vector2D vectorMoi = vectorGoc;`, và hàm tạo sao chép sẽ được gọi.

## b) Hàm tạo sao chép ngầm định

Ngay cả khi ta không tường minh viết ra một hàm tạo sao chép, thì trong một số trường hợp cơ bản, một hàm tạo sao chép
sẽ được ngầm định định nghĩa. Hàm tạo sao chép này sẽ nhận vào một tham chiếu đến lớp và thực hiện khởi tạo sao chép
từng biến thành viên của thực thể mới bằng giá trị của biến thành viên tương ứng của thực thể ban đầu. Vì vậy, trong
phần lớn các trường hợp, ta không cần phải tự định nghĩa hàm tạo sao chép khi không có hành vi nào đặc biệt.

Trong trường hợp ta cần phải tự khai báo hàm tạo sao chép nhưng vẫn muốn sử dụng hành vi của hàm khi nó được ngầm định
định nghĩa, ta có thể viết `= default;` thay cho thần hàm.

# 2. Toán tử gán sao chép

## a) Khai báo

Tương tự, một toán tử gán sao chép là một hàm nạp chồng toán tử gán `=` có thể nhận vào một giá trị có kiểu là cùng lớp
với lớp hiện tại. Thông thường, kiểu đổi đầu vào là tham chiếu hằng đến lớp và kiểu trả về là tham chiếu đến thực thể
hiện tại (thực thể được gán vào).

Để có thể lấy được tham chiếu đến thực thể hiện tại để trả về, ta sử dụng biểu thức `*this`. `this` là một con trỏ và
`*` là toán tử trên con trỏ, những thành phần ngôn ngữ này sẽ được trình bày trong các bài sau.

Ví dụ toán tử gán sao chép cho lớp `Vector2D` có thể như sau:

```cpp
struct Vector2D {
	float x;
	float y;

	Vector2D& operator=(const Vector2D &other) {
		x = other.x;
		y = other.y;
		return *this;
	}
};
```

## b) Toán tử gán sao chép mặc định

Và cũng tương tự, ngay cả khi ta không tự viết ra hàm nạp chồng toán tử gán sao chép, một hàm gán sao chép sẽ được ngầm
định định nghĩa, nhận vào một tham chiếu đến lớp, thực hiện gán sao chép từng biến thành viên và trả về tham chiếu đến
thực thể được gán vào. Khi cần phải khai báo tường minh, ta cũng có thể thay thân hàm bằng `= default;` để sử dụng hành
vi ngầm định.