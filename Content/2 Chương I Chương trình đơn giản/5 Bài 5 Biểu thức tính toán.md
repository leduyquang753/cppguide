Bài 5. Biểu thức tính toán
# 1. Một số toán tử cơ bản

Ta có thể thực hiện các thao tác tính toán trên các giá trị dữ liệu để sinh ra các giá trị dữ liệu mới bằng cách viết
các giá trị nguồn cùng với một kí hiệu thể hiện thao tác cần thực hiện, gọi là toán tử. Dưới đây là một số toán tử cơ
bản, `a` và `b` đại diện cho các giá trị đưa vào toán tử đó để bạn có thể biết vị trí đặt chúng khi viết:

- `+a`: Cho giá trị `a`.
- `-a`: Cho giá trị đối của `a`.
- `a + b`: Cho tổng của `a` và `b`.
- `a - b`: Cho hiệu của `a` và `b`.
- `a * b`: Cho tích của `a` và `b`.
- `a / b`: Cho thương nguyên của `a` và `b`.
- `a % b`: Cho phần dư của phép chia hai số nguyên `a` và `b`.

Khi thực hiện phép chia hai số nguyên, kết quả sẽ là một số nguyên bằng phần nguyên của kết quả phép chia. Phần dư của
phép chia là số nguyên sao cho khi nhân phần nguyên với số chia và cộng với phần dư ta được số bị chia.

Giá trị đưa vào toán tử có thể là một con số cố định hoặc lấy từ một biến bằng cách viết tên biến đó vào vị trí.

# 2. Biểu thức

Ta có thể viết nhiều toán tử với nhiều giá trị để thực hiện nhiều phép tính liên tiếp. Một chuỗi giá trị và toán tử như
vậy được gọi là một biểu thức. Một phép toán đơn lẻ (như `a + 5`), hay một giá trị duy nhất là một con số cố định (như
`5`) hoặc giá trị của một biến (như `a`) cũng thỏa mãn khái niệm chuỗi giá trị và toán tử và cũng là một biểu thức.

Khi có nhiều toán tử khác nhau được sử dụng, có các quy luật ưu tiên quyết định toán tử nào sẽ được nhóm với các giá trị
xung quanh nó trước. Các quy luật này tương tự như những gì bạn đã được học trong nhà trường, nhưng để cho rõ ràng, thứ
tự ưu tiên của các toán tử đã giới thiệu ở trên được liệt kê dưới đây:

1. `+a`, `-a`
2. `a * b`, `a / b`, `a % b`
3. `a + b`, `a - b`

Ví dụ với `a * -5 + b / 9`, `-` được nhóm với `5` trước, sau đó `*` được nhóm với `a` và `-5`, `/` được nhóm với `b` và
`9`, cuối cùng `+` thực hiện phép tính với kết quả của `a * -5` và `b / 9`.

Nếu có nhiều toán tử cùng mức ưu tiên đứng cạnh nhau, đối với `+a` và `-a`, thứ tự ưu tiên là từ phải sang trái, còn đối
với các toán tử còn lại thứ tự ưu tiên là từ trái sang phải. Như vậy:

- `+-a` thực hiện nhóm `-` với `a` trước, rồi `+` được thực hiện trên kết quả của `-a`.
- `a * b / 2` thực hiện nhóm `*` với `a` và `b` trước, rồi `/` được thực hiện trên kết quả của `a * b` và số `2`.

Bạn có thể sử dụng các cặp ngoặc tròn `()` để tự mình nhóm các phần biểu thức lại với nhau mà không nhất thiết phải tuân
theo các quy luật ưu tiên. Như trong `(a + b) * 2`, toán tử `*` sẽ thực hiện trên kết quả của `a + b` và số `2`.

Giá trị kết quả của biểu thức có thể được dùng để khởi tạo và gán cho các biến, ví dụ `int dienTich{(chieuDai +
chieuRong) * 2};`, `luaChon = (luaChon + 1) % soLuaChon;`.