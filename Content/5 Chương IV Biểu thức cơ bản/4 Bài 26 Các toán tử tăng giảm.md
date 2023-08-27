Bài 26. Các toán tử tăng giảm
C++ cung cấp các toán tử cho phép thực hiện tăng hoặc giảm một biến kiểu số theo mức một đơn vị. Trong bài này `a` đại
diện cho một biến kiểu số.

# 1. Các toán tử tăng giảm tiền tố

Toán tử `++a` là toán tử tăng tiền tố, tương đương với `a += 1`.

Toán tử `--a` là toán tử giảm tiền tố, tương đương với `a -= 1`.

Việc tương đương với các biểu thức gán tương ứng có nghĩa rằng các toán tử trên sẽ cho ra bản thân biến với giá trị mới.

# 2. Các toán tử tăng giảm hậu tố

Toán tử `a++` là toán tử tăng hậu tố, cho ra giá trị ban đầu của `a`, sau đó thực hiện `a += 1`.

Toán tử `a--` là toán tử giảm hậu tố, cho ra giá trị ban đầu của `a`, sau đó thực hiện `a -= 1`.

# 3. Sử dụng các toán tử tăng giảm trong thực tế

Thực tế đã cho thấy rằng việc sử dụng các toán tử tăng giảm trong các biểu thức tính toán gây ra những khó khăn và nhầm
lẫn khi đọc hiểu mã nguồn, hơn nữa chúng còn có nguy cơ gây ra các vấn đề liên quan đến thứ tự tính giá trị (sẽ được đề
cập trong các bài sau). Vì thế, ta chỉ nên sử dụng các toán tử này như những câu lệnh riêng để thực hiện tăng hay giảm
một đơn vị của biến và không sử dụng giá trị trả về của chúng.

Khi sử dụng các toán tử tăng giảm làm các câu lệnh riêng để thực hiện tăng giảm, đối với các kiểu không cơ bản, thường
các toán tử tăng giảm hậu tố sẽ phải làm nhiều việc hơn để có thể trả về được giá trị ban đầu của biến, trong khi các
toán tử tăng giảm tiền tố chỉ cần đơn giản là trả về bản thân biến. Vì thế, ta nên sử dụng các toán tử tăng giảm tiền
tố. Các kiểu không cơ bản sẽ được tìm hiểu trong các bài sau.