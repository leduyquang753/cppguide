Bài 6. Tương tác cơ bản với người dùng
Như đã nói (trong [bài 3, phần 2](!2.3#2)), hiện tại các chương trình của chúng ta thực hiện tương tác với người dùng
thông qua giao diện dạng văn bản. Tương tác có thể diễn ra theo hai chiều: người dùng cung cấp dữ liệu cho chương trình
và chương trình hiển thị thông tin cho người dùng. Trong bài này ta sẽ tìm hiểu một số thao tác cơ bản thực hiện hai
chiều tương tác đó.

# 1. Viết lên màn hình

Đây là chiều chương trình hiển thị thông tin cho người dùng. Cú pháp câu lệnh có dạng:

```cpp
std::cout << <nội dung>;
```

`std::cout` là một đối tượng được cung cấp bởi C++ thể hiện chỗ tiếp nhận nội dung viết lên màn hình, dấu `<<` thể hiện
thao tác viết, nó có chiều từ phải sang trái tương ứng với việc nội dung được truyền vào `std::cout`. Và cần nhớ rằng
câu lệnh kết thúc bằng dấu chấm phẩy `;`.

Vị trí nội dung sẽ được viết ra là vị trí con trỏ soạn thảo trên màn hình. Ta có thể hiểu rằng người dùng và chương
trình thực hiện viết nội dung trên chung một cửa sổ soạn thảo văn bản.

Hai nội dung cơ bản có thể được viết là:

- Một giá trị. Hiện tại với kiểu số nguyên ta có thể viết một biểu thức cho ra giá trị số nguyên.
- Nội dung văn bản được bao trong cặp nháy kép `""`, ví dụ `"Nhap so thu nhat: "`.

Có một số lưu ý khi viết nội dung văn bản:

- Do dấu nháy kép mang nghĩa bắt đầu và kết thúc nội dung, nếu muốn sử dụng nó trong nội dung, ta cần phải đặt trước nó
  một dấu gạch chéo ngược `\`, chẳng hạn: `"Chon \"co\" hoac \"khong\"."` để viết ra nội dung `Chon "co" hoac "khong".`.
- Lệnh viết không tự động xuống dòng sau khi viết xong. Để thực hiện xuống dòng, viết `\n`. Ví dụ `"Da xong.\nNhan Enter
  de tiep tuc."` sẽ được viết trên hai dòng.

Ta có thể viết liên tiếp nhiều phần nội dung trong cùng một câu lệnh. Để thêm một nội dung, bạn viết thêm dấu `<<` vào
sau nội dung trước đó rồi xác định nội dung tiếp theo. Chẳng hạn ta có thể thông báo giá trị biến số nguyên `dienTich`
bằng cách viết `std::cout << "Dien tich: " << dienTich << "\n";`. Lưu ý dấu cách ở cuối nội dung văn bản để tạo khoảng
cách với giá trị số được viết ra, lệnh viết không tự động thêm các dấu cách, và dấu xuống dòng được sử dụng để cho các
nội dung mới xuất hiện trên dòng tiếp theo.

::: note note Ghi chú
Có thể bạn đã từng học `<<` là một toán tử. Điều này sẽ được tìm hiểu cụ thể trong các bài tiếp theo.
:::

# 2. Đọc từ màn hình

Đây là chiều người dùng cung cấp dữ liệu cho chương trình. Cú pháp câu lệnh có dạng:

```cpp
std::cin >> <biến>;
```

`std::cin` là đối tượng được cung cấp bởi C++ thể hiện nguồn dữ liệu từ màn hình, dấu `>>` thể hiện thao tác đọc, nó có
chiều từ trái sang phải tương ứng với việc dữ liệu được truyền từ `std::cin` vào biến.

Đối với kiểu dữ liệu số nguyên, biến được xác định sẽ là một biến số nguyên. Thông thường người dùng sẽ thực hiện gõ các
chữ số của số nguyên muốn cung cấp vào màn hình rồi nhấn Enter. Các chữ số sẽ được xử lí và giá trị số nguyên tương ứng
sẽ được lưu vào biến.

Ta cũng có thể đọc liên tiếp nhiều biến trong cùng một câu lệnh bằng cách thêm dấu `>>` và biến tiếp theo cần đọc. Khi
muốn cung cấp dữ liệu cho nhiều biến, người dùng có thể gõ nhiều con số trên một dòng, cách nhau bởi các dấu cách rồi
nhấn Enter. Chẳng hạn với hai biến số nguyên `x` và `y`, khi đến câu lệnh `std::cin >> x >> y;`, người dùng có thể nhập
`50 75` rồi nhấn Enter để cung cấp `50` cho biến `x` và `75` cho biến `y`.

::: note note Ghi chú
Thực ra `std::cout` và `std::cin` không nhất thiết phải thể hiện màn hình văn bản. Chúng có thể là các vị trí, đối tượng
khác nhau chẳng hạn như tệp văn bản hay một chương trình khác. Tuy nhiên trong khuôn khổ trang hướng dẫn này chủ yếu ta
sẽ dùng chúng để thực hiện thao tác với người dùng qua màn hình.
:::