Bài 27. Các toán tử logic
Các toán tử logic thao tác trên các giá trị kiểu `bool`. Trong bài này `a` và `b` đại diện cho hai biểu thức cho ra giá
trị kiểu `bool` hoặc có thể được ngầm định chuyển đổi thành kiểu `bool`.

Toán tử `!a` là toán tử đảo, cho ra `false` nếu `a` là `true` hoặc `true` nếu `a` là `false`.

Toán tử `a && b` là toán tử và. Trước hết `a` được tính giá trị, nếu là `false` thì cho ra `false` và không thực hiện
tính giá trị của `b`. Nếu `a` là `true` thì toán tử cho ra `b`. Như vậy, toán tử cho ra `true` khi cả `a` và `b` là
`true` và `false` trong các trường hợp còn lại.

Toán tử `a || b` là toán tử hoặc. Trước hết `a` được tính giá trị, nếu là `true` thì cho ra `true` và không thực hiện
tính giá trị của `b`. Nếu `a` là `false` thì toán tử cho ra `b`. Như vậy, toán tử cho ra `true` khi `a` hoặc `b` là
`true` và `false` nếu cả `a` và `b` là `false`.

Việc hai toán tử `a && b` và `a || b` không thực hiện tính giá trị của `b` khi giá trị của `a` đã đủ để quyết định kết
quả được gọi là "ngắn mạch" (short-circuiting).