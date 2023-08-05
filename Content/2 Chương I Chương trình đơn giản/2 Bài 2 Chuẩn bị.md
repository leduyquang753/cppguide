Bài 2. Chuẩn bị
Trước khi chúng ta bước vào những kiến thức của ngôn ngữ C++, bài này sẽ cung cấp một số điều cần biết và một số bước
chuẩn bị để ngay sau khi học từng bài, bạn có thể viết và chạy được các chương trình viết bằng C++.

# 1. Các phiên bản C++

Như đã nói trong [lịch sử của ngôn ngữ](!2.1#2)[ (bài 1, phần 2)]{.printAlt}, nhiều phiên bản quy chuẩn C++ đã được công
bố. Ngôn ngữ C++ được quy định trong từng phiên bản của quy chuẩn được gọi là một phiên bản của C++. Tên của phiên bản
được cấu thành bằng tên "C++" đi theo sau là hai chữ số cuối của năm mà phiên bản đó được công bố. Tính đến thời điểm
viết, các phiên bản C++ là:

- C++98 công bố năm 1998.
- C++03 công bố năm 2003.
- C++11 công bố năm 2011.
- C++14 công bố năm 2014.
- C++17 công bố năm 2017.
- C++20 công bố năm 2020.
- C++23 công bố năm 2023.

Để cho rõ ràng, khi đề cập đến các phiên bản C++, trang hướng dẫn này sẽ viết đầy đủ năm công bố của phiên bản đó.

Cho đến thời điểm viết, phiên bản C++ mới nhất được hỗ trợ rộng rãi là 2017. Các dự án C++ được khuyến nghị dùng phiên
bản càng mới càng tốt và bét nhất nên là phiên bản 2011. Một số nguồn kiến thức C++ chỉ nói về phiên bản năm 1998, phiên
bản này đã quá lỗi thời, và các nguồn kiến thức đó cũng vậy. Trang hướng dẫn này sẽ sử dụng phiên bản C++ 2020, tuy
nhiên do nó chưa được chính thức hỗ trợ rộng rãi, những tính năng mới của phiên bản đó sẽ được chỉ rõ để phòng khi bộ
dịch bạn sử dụng chưa hỗ trợ.

# 2. Chuẩn bị môi trường

Bước chân đầu tiên của bạn sẽ là chuẩn bị các phần mềm cần thiết để có thể chạy các chương trình C++ mà bạn hoặc những
người khác viết ra. Có rất nhiều phần mềm phục vụ cho lập trình C++ và bạn có thể thoải mái lựa chọn, tuy nhiên để có
được trải nghiệm tốt nhất bạn nên sử dụng các phần mềm có đầy đủ tính năng tích hợp mà không phải bỏ nhiều công sức
thiết lập.

- Nếu bạn sử dụng Windows, [Visual studio](https://visualstudio.microsoft.com)[
  (https://visualstudio.microsoft.com)]{.printAlt} là phần mềm chính thức của Microsoft, cung cấp bộ dịch mang tên
  Microsoft Visual C++ (MSVC).
- Nếu bạn sử dụng macOS, [Xcode](https://developer.apple.com/xcode) [ (https://developer.apple.com/xcode)]{.printAlt} là
  phần mềm chính thức của Apple cung cấp bộ dịch mang tên Apple Clang.
- Nếu bạn sử dụng Linux, [GCC](https://gcc.gnu.org)[ (https://gcc.gnu.org)]{.printAlt} là bộ dịch chính thức đến từ Tổ
  chức Phần mềm GNU. GCC không cung cấp phần mềm viết chương trình, một phần mềm miễn phí phổ biến cho việc này là
  [Visual studio code](https://code.visualstudio.com)[ (https://code.visualstudio.com)]{.printAlt}.

Một phần mềm khác cũng rất nổi tiếng là [Clion](https://www.jetbrains.com/clion)[
(https://www.jetbrains.com/clion)]{.printAlt}, tuy nhiên nó lại không miễn phí. Nếu bạn có một email sinh viên, bạn có
thể thử đăng kí và nếu được bạn sẽ được cung cấp một suất sử dụng miễn phí.

Nếu bạn có ý định tìm những lựa chọn khác, bạn cần phải để ý đến phiên bản của bộ dịch và phiên bản ngôn ngữ C++ mà nó
hỗ trợ. Cụ thể phiên bản bộ dịch cần phải hỗ trợ phiên bản C++ năm 2017, do trang hướng dẫn này sử dụng các tính năng
tính đến phiên bản đó.

Bạn hãy tham khảo các nguồn trên mạng để biết cách thực hiện cài đặt phần mềm mà bạn đã lựa chọn. Trong quá trình thiết
lập, hãy xác nhận bộ dịch được thiết lập để sử dụng phiên bản C++ năm 2017, hoặc nếu được đến 2020 thì càng tốt. Một khi
đã hoàn tất, bạn có thể chạy thử chương trình dưới đây bằng cách đưa vào một tệp có đuôi `.cpp` và đặt lệnh chạy:

```cpp
#include <iostream>

int main() {
	std::cout << "Xin chuc mung, ban da cai dat moi truong C++ thanh cong.\n";
}
```

::: note note Ghi chú
Nhiều phần mềm sẽ yêu cầu bạn tạo một dự án chương trình C++, sau đó bạn tạo một tệp mã nguồn `.cpp` trong dự án đó và
đưa mã nguồn vào thì mới có thể thực hiện chạy.
:::

# 3. Tài liệu tham khảo

C++ là một ngôn ngữ rất phức tạp, trang hướng dẫn này sẽ không thể nào trình bày được toàn bộ các tính năng của nó. Thậm
chí, những người có kinh nghiệm nhiều năm làm việc với C++, và ngay cả bản thân những người trong hội đồng chuẩn hóa C++
cũng không biết hết được mọi ngóc ngách của nó. Nếu bạn muốn biết thông tin cụ thể về một chi tiết nào đó của C++, một
nguồn tham khảo chất lượng là [CPPReference](https://en.cppreference.com)[ (https://en.cppreference.com)]{.printAlt}.
Nếu muốn một sự chính xác tuyệt đối, bạn có thể đọc bản thân quy chuẩn của ngôn ngữ C++, một trang cập nhật các bản thảo
mới nhất của quy chuẩn là https://eel.is/c++draft.