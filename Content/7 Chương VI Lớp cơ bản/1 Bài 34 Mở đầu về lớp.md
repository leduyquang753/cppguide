Bài 34. Mở đầu về lớp
# 1. Khái niệm

Trong thực tế dữ liệu thường không chỉ là những con số đơn lẻ, mà là từ những thành phần đơn lẻ đó cấu thành một cấu
trúc phức tạp hơn. Nếu như ngôn ngữ lập trình chỉ cung cấp những kiểu dữ liệu cơ bản, ta vẫn có thể viết được các chương
trình xử lí những loại dữ liệu có cấu trúc đó, tuy nhiên việc thực hiện sẽ rất phức tạp do ta luôn luôn phải để ý đến
cách bố trí của các thành phần dữ liệu. Vì thế, một nhu cầu xuất hiện về việc người lập trình có khả năng không chỉ sử
dụng những kiểu dữ liệu cơ bản được cung cấp, mà còn tự mình tạo ra những kiểu dữ liệu mới.

Trong lập trình hướng đối tượng, những yếu tố trong thế giới thực được mô hình hóa thành các đối tượng (object). Các đối
tượng này chứa những thông tin mô tả chúng và liên quan đến yêu cầu của chương trình dưới dạng các trường dữ liệu (data
field). Một nhóm các đối tượng cùng loại được gọi là một lớp (class), mỗi lớp sẽ mô tả các trường dữ liệu của các đối
tượng và tập hợp các hành động mà các đối tượng có thể thực hiện, gọi là các phương thức (method). Các đối tượng cùng
loại đó được gọi là các thực thể (instance) của lớp tương ứng. Như vậy, các lớp là các kiểu dữ liệu có cấu trúc, được
cấu thành từ các trường dữ liệu của các lớp đó.

::: note warning Lưu ý
Như đã đề cập từ trước đó, thuật ngữ "đối tượng" trong lập trình hướng đối tượng và trong ngôn ngữ C++ mang hai ý nghĩa
khác nhau. Trang hướng dẫn này chủ yếu sẽ tiếp tục sử dụng thuật ngữ theo nghĩa trong C++.
:::

Phương thức lập trình hướng đối tượng là một trong những mục tiêu đầu tiên trong quá trình hình thành ngôn ngữ C++, điều
này thể hiện trong cái tên đầu tiên của ngôn ngữ là "C với các lớp", như đã đề cập trong [bài 1](!2.1). Do đó, ngôn ngữ
có một hệ thống cơ chế toàn diện phục vụ cho lập trình hướng đối tượng, bao gồm cơ chế lớp đối tượng.

# 2. Định nghĩa lớp cơ bản

## a) Dạng cú pháp

Cú pháp cơ bản để thực hiện định nghĩa một lớp có dạng như sau:

```cpp
class <tên lớp> {
	<các khai báo>
};
```

Tên lớp là một định danh để ta có thể nhắc đến lớp đó trong mã nguồn. Chú ý dấu chấm phẩy ở cuối cú pháp khai báo.

Ta có thể thay từ khóa `class` trong cấu trúc khai báo bằng từ khóa `struct`, viết tắt của "structure" nghĩa là "cấu
trúc". Từ khóa này đến từ ngôn ngữ C. Trong C++, ngoài một điểm nhỏ sẽ được nhắc đến phía sau, `struct` có tác dụng
tương đương với `class`.

Thông thường, một lớp sẽ được định nghĩa trong phạm vi toàn cục, tuy nhiên C++ cho phép định nghĩa một lớp trong thân
của một hàm, khi đó lớp sẽ chỉ có phạm vi trong khối lệnh chứa nó. Ngoài ra, một lớp định nghĩa trong hàm có thêm [nhiều
hạn chế](https://en.cppreference.com/w/cpp/language/class#Local_classes) mà sẽ không được đề cập trong hướng dẫn này.
[Nếu muốn, bạn có thể đọc về lớp cục bộ tại https://en.cppreference.com/w/cpp/language/class#Local_classes)]{.printAlt}.

## b) Biến thành viên

Ta thực hiện mô tả các trường dữ liệu của các thực thể của lớp bằng cách viết các khai báo biến vào bên trong cặp ngoặc
móc `{}` của cú pháp định nghĩa. Trong C++ chúng được gọi là các biến thành viên (member variable). Mỗi thực thể của lớp
đều sẽ có một bộ biến thành viên như được mô tả.

Dưới đây là một ví dụ định nghĩa lớp với các biến thành viên:

```cpp
class DaGiac {
	int soCanh;
	double doDaiCanh;
};
```

Đoạn mã trên định nghĩa một lớp với tên là `DaGiac`, chứa hai biến thành viên là `soCanh` kiểu `int` và `doDaiCanh` kiểu
`double`.

## c) Một số mức truy cập

Phương thức lập trình hướng đối tượng có một nguyên tắc cơ bản là tính đóng gói (encapsulation): một đối tượng chỉ làm
lộ ra bên ngoài những yếu tố cần thiết để những thành phần khác có thể sử dụng được đối tượng, và giấu đi những yếu tố
thuộc về hoạt động bên trong. Một cơ chế phổ biến phục vụ cho nguyên tắc này là những chỉ định mức truy cập, xác định
những thành phần nào của lớp có thể được truy cập từ bên ngoài và những yếu tố nào thì không.

C++ có hai mức truy cập cơ bản như sau:

- `private`: nghĩa là "riêng tư", các thành phần không thể truy cập được từ bên ngoài.
- `public`: nghĩa là "công khai", các thành phần có thể được tùy ý truy cập từ bên ngoài.

Nếu một lớp được định nghĩa với từ khóa `class`, mức truy cập của các thành phần được mặc định là `private`, còn nếu
được định nghĩa với từ khóa `struct`, mức truy cập mặc định là `public`. Điều này được thực hiện là để giữ được tính
tương thích với ngôn ngữ C: các `struct` chỉ đơn giản là các bọc chứa dữ liệu và các thành phần có thể được tùy ý truy
cập.

Để xác định một mức truy cập khác với mặc định, ta thực hiện viết từ khóa thể hiện mức truy cập đó theo sau là dấu hai
chấm `:`. Các thành phần phía sau chỉ định đó sẽ được áp dụng mức truy cập được chỉ định, cho đến khi gặp một chỉ định
mức truy cập khác hoặc định nghĩa lớp kết thúc.

Như vậy, các biến thành viên trong ví dụ lớp `DaGiac` ở trên không thể truy cập được từ bên ngoài. Để cho phép truy cập,
ta có thể thay từ khóa `class` bằng `struct` hoặc xác định mức truy cập `public` một cách tường minh như sau:

```cpp
class DaGiac {
	public:
		int soCanh;
		double doDaiCanh;
};
```

## d) Đặt định nghĩa lớp trong tệp phần đầu

Để có thể sử dụng được phần lớn các tính năng của lớp thì một tệp mã nguồn cần phải biết được định nghĩa của lớp đó. Do
đó, định nghĩa lớp thường được đặt trong một tệp phần đầu để dán vào các tệp mã nguồn có nhu cầu sử dụng. Không như đối
với định nghĩa hàm, C++ cho phép một lớp được định nghĩa nhiều lần, miễn sao mỗi lần định nghĩa nằm trong một tệp mã
nguồn khác nhau, và mọi lần định nghĩa là giống hệt nhau.

::: note note Ghi chú
Thực ra, các hàm cũng có cơ chế cho phép định nghĩa nhiều lần, điều này sẽ được trình bày trong các bài sau.
:::

# 3. Sử dụng lớp cơ bản

## a) Tạo biến chứa một thực thể

Mỗi lớp là một kiểu dữ liệu, vì thế ta có thể định nghĩa một biến có kiểu là lớp đó. Ở đây để mở đầu ta tạm thời chỉ
nhắc đến trường hợp định nghĩa một biến với phần khởi tạo rỗng, và lấy ví dụ tạo một biến có kiểu là lớp `DaGiac` đã
định nghĩa ở trên và tên là `dg`.

- Với cú pháp khởi tạo mặc định `DaGiac dg;`, từng biến thành viên của `dg` sẽ được khởi tạo mặc định. Ở đây lớp
  `DaGiac` có hai biến thuộc kiểu cơ bản, và ta nhớ rằng quá trình khởi tạo mặc định của chúng sẽ không cho chúng một
  giá trị ban đầu nào cả.
- Với cú pháp khởi tạo giá trị `DaGiac dg{};`, từng viến thành viên của `dg` sẽ được khởi tạo giá trị. Nhớ rằng hai biến
  thành viên thuộc kiểu cơ bản được cho giá trị ban đầu bằng 0.

## b) Truy cập các biến thành viên

Sau khi tạo ra một thực thể của lớp, ta có thể truy cập một biến thành viên của nó bằng toán tử chấm `.`, với biểu thức
cho ra thực thể ở bên trái và tên biến thành viên ở bên phải. Ví dụ để truy cập biến `doDaiCanh` của `dg` ta viết
`dg.doDaiCanh`.

Nếu biểu thức bên trái cho ra một giá trị trái, chẳng hạn tên một biến như `dg` ở trên, toán tử cho ra một giá trị trái
thể hiện biến thành viên được chỉ định. Như vậy, ta có thể lấy giá trị, gán và thực hiện các thao tác khác với biến
thành viên như đối với một biến bình thường.

## c) Sao chép thực thể

Các thực thể của lớp có thể được sao chép giá trị, chẳng hạn khi thực hiện gán từ một đối tượng này sang một đối tượng
khác. Đối với các lớp dạng cơ bản như ví dụ trên, khi thực thể được sao chép, giá trị của các biến thành viên sẽ lần
lượt được sao chép sang.

## d) Biến thành viên có kiểu lớp

Một lớp có thể chứa biến thành viên có kiểu là một lớp khác. Nếu ta để kiểu của biến thành viên của một lớp là chính lớp
đó thì sẽ gây ra sự đệ quy vô hạn và vì thế điều đó không được cho phép.

::: note warning Lưu ý
Dữ liệu của một đối tượng (C++) được lưu trữ trong chính bản thân đối tượng đó, ngay cả khi kiểu của đối tượng là một
lớp. Điều này khác với các ngôn ngữ như Java, JavaScript, Python, C#,... khi các ngôn ngữ đó thực hiện lưu dữ liệu của
thực thể ở một vị trí khác và chỉ đặt một tham chiếu đến vị trí lưu dữ liệu ở trong biến.
:::