Bài 25. Các toán tử gán
Cú pháp `bien = giaTri` trong câu lệnh gán thực chất cũng là một toán tử. C++ cung cấp các toán tử thực hiện không chỉ
gán giá trị đơn thuần mà còn có thể thực hiện phép toán trực tiếp trên giá trị của biến.

Cú pháp cơ bản của các toán tử gán là đặt tên một biến vào phía trái và một giá trị vào phía phải. Trong bài này `a` sẽ
đại diện cho biến ở phía trái và `b` đại diện cho giá trị ở phía phải.

Toán tử `a = b` là toán tử gán thông thường, thực hiện sao chép giá trị `b` vào `a`. Nếu kiểu của `b` khác với kiểu của
`a`, `b` sẽ được ngầm định chuyển đổi thành kiểu của `a`. Kết quả cho ra là bản thân biến `a`.

Toán tử `a += b` có kết quả tương đương với `a = (a + b)`.

Toán tử `a -= b` có kết quả tương đương với `a = (a - b)`.

Toán tử `a *= b` có kết quả tương đương với `a = (a * b)`.

Toán tử `a /= b` có kết quả tương đương với `a = (a / b)`.

Toán tử `a %= b` có kết quả tương đương với `a = (a % b)`.

Toán tử `a &= b` có kết quả tương đương với `a = (a & b)`.

Toán tử `a |= b` có kết quả tương đương với `a = (a | b)`.

Toán tử `a ^= b` có kết quả tương đương với `a = (a ^ b)`.

Toán tử `a <<= b` có kết quả tương đương với `a = (a << b)`.

Toán tử `a >>= b` có kết quả tương đương với `a = (a >> b)`.

Mặc dù kết quả của các toán tử gán có tính toán là tương đương với biểu thức gán tương ứng, hành động của chúng là không
tương đương. Mỗi phép gán có tính toán được coi là một thao tác, trong khi biểu thức có kết quả tương ứng thực hiện hai
thao tác.

Trong thực tế, việc sử dụng các toán tử gán trong các biểu thức thường làm cho mã nguồn khó đọc hơn, vì thế ta chỉ nên
sử dụng chúng như những câu lệnh riêng và không sử dụng giá trị trả về của chúng. Một ngoại lệ là khi ta muốn gán một
giá trị cho nhiều biến khác nhau thì ta có thể sử dụng nối tiếp toán tử `a = b`, ví dụ `a = b = c = 0;`, nếu đặt các dấu
ngoặc vào cho rõ thứ tự thực hiện thì sẽ là `a = (b = (c = 0)));`