Bài 4. Biến
# 1. Khai báo biến

Trong [bài 3](!2.3) ta đã nhắc đến dòng `int a;` để khai báo một vị trí lưu dữ liệu. Thuật ngữ chính để gọi các vị trí
lưu dữ liệu này là "biến", có lẽ là nói tắt từ nghĩa của thuật ngữ tiếng Anh "variable" là "biến đổi được".

Mỗi biến có một tên gọi, thuật ngữ gọi là định danh (identifier) và được chỉ định một kiểu (type), là loại giá trị có
thể được chứa vào biến đó. Trong ví dụ `int a;`, `a` là định danh của biến và `int` là kiểu của biến.

Có một số quy định liên quan đến định danh của biến, hiện tại để cho đơn giản mà vẫn tránh được các vấn đề, bạn nên đặt
tên biến với chỉ các chữ cái tiếng Anh, chữ số và dấu gạch dưới, và kí tự đầu tiên luôn là một chữ cái tiếng Anh.

Dù vậy, có một số từ được sử dụng bởi ngôn ngữ C++ với các ý nghĩa đặc biệt, chúng được gọi là từ khóa và không thể
được sử dụng làm định danh cho biến. Các phần mềm viết mã C++ thường sẽ tô màu nổi bật các từ khóa, nên nếu bạn thấy tên
biến mình đặt đổi màu như vậy, bạn sẽ cần phải chọn một định danh khác. Bạn có thể xem danh sách các từ khóa trên
[CPPReference](https://en.cppreference.com/w/cpp/keyword)[ (https://en.cppreference.com/w/cpp/keyword)]{.printAlt}.

C++ cung cấp nhiều kiểu dữ liệu khác nhau, ở đây để bắt đầu ta sẽ chỉ sử dụng kiểu `int`, những kiểu dữ liệu khác sẽ dần
được giới thiệu trong các bài tiếp theo. Tên kiểu `int` là một từ khóa do đây là một kiểu rất cơ bản.

Tên kiểu, tên biến và phần lớn các thành phần khác trong mã nguồn C++ phân biệt chữ hoa và chữ thường, vì vậy khi sử
dụng chúng bạn cần chú ý gõ cho chính xác.

# 2. Khởi tạo biến

Một biến phải chứa một giá trị nào đó trước khi nó được truy cập, nếu không, chương trình là không hợp lệ và sẽ có hành
vi không xác định. Ta có thể cho biến một giá trị ngay khi khai báo, hành động này được gọi là khởi tạo biến.

C++ có nhiều cú pháp khác nhau để khởi tạo biến. Để làm ví dụ ta sẽ khởi tạo một biến `a` kiểu `int` với giá trị `5`.

- Khởi tạo sao chép: Viết sau tên biến một dầu bằng `=` và giá trị ban đầu: `int a = 5;`.
- Khởi tạo trực tiếp: Viết sau tên biến giá trị ban đầu được bao trong một cặp ngoặc tròn `()`: `int a(5);`.
- Khởi tạo danh sách: Có ba cú pháp:
  - Viết sau tên biến giá trị ban đầu được bao trong một cặp ngoặc móc `{}`: `int a{5};`.
  - Khởi tạo sao chép bằng danh sách: Viết sau tên biến một dấu bằng `=` và giá trị ban đầu trong một cặp ngoặc móc
  	`{}`: `int a = {5};`.
  - Khởi tạo giá trị: Viết sau tên biến một cặp ngoặc móc trống `{}`: `int a{};`. Giá trị ban đầu sẽ bằng 0.

Khởi tạo danh sách có một tính năng an toàn là không cho phép chuyển đổi giá trị từ một kiểu dữ liệu sang một kiểu khác
"hẹp" hơn. Ta hãy xét ví dụ `int i{5.9};`. `5.9` là một giá trị số thực chứa phần thập phân, mà kiểu dữ liệu số nguyên
thì không thể chứa phần thập phân, nên nếu ta đưa giá trị này vào biến sẽ xảy ra mất mát dữ liệu. Vì thế đây là một thao
tác chuyển đổi thu hẹp, cú pháp khởi tạo danh sách sẽ ngăn chặn và bộ dịch sẽ báo lỗi. (Các kiểu dữ liệu có thể chứa số
thực sẽ được giới thiệu sau.) Khởi tạo danh sách là kiểu khởi tạo hiện đại của C++ và bạn nên chủ yếu sử dụng cú pháp
này.

Một tính năng nhỏ của C++ khi viết các giá trị số nguyên là bạn có thể chèn các dấu nháy đơn `'` vào giữa các chữ số để
làm dấu phân cách cho dễ đọc hơn, chẳng hạn `5'000'000` thể hiện con số năm triệu.

Thực ra, khi bạn không thực hiện khởi tạo biến, C++ thực hiện khởi tạo mặc định, tuy nhiên kiểu khởi tạo này đối với các
biến kiểu số không thực hiện cho biến một giá trị ban đầu. Bạn nên thực hiện khởi tạo cho tất cả các biến ngay khi khai
báo để tránh việc quên đưa một giá trị vào biến trước khi truy cập và làm cho chương trình trở nên không hợp lệ.

C++ có nhiều cú pháp khởi tạo khác nhau như trên để phục vụ cho những trường hợp sử dụng khác nhau, công dụng cụ thể của
các cú pháp sẽ được trình bày trong các bài sau.

# 3. Khai báo và khởi tạo nhiều biến

Ta có thể khai báo và khởi tạo nhiều biến cùng kiểu trong một câu lệnh khai báo. Đầu tiên ta viết kiểu của các biến, sau
đó ta viết tên và cú pháp khởi tạo của các biến, phân cách bằng dấu phẩy `,`, ví dụ:

```cpp
int startX{10}, startY{20};
```

Tuy nhiên cú pháp này thường gây khó đọc hơn, vì thế tốt nhất bạn nên khai báo mỗi biến trong một câu lệnh riêng:

```cpp
int startX{10};
int startY{20};
```

# 4. Gán biến

Ta có thể đưa một giá trị mới vào biến sau khi khai báo, đây chính là "vary" trong "variable", "biến đổi" trong "biến
đổi được". Câu lệnh gán gồm định danh biến cần gán ở bên trái, dấu bằng `=` và giá trị mới để gán ở bên phải. Giá trị
mới sẽ được sao chép vào biến. Chẳng hạn muốn đổi giá trị của biến `a` kiểu `int` thành `42` ta viết `a = 42;`.

# 5. Biến hằng

Nhiều khi trong khi viết chương trình ta sẽ có những biến mà chỉ được cho một giá trị khi khởi tạo và không được gán giá
trị khác sau đó. Để thể hiện ý muốn này, ta viết thêm từ `const` vào đầu câu lệnh khai báo, chẳng hạn `const int
size{100};`. `const` là viết tắt của "constant", nghĩa là hằng số. C++ sẽ không cho phép thực hiện gán giá trị mới cho
biến và bộ dịch sẽ báo lỗi nếu ai đó vô tình làm vậy. Khi bạn thực sự muốn thay đổi giá trị biến đó, việc bộ dịch báo
lỗi như vậy có thể làm cho bạn để ý tới những ảnh hưởng có thể xảy ra khi thực hiện thay đổi biến. Vì vậy, bạn nên viết
thêm `const` vào mọi khai báo biến mà bạn chưa có ý định thay đổi giá trị sau khi khai báo.