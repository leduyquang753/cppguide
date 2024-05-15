Bài 38. Nạp chồng toán tử cơ bản
Ngoài việc tự định nghĩa các kiểu dữ liệu riêng, C++ cho phép ta định nghĩa hành vi của hầu hết các toán tử ứng với các
kiểu dữ liệu riêng đó. Điều này làm cho việc thao tác với các kiểu dữ liệu tự định nghĩa có khả năng trở nên tự nhiên
như đối với các kiểu dữ liệu có sẵn. Hầu hết các toán tử trong ngôn ngữ C++ có thể được nạp chồng. Một vài toán tử trong
số đó có những ràng buộc nhất định khi nạp chồng; những ràng buộc đối với một số toán tử ta đã học sẽ được trình bày
trong phần sau của bài này.

Hành vi tùy chỉnh của các toán tử khi nạp chồng được định nghĩa trong những hàm thông thường. Chúng có thể là các hàm
đứng riêng lẻ (hàm tự do – "free function") hoặc hàm thành viên.

# 1. Nạp chồng bằng hàm tự do

Để viết một hàm tự do nạp chồng một toán tử, ta thực hiện viết hàm đó như bình thường, chi khác là thay vì một tên hàm,
ta viết ở đó từ khóa `operator` (tiếng Anh nghĩa là "toán tử") và theo sau đó là toán tử ta muốn thực hiện nạp chồng.
Trong hầu hết các trường hợp, hàm có thể trả về một kiểu dữ liệu bất kì, và nhận vào số đối bằng với số toán hạng của
toán tử. Trong số các đối đầu vào ứng với các toán hạng, ít nhất một đối phải có kiểu do người dùng định nghĩa (tức
không phải kiểu có sẵn trong ngôn ngữ).

Ví dụ ta có kiểu tự định nghĩa là lớp `Vector2D` như sau, thể hiện một vector trong không gian hai chiều:

```cpp
struct Vector2D {
	float x;
	float y;
};
```

Ta có thể thực hiện nạp chồng toán tử `+` để thể hiện phép toán cộng hai vector, và toán tử `*` để thể hiện phép toán
nhân vector với một vô hướng (số) như sau:

```cpp
Vector2D operator+(const Vector2D first, const Vector2D second) {
	return {first.x + second.x, first.y + second.y};
}

Vector2D operator*(const Vector2D vector, const float factor) {
	return {vector.x * factor, vector.y * factor};
}
```

Như vậy nếu ta có hai vector `v1` và `v2`, ta có thể viết `v1 + v2` để nhận về vector tổng của chúng và `v1 * 2.f` để
nhận về vector tích của `v1` với giá trị vô hướng `2.f`. Các biểu thức đó sẽ thực hiện gọi các hàm nạp chồng toán tử
tương ứng ở phía trên. Ta cũng có thể viết trực tiếp lời gọi hàm như `operator+(v1, v2)`.

# 2. Nạp chồng bằng hàm thành viên

Để viết một hàm thành viên nạp chồng toán tử ta cũng thực hiện tương tự như đối với khi viết hàm tự do. Khi hàm thành
viên thực hiện nạp chồng thì thực thể hiện tại sẽ luôn là toán hạng bên trái nhất. Các đối đầu vào của hàm thành viên sẽ
tương ứng với các toán hạng còn lại (nếu có).

Đối với lớp `Vector2D` ở trên ta có thể dùng hàm thành viên để nạp chồng hai toán tử `+` và `*` như sau:

```cpp
struct Vector2D {
	float x;
	float y;

	Vector2D operator+(const Vector2D other) const {
		return {x + other.x, y + other.y};
	}

	Vector2D operator*(const float factor) const {
		return {x * factor, y * factor};
	}
};
```

# 3. Hành vi đặc biệt và ràng buộc khi nạp chồng một số toán tử

Toán tử truy cập phạm vi `::`, toán tử truy cập thành viên `.`, toán tử phẩy `,`, toán tử ba ngôi `? :` không thể được
nạp chồng.

Các toán tử gán và toán tử gọi hàm chỉ có thể được nạp chồng bằng hàm thành viên.

Đối với toán tử gọi hàm, các đối đầu vào của hàm nạp chồng tương ứng với các tham trị được truyền vào.

Khi nạp chồng các toán tử tăng giảm hậu tố, để không bị trùng với toán tử tăng giảm tiền tố, một toán hạng ảo kiểu `int`
được truyền vào như là một toán hạng thứ hai. Khi toán tử tương ứng được sử dụng và hàm nạp chồng được gọi, giá trị của
toán hạng này sẽ luôn là `0`.

Trong C++ 2020, khi nạp chồng các toán tử so sánh bằng `==` và không bằng `!=` cho hai toán hạng có cùng kiểu, cần lưu ý
kiểu của hai toán hạng phải đều có hoặc không có `const`. Nguyên nhân là do phiên bản ngôn ngữ này xét thêm trường hợp
đảo vị trí của hai toán hạng để tìm các hàm nạp chồng có khả năng được gọi, và nếu hai toán hạng không đồng đều về tính
`const`, trường hợp ban đầu và trường hợp đảo ngược sẽ bị coi là nhập nhằng với nhau. Chi tiết về cơ chế tìm hàm nạp
chồng sẽ được trình bày trong các bài sau.

# 4. Viết mã viết ra và đọc từ màn hình cho các kiểu tự định nghĩa

Khi ta thực hiện viết một giá trị ra màn hình bằng biểu thức `std::cout << giaTri`, thực ra đó là do toán hạng dịch trái
`<<` được nạp chồng cho `std::ostream` là kiểu của biến toàn cục `std::cout` và kiểu của `giaTri`. Đối với các kiểu khác
chưa có hàm nạp chồng toán tử `<<` để viết ra màn hình, ta có thể tự mình viết hàm nạp chồng đó. Đối đầu vào thứ nhất là
một tham chiếu không `const` đến `std::ostream`, đối đầu vào thứ hai là kiểu giá trị ta muốn cho phép viết. Trong thân
hàm ta thực hiện thao tác trên luồng đầu ra có kiểu `std::ostream` để viết ra thể hiện bằng văn bản của giá trị, rồi trả
về tham chiếu đến luồng đầu ra được truyền vào.

Ví dụ ta có thể cho phép viết ra màn hình thể hiện bằng văn bản của một thực thể lớp `Vector2D` bằng hàm nạp chồng sau:

```cpp
std::ostream& operator<<(std::ostream &stream, const Vector2D vector) {
	stream << "(" << vector.x << "; " << vector.y << ")";
	return stream;
}
```

Tương tự, biểu thức đọc giá trị từ màn hình `std::cin >> bien` là toán hạng dịch phải `>>` được nạp chồng cho
`std::istream` là kiểu của biến toàn cục `std::cin` và kiểu của `bien`. Hàm nạp chồng nhận vào một tham chiếu đến
`std::istream` và một tham chiếu đến biến có kiểu muốn cho phép đọc, thực hiện các thao tác đọc cần thiết rồi trả về
tham chiếu đến luồng đầu vào có kiểu `std::istream` đã được truyền vào.

Ví dụ hàm nạp chồng dưới đây cho phép đọc vào một giá trị có kiểu `Vector2D`:

```cpp
std::istream& operator>>(std::istream &stream, Vector2D &vector) {
	stream >> vector.x >> vector.y;
	return stream;
}
```