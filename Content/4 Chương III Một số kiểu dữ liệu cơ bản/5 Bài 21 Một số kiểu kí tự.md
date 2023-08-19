Bài 21. Một số kiểu kí tự
# 1. Kí tự trong máy tính

Thông tin dạng văn bản được cấu thành từ một dãy các kí tự, vì thế, để biểu diễn văn bản trong máy tính, người ta đề ra
một quy cách để thể hiện các kí tự đó. Những dòng chữ mà bạn đang đọc ngay lúc này thực ra là các dãy những số nguyên,
mỗi số nguyên được gán tương ứng với một kí tự. Máy tính có các tệp dữ liệu phông chữ chứa hình ảnh của các kí tự đó, và
khi xử lí từng số trong dãy, nó lấy hình ảnh kí tự từ tệp phông chữ để vẽ lên màn hình. Khi bạn nhấn một phím kí tự trên
bàn phím, thực chất số nguyên ứng với kí tự đó là cái được máy tính tiếp nhận và xử lí.

Một bộ quy định gán mỗi giá trị số nguyên với một kí tự được gọi là một bảng mã. Phần lớn các bảng mã đều lấy cơ sở từ
bảng mã [ASCII](https://vi.wikipedia.org/wiki/ASCII)[ (https://vi.wikipedia.org/wiki/ASCII)]{.printAlt} của Mĩ với 128
kí tự phục vụ cho văn bản tiếng Anh. Bảng mã chuẩn để biểu diễn kí tự của các ngôn ngữ khác nhau trên thế giới là
[Unicode](https://vi.wikipedia.org/wiki/Unicode)[ (https://vi.wikipedia.org/wiki/Unicode)]{.printAlt} với hàng trăm
nghìn kí tự.

Ví dụ, dãy kí tự `Một số kiểu kí tự` theo bảng mã Unicode được biểu diễn bằng các số nguyên sau:

```
  77 M
7897 ộ
 116 t
  32 <dấu cách>
 115 s
7889 ố
  32 <dấu cách>
 107 k
 105 i
7875 ể
 117 u
  32 <dấu cách>
 107 k
 237 í
  32 <dấu cách>
 116 t
7921 ự
```

# 2. Một số kiểu kí tự chính

Vì lí do đã trình bày ở trên, các "kiểu kí tự" trong C++ thực chất cũng là các kiểu số nguyên.

## a) Các kiểu `char`

`char` là viết tắt của "character" nghĩa là "kí tự". Kiểu `char` có kích cỡ luôn là 1 byte, và như ta đã biết 1 byte có
ít nhất 8 bit, thông thường là 8 bit.

`char` cũng có thể được xác định có dấu hoặc không có dấu bằng cách viết thêm `signed` hay `unsigned` tương ứng, tương
tự như với các kiểu số nguyên cơ bản. Tuy nhiên, mặc định `char` có dấu hay không có dấu là do từng môi trường quyết
định, và kiểu `char` được xem như một kiểu riêng biệt so với `signed char` và `unsigned char`.

Các kiểu `char` cũng được sử dụng để lưu các byte thông tin bất kì mà không nhất thiết phải là các kí tự văn bản.

## b) Kiểu `wchar_t`

`wchar_t` là viết tắt của "wide character type" nghĩa là "kiểu kí tự rộng". Nó được định nghĩa tương ứng với một trong
số các kiểu số nguyên cơ bản, cụ thể là kiểu nào do từng môi trường quy định, và cũng như `char` nó được coi là một kiểu
riêng biệt so với kiểu số nguyên đó. Thông thường theo cái tên thì `wchar_t` sẽ có kích cỡ lớn hơn `char` và vì thế có
thể biểu diễn được nhiều kí tự hơn so với `char`. Cụ thể, trên Windows thì `wchar_t` là số nguyên không dấu 16 bit còn
trên Linux và macOS thì nó là số nguyên không dấu 32 bit.

# 3. Giá trị trực tiếp của các kiểu kí tự chính

Để viết một giá trị trực tiếp của kiểu `char`, ta thực hiện viết kí tự mong muốn trong một cặp nháy đơn `''`. Giá trị sẽ
là số nguyên tương ứng với kí tự đó trong bảng mã được quy định bởi môi trường. Do phạm vi của kiểu `char` là nhỏ nên
thường ta chỉ xác định được các kí tự trong bảng mã ASCII (tức các chữ cái tiếng Anh và một số kí tự đặc biệt). Chẳng
hạn `'A'` trong bảng mã ASCII cho ra giá trị 65.

::: note danger Nguy hiểm
Nếu bạn vô tình viết nhiều hơn một kí tự hoặc viết một kí tự nằm ngoài phạm vi của kiểu `char` vào trong cặp nháy đơn,
nó sẽ trở thành một giá trị nhiều kí tự có kiểu `int` do môi trường quyết định. Trong hầu hết các trường hợp điều này là
không mong muốn.
:::

Để viết một giá trị trực tiếp của kiểu `wchar_t` ta thực hiện tương tự như khi viết giá trị trực tiếp kiểu `char`, nhưng
viết thêm một chữ `L` (viết hoa) vào phía trước.

# 4. Chuyển đổi giá trị giữa các kiểu kí tự chính và các kiểu số chính khác

Do các kiểu kí tự cũng là các kiểu số nguyên nên chúng có thể được ngầm định chuyển đổi qua lại với các kiểu số nguyên
và số thực chính khác. Việc chuyển đổi giá trị từ các kiểu số nguyên lớn hơn hay từ các kiểu số thực sang các kiểu kí tự
là một thao tác chuyển đổi thu hẹp.

Nếu muốn xác định một giá trị kí tự dưới dạng con số, ta viết con số đó thành một giá trị trực tiếp số nguyên rồi thực
hiện chuyển đổi bằng `static_cast`, ví dụ `static_cast<char>(65)` sẽ tương đương với `'A'` trong bảng mã ASCII.

::: note note Ghi chú
Việc xử lí các kí tự rộng của bảng mã Unicode là tương đối phức tạp, nên trong trang hướng dẫn này chủ yếu ta sẽ làm
việc với các kiểu kí tự `char`.
:::