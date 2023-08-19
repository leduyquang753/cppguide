Bài 18. Kiểu `void`
Như ta đã biết `void` là một kiểu không có giá trị và không thể được dùng làm kiểu của một đối tượng, và nó được sử dụng
làm kiểu trả về cho các hàm không trả về giá trị.

Tuy nhiên, một giá trị kiểu bất kì có thể được "chuyển đổi" thành kiểu `void`, trong thực tế không có giá trị mới tương
ứng nào được tạo ra, biểu thức `static_cast` đơn giản thực hiện bỏ qua giá trị đó. Thường nó được dùng để loại bỏ các
cảnh báo rằng giá trị của một biến hoặc một biểu thức nào đó không được sử dụng, ví dụ:

```cpp
const int ketQua = thucHienHanhDong();
static_cast<void>(ketQua);
```