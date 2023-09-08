Bài 31. Một số loại giá trị cơ bản
Các biểu thức trong C++ cho ra các giá trị, mỗi giá trị thuộc về một trong số các loại giá trị khác nhau. Bài này sẽ
trình bày hai loại giá trị cơ bản.

# 1. Giá trị trái (lvalue)

C++ cho phép sử dụng bản thân các đối tượng làm giá trị trong các biểu thức. Loại giá trị thể hiện các đối tượng này
được gọi là giá trị trái, do chúng có thể được dùng làm toán hạng bên trái của [các toán tử gán](!5.3)[ (bài
25)]{.printAlt}. Khi làm như vậy, giá trị của đối tượng được thể hiện bằng giá trị trái đó sẽ được cập nhật. Trong thuật
ngữ tiếng Anh "lvalue", "l" là viết tắt của "left" nghĩa là "trái", và "value" nghĩa là "giá trị".

Nguồn giá trị trái chủ đạo là các biến. Khi ta viết tên một biến, nó cho ra giá trị trái thể hiện biến đó.

Một số toán tử khi nhận vào các giá trị trái sẽ cho ra một giá trị trái. Trong số các toán tử ở [chương IV](!4.0), các
toán tử có thể cho ra giá trị trái bao gồm:

- Các toán tử gán.
- Các toán tử tăng giảm tiền tố.
- Toán tử phẩy.
- Toán tử ba ngôi.

Ví dụ, ta có thể sử dụng toán tử ba ngôi để áp dụng thay đổi vào một trong hai biến số nguyên `soSoChan` và `soSoLe` dựa
vào một điều kiện như sau:

```cpp
(soDuocNhap % 2 == 0 ? soSoChan : soSoLe) += 1;
```

Các giá trị trái còn được gọi là các tham chiếu (reference) đến các biến mà chúng thể hiện.

# 2. Giá trị thuần phải (prvalue)

Những giá trị thuần phải bao gồm phần lớn các giá trị không thuộc về một đối tượng. Các giá trị này có thể được dùng làm
toán hạng bên phải của các toán tử gán. "Pr" là viết tắt của "pure right", nghĩa là "thuần phải".

Nguồn giá trị thuần phải chủ đạo là phần lớn các giá trị trực tiếp, bao gồm giá trị trực tiếp của các kiểu dữ liệu cơ
bản ở [chương III](!3.0).

Trong số các toán tử ở [chương IV](!4.0), các toán tử sau nhận vào các giá trị thuần phải và cho ra một giá trị thuần
phải:

- Các toán tử số học.
- Các toán tử so sánh.
- Các toán tử logic.

Toán tử tăng giảm hậu tố nhận vào một giá trị trái và cho ra một giá trị thuần phải. Toán tử phẩy và toán tử ba ngôi có
thể nhận vào các giá trị thuần phải và cho ra một giá trị thuần phải.

# 3. Chuyển đổi từ giá trị trái sang giá trị thuần phải

Các giá trị trái có thể được ngầm định chuyển đổi thành một giá trị thuần phải, giá trị kết quả là giá trị được chứa
trong đối tượng được thể hiện bởi giá trị trái ban đầu. Điều này cho phép các giá trị trái được sử dụng cho các toán tử
nhận vào các giá trị thuần phải. Ví dụ, với biến số nguyên `a`, trong biểu thức `a + 5`, giá trị trái `a` được chuyển
đổi thành giá trị thuần phải là giá trị hiện tại của biến `a`.