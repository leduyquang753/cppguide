Bài 28. Các toán tử khác
# 1. Toán tử gọi hàm

Cú pháp gọi hàm cũng là một toán tử, gồm tên hàm cần gọi, dấu mở ngoặc tròn `(`, các giá trị truyền vào hàm phân cách
bằng dấu phẩy `,` nếu có và dấu đóng ngoặc tròn `)`. Toán tử cho ra giá trị trả về của hàm.

Nếu hàm có kiểu trả về `void`, toán tử gọi hàm được coi như cho ra một giá trị kiểu `void`.

# 2. Toán tử phẩy

Với `a` và `b` là hai biểu thức, toán tử `a, b` thực hiện tính giá trị của `a`, sau đó loại bỏ giá trị của `a`, rồi thực
hiện và cho ra giá trị của `b`.

Công dụng chủ yếu của toán tử này là để xác định nhiều hành động sau lần lặp cho câu lệnh lặp `for`, ví dụ:

```cpp
for (int i = 0, viTri = layViTriKhoiDau(); i != 10; ++i, ++viTri) {
	datCo(viTri);
}
```

Biểu thức hành động sau lần lặp là `++i, ++viTri`, thực hiện tăng lần lượt `i` và `viTri`.

Dấu phẩy `,` sử dụng trong câu lệnh khởi tạo, trong cặp ngoặc tròn `()` của toán tử gọi hàm và trong một số vị trí khác
mang ý nghĩa khác và không phải là toán tử phẩy, nếu muốn sử dụng thì bạn cần bao biểu thức trong một cặp ngoặc tròn.

# 3. Toán tử ba ngôi

Toán tử ba ngôi cho phép tính giá trị phụ thuộc vào một điều kiện. Với `c` là một biểu thức cho ra giá trị có kiểu
`bool` hoặc có thể được ngầm định chuyển đổi thành kiểu `bool`, `t` và `f` là hai biểu thức, toán tử có dạng `c ? t :
f`. Trước hết `c` được tính giá trị, sau đó nếu `c` là `true`, toán tử sẽ thực hiện tính và cho ra giá trị của `t`, bỏ
qua `f`, còn nếu `c` là `false`, toán tử bỏ qua `t`, thực hiện tính và cho ra giá trị của `f`.

C++ có một chuỗi quy luật rất phức tạp để quyết định kiểu giá trị của toán tử ba ngôi dựa trên kiểu giá trị của hai biểu
thức `t` và `f`. Thông thường, ta sử dụng hai biểu thức cho ra cùng một kiểu giá trị, khi đó kiểu trả về của toán tử
cũng sẽ là kiểu giá trị đó.

Khi viết nhiều toán tử ba ngôi thành một chuỗi, giống như đối với câu lệnh rẽ nhánh, mỗi dấu hai chấm `:` sẽ tương ứng
với dấu chấm hỏi `?` gần nhất về phía trước mà chưa có dấu hai chấm tương ứng. Ta cũng nên bố trí vị trí của các thành
phần biểu thức sao cho dễ đọc, ví dụ:

```cpp
int phiGiaoHang = ngay == thang
	? khoiLuong > 5000 ? 10'000 : 0
	: khoiLuong > 10'000 ? 50'000 : 20'000;
```

::: note warning Lưu ý
Mục đích sử dụng của toán tử ba ngôi là dành cho các giá trị có điều kiện, không phải dành cho các hành động có điều
kiện; nếu muốn thực hiện một số hành động dựa trên điều kiện, ta sử dụng câu lệnh rẽ nhánh `if`–`else`. Một số người lạm
dụng toán tử này trong C++ cũng như trong một số ngôn ngữ khác như JavaScript, Python,... thay cho `if`–`else` để làm
cho mã nguồn trông có vẻ ngắn gọn hơn, nhưng đổi lại sự gọn gàng bề ngoài lại làm cho mã nguồn trở nên khó đọc. Trong
một số ngôn ngữ khác chặt chẽ hơn, việc sử dụng toán tử ba ngôi cho mục đích này thậm chí là không hợp lệ.
:::