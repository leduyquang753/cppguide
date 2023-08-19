Bài 17. Một số điều cơ bản về dữ liệu
# 1. Đối tượng

Thuật ngữ "đối tượng", tiếng Anh là "object", trong C++ được sử dụng để chỉ vị trí lưu dữ liệu của một giá trị, giá trị
này có một kiểu dữ liệu nhất định. Câu lệnh khai báo biến mà ta đã sử dụng là một trong những thao tác có thể tạo ra một
đối tượng như vậy.

Để có thể thao tác được với dữ liệu của đối tượng, máy tính thực hiện lưu dữ liệu đó vào một vị trí nào đó. Hai vị trí
thường được sử dụng nhất là các thanh ghi trong CPU và bộ nhớ trong (RAM). Các đối tượng được tạo ra và hủy bỏ theo nhu
cầu sử dụng của chương trình.

::: note note Ghi chú
Nếu bạn đã tìm hiểu, lập trình hướng đối tượng (OOP) cũng có một thuật ngữ "đối tượng" nhưng nó mang một ý nghĩa khác
với trong C++.
:::

# 2. Kích cỡ của kiểu dữ liệu

## a) Khái niệm

Thông tin trong máy tính được biểu diễn bằng các bit, một mẩu dữ liệu sẽ được biểu diễn bằng một số lượng bit nhất định.
Các kiểu dữ liệu cơ bản trong C++ sử dụng một số lượng bit cố định để lưu tất cả các giá trị có thể của kiểu dữ liệu đó.
Tuy nhiên, để tăng hiệu quả vận hành, máy tính thường không thao tác với các bit đơn lẻ mà là với các nhóm bit, mỗi nhóm
gồm một số lượng xác định các bit. Trong bộ nhớ máy tính thì các nhóm bit này được gọi là các byte, và thông tin sẽ được
chứa trong một số nguyên các byte. C++ chỉ quy định số bit tối thiểu trong một byte là 8, trong thực tế ngày nay thì số
bit trong một byte chủ yếu là 8.

Tất cả các kiểu dữ liệu trong C++ sử dụng một số nguyên các byte để lưu dữ liệu, trong đó có thể sẽ có một số bit không
được sử dụng để lưu dữ liệu. Số byte này được gọi là kích cỡ của kiểu. Một đối tượng sẽ sử dụng số lượng byte bộ nhớ
bằng với kích cỡ của kiểu dữ liệu của nó. Kích cỡ của một kiểu dữ liệu có thể thay đổi trong các môi trường khác nhau.

## b) Toán tử lấy kích cỡ kiểu dữ liệu

C++ có cơ chế cho phép ta truy vấn kích cỡ của một kiểu dữ liệu là toán tử `sizeof`, nghĩa là "kích cỡ của", có hai
dạng:

1. `sizeof (<kiểu>)` khi đưa trực tiếp tên một kiểu vào để truy vấn.
2. `sizeof <biểu thức>` khi truy vấn kích cỡ của kiểu kết quả của một biểu thức.

Tuy nhiên để cho thống nhất và tránh nhầm lẫn ta thường luôn đặt cặp ngoặc đơn `()` ngay cả khi đưa vào một biểu thức.

Toán tử sẽ trả về một số nguyên là kích cỡ của kiểu dữ liệu.

# 3. Giá trị trực tiếp

Thuật ngữ tiếng Anh "literal", trong trang này gọi là "giá trị trực tiếp", được sử dụng để chỉ những giá trị cố định
được viết trực tiếp tại vị trí sử dụng trong mã nguồn. Chúng ta đã biết cách viết giá trị trực tiếp của kiểu dữ liệu số
nguyên là một dãy các chữ số (có thể phân tách bởi dấu nháy đơn `'`) và của kiểu dữ liệu Boole là `true` hoặc `false`.
Khi các kiểu dữ liệu cơ bản được trình bày trong chương này, cú pháp để viết giá trị trực tiếp của các kiểu đó cũng sẽ
được mô tả.

# 4. Chuyển đổi kiểu

Giá trị của một kiểu dữ liệu có thể được chuyển đổi sang một giá trị tương ứng của một kiểu dữ liệu khác. Để thực hiện
thao tác chuyển đổi giữa các kiểu dữ liệu cơ bản sẽ được trình bày trong chương này, ta sử dụng biểu thức `static_cast`
(nghĩa là "ép tĩnh") có dạng như sau:

```cpp
static_cast<kiểu đích>(giá trị)
```

Lưu ý kiểu đích được bao trong cặp ngoặc nhọn `<>` và giá trị được bao trong cặp ngoặc tròn `()`.

Biểu thức sẽ cho ra giá trị của kiểu đích tương ứng với giá trị được đưa vào. Các quy luật cụ thể về việc giá trị của
kiểu nào có thể được chuyển đổi sang kiểu nào và giá trị tương ứng được quyết định ra sao sẽ được trình bày trong các
bài tiếp theo.

::: note danger Nguy hiểm
Nhiều nguồn khác giới thiệu cú pháp `(kiểu đích)giá trị` để thực hiện chuyển đổi kiểu. Cú pháp này là của C và không nên
được sử dụng trong C++, lí do cụ thể sẽ được tìm hiểu trong các bài tiếp theo.
:::