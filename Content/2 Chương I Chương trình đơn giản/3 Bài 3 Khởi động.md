Bài 3. Khởi động
Ta sẽ bắt đầu hành trình với việc xem xét một chương trình đơn giản dưới đây. Chương trình thực hiện hỏi hai số nguyên
và đưa ra tổng của hai số nguyên đó:

```cpp
#include <iostream>

/*
	Hướng dẫn nhập:
	Gõ các chữ số bằng bàn phím, sau khi gõ mỗi số nhấn phím Enter.
*/
int main() {
	int a;
	std::cout << "Nhap so thu nhat: ";
	std::cin >> a;
	int b;
	std::cout << "Nhap so thu hai: ";
	std::cin >> b;
	int tong = a + b;
	std::cout << "Tong hai so: ";
	std::cout << tong;
	std::cout << "\n"; // Xuống dòng mới.
}
```

# 1. Các thành phần cơ bản

## a) Phần đầu

Phần đầu chương trình là nơi ta nhập các thành phần cần thiết cho chương trình từ bên ngoài vào. Một kiểu lệnh nhập bắt
đầu bằng `#include`, theo sau là chỉ định tên thành phần cần nhập. Ở đây thành phần được chỉ định là `iostream`, được
ngôn ngữ C++ cung cấp, chứa các yếu tố cần thiết để có thể thực hiện đọc dữ liệu và viết nội dung ra màn hình. Tên các
thành phần do C++ cung cấp được bao quanh bởi cặp ngoặc nhọn `<>`. Thông tin cụ thể về cách hoạt động của lệnh nhập sẽ
được trình bày trong các bài sau.

::: note danger Nguy hiểm
Một số nguồn, nhất là các nguồn định hướng lập trình thi đấu, sẽ sử dụng một thành phần mang tên `bits/stdc++.h`. Đây là
một thành phần nội bộ của bộ dịch GCC, nó không được thiết kế dành cho người sử dụng và không tồn tại trong các bộ dịch
khác. Lí do nó được sử dụng trong lập trình thi đấu là vì hầu như tất cả các cuộc thi đều dùng GCC và nó làm cho lượng
mã phải viết ít đi để có thể viết lời giải nhanh hơn. Trong những hoàn cảnh sử dụng thực tế, nó làm tăng đáng kể thời
gian dịch nếu dùng GCC hoặc sẽ gây ra lỗi khi dịch trên các bộ dịch khác. Vì vậy, tránh dùng `bits/stdc++.h`.
:::

::: note danger Nguy hiểm
Nhiều nguồn khác sẽ đưa thêm một dòng `using namespace std;` vào phần này và nói rằng nó là cần thiết. Điều này là không
đúng. Việc sử dụng dòng mã trên ngược lại sẽ gây ra những vấn đề không mong muốn, những vấn đề này sẽ được đề cập khi
đến với các tính năng liên quan ở các bài tiếp theo.
:::

## b) Phần chương trình chính

`int main()` là khai báo phần chính của chương trình, chứa đoạn mã nguồn sẽ được thực hiện khi chạy chương trình. Một
đoạn mã nguồn được bao bằng một cặp ngoặc móc `{}`. Theo mặc định, các câu lệnh trong mã nguồn sẽ được chạy theo thứ tự
đọc, tức là từ trái qua phải trong một dòng và từ trên xuống dưới qua các dòng.

`int a;` là một câu lệnh khai báo một vị trí để lưu một giá trị có tên là `a`, `int` là viết tắt của "integer" cho biết
kiểu của giá trị là một số nguyên. Câu lệnh này được kết thúc bằng một dấu chấm phẩy `;`. Tương tự, `int b;` khai báo vị
trí mang tên `b` để lưu một số nguyên.

`std::cout << "Nhap so thu nhat: ";` là câu lệnh thực hiện viết nội dung ra màn hình. `std` là viết tắt của "standard",
thể hiện thư viện chuẩn do C++ cung cấp sẵn, hai dấu hai chấm `::` sau đó thể hiện ta muốn truy cập gì đó từ thư viện
này, và tên của thứ đó là `cout`. `cout` là viết tắt của "character output", thành phần thực hiện đưa các kí tự ra bên
ngoài. Hai dấu bé hơn `<<` thể hiện hành động viết, và nội dung cần viết được bao trong cặp nháy kép `""`. Nhìn vào
hướng của `<<`, ta có thể hình dung chiều truyền dữ liệu. Câu lệnh cũng được kết thúc bằng một dấu chấm phẩy `;`.

`std::cin >> a;` thực hiện đọc dữ liệu vào vị trí lưu trữ. Ta sử dụng `cin` từ `std`, `cin` là viết tắt của "character
input", thực hiện đọc các kí tự từ bên ngoài vào. Hai dấu lớn hơn `>>` tương tự thể hiện hành động nhập, vị trí lưu trữ
được chỉ định là `a`. Do `a` được chỉ định là chứa một giá trị số nguyên, nên `std::cin` sẽ xử lí các kí tự được nhập
thành số nguyên tương ứng rồi mới đưa vào vị trí `a`.

`int tong = a + b;` khai báo một vị trí lưu giá trị số nguyên tên là `tong`, nhưng ngoài ra còn chỉ định giá trị ban đầu
bằng cách sử dụng dấu bằng `=` theo sau là biểu thức để tính ra giá trị đó. Ở đây ta chỉ định biểu thức là `a + b`, tức
là tổng của hai giá trị số nguyên chứa trong hai vị trí `a` và `b`.

`std::cout << tong;` thay vì thực hiện viết một nội dung cho trước ra màn hình thì sẽ thực hiện viết nội dung tương ứng
với giá trị chứa trong vị trí `tong`. Giá trị số nguyên của `tong` sẽ được `std::cout` xử lí thành dạng các kí tự biểu
diễn nó và sau đó các kí tự được viết ra màn hình.

`\n` là biểu diễn trong mã nguồn của kí tự xuống dòng, nó thực hiện hành động tương tự như khi bạn nhấn phím Enter trong
phần mềm soạn thảo văn bản.

Nếu hiểu được những nội dung trên, bạn có thể thử đọc nội dung mã nguồn để biết cách chương trình thực hiện nhiệm vụ
được mô tả ở đầu bài. Nếu không thì cũng không sao, những bài tiếp theo sẽ trình bày chi tiết hơn về ý nghĩa của những
dòng mã trên, cũng như cách bạn có thể viết những dòng mã của riêng mình.

## c) Ghi chú

Nhiều khi bản thân mã nguồn không truyền đạt hết những ý đồ của người lập trình. Khi đó ta có thể viết những thông điệp
ghi chú (comment) vào tệp mã nguồn bằng một trong hai cú pháp:

- Đặt hai dấu gạch chéo `//` vào sau một dòng mã nguồn. Ghi chú bắt đầu từ sau hai dấu gạch chéo đến hết dòng.
- Đặt `/*` vào trước ghi chú và `*/` vào sau ghi chú.

Nội dung các ghi chú được bỏ qua khi dịch. Nhiều khi lập trình viên tạm thời bỏ một số dòng mã nguồn khỏi chương trình
bằng cách đưa chúng vào các ghi chú, và khi cần lại thì đưa ra khỏi ghi chú.

# 2. Giao diện chương trình

Chương trình được phân tích ở trên là một chương trình với giao diện văn bản. Người sử dụng và máy tính trao đổi thông
tin với nhau thông qua các kí tự văn bản: người dùng nhập các kí tự bằng bàn phím để truyền vào máy tính và máy tính
hiển thị các kí tự lên màn hình cho người dùng. Trong thực tế ngày nay, các chương trình chúng ta thường sử dụng có giao
diện không chỉ gồm các kí tự mà còn có các hình ảnh, đó được gọi là giao diện đồ họa. Quy trình tạo ra một giao diện đồ
họa trong C++ rất phức tạp, cho nên trang hướng dẫn này sẽ chủ yếu làm việc với các chương trình sử dụng giao diện văn
bản.

# 3. Hành vi của chương trình và lỗi

Ngôn ngữ C++ đưa ra các quy định về cú pháp và ngữ nghĩa mà mã nguồn chương trình cần tuân theo, và xác định các quy
luật về hành vi của chương trình. Trong quá trình viết, nhiều khi lập trình viên vô ý vi phạm những quy định của ngôn
ngữ, đó là lỗi, và từ quá trình dịch đến quá trình chạy chương trình, những lỗi này sẽ hiện hình với hai loại chính:

- Lỗi khi dịch: Đây là những lỗi được bộ dịch phát hiện, trong trường hợp đó thông thường quá trình dịch chương trình sẽ
  được dừng lại.
  - Lỗi cú pháp: C++ có quy định về cú pháp chặt chẽ. Khi chương trình của bạn không tuân thủ một trong số những quy
  	định đó, thì đó là một lỗi về cú pháp. Chẳng hạn bạn có thể thử bỏ một dấu chấm phẩy trong chương trình ở trên và
  	đặt lệnh chạy, bộ dịch sẽ báo lỗi về việc thiếu dấu chấm phẩy đó.
  - Lỗi ngữ nghĩa: Mã nguồn sử dụng một số tính năng ngôn ngữ không đúng quy định. Bạn có thể thử đổi `std::cin >> b;`
  	trong chương trình trên thành `std::cin >> b2;`, bộ dịch sẽ báo lỗi về việc sử dụng một thứ chưa được định nghĩa.
  - Lỗi liên kết: Xảy ra trong quá trình liên kết do các nguyên nhân khác nhau như thiếu thành phần chương trình, không
  	thể truy cập tệp,...
- Lỗi khi chạy: Những lỗi không được bộ dịch ngăn chặn và chỉ hiện hình khi chương trình đã dịch được thực hiện.
  - Lỗi logic: Chương trình không thực hiện đúng tính năng mong muốn, nguyên nhân chủ yếu do logic xử lí chưa chính xác.
  - Sập chương trình: Chương trình kết thúc đột ngột. Nguyên nhân có thể do lỗi logic bên trong chương trình hoặc do các
  	tác nhân bên ngoài.

Các quy luật về hành vi của chương trình rơi vào bốn loại chính sau đây:
- Các hành vi được định nghĩa tường minh bởi tiêu chuẩn ngôn ngữ C++. Chương trình nếu tuân thủ các quy định chắc chắn
  sẽ có hành vi được mô tả.
- Các hành vi được định nghĩa bởi môi trường. C++ không quy định cụ thể về hành vi của chương trình mà nó sẽ phụ thuộc
  vào từng môi trường. Hành vi cụ thể của một môi trường được yêu cầu mô tả rõ trong tài liệu của môi trường đó. Thuật
  ngữ tiếng Anh là "implementation-defined behavior", viết tắt là IB.
- Các hành vi không được chỉ rõ. Tương tự như hành vi được định nghĩa bởi môi trường nhưng bản thân môi trường không
  nhất thiết phải mô tả về nó trong tài liệu. Thuật ngữ tiếng Anh là "unspecified behavior".
- Các hành vi không xác định. Chương trình đã vi phạm một số quy định của ngôn ngữ, tức không còn hợp lệ, và bộ dịch
  không có trách nhiệm phải dịch ra chương trình với hành vi đúng như được viết trong mã nguồn. Những quy định kiểu này
  thường không dễ, hoặc thậm chí không thể kiểm tra được bởi bộ dịch, trách nhiệm tuân thủ vì thế nằm hoàn toàn ở lập
  trình viên. Thuật ngữ tiếng Anh là "undefined behavior", viết tắt là UB.

Các bộ dịch thường đưa thêm một số yếu tố mới vào ngôn ngữ nằm ngoài quy chuẩn C++, được gọi là các phần mở rộng ngôn
ngữ, để phục vụ một số nhu cầu riêng. Một chương trình sử dụng các phần mở rộng này sẽ không còn được đảm bảo sẽ có thể
dịch hay chạy được với các bộ dịch khác nhau. Một số phần mở rộng mà nhiều nguồn đưa vào một cách sai sót sẽ được đề cập
trong trang hướng dẫn để bạn có thể chú ý.

Vì những lí do trên, việc một chương trình C++ được dịch thành công và chạy được trong một môi trường nào đó hoàn toàn
không có nghĩa là chương trình đó tuân thủ mọi quy định của ngôn ngữ C++ chuẩn.

Khi xảy ra lỗi, một điều quan trọng là bạn cần đọc các thông tin về lỗi để biết điều gì đã xảy ra và có thể là cả nguyên
nhân đến từ đâu. Đối với lỗi logic, một công cụ cần thiết là debugger, giúp bạn đi sâu vào quá trình chạy của chương
trình để dò ra nguồn gốc của lỗi; bạn nên học cách sử dụng công cụ này càng sớm càng tốt. Một số kiến thức cơ bản về
việc sử dụng debugger sẽ được trình bày trong các bài tiếp theo.