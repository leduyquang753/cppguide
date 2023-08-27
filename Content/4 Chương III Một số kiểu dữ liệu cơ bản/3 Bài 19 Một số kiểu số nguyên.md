Bài 19. Một số kiểu số nguyên
Chúng ta đã được biết đến kiểu số nguyên `int`. Ngoài `int` ra thì C++ còn có nhiều kiểu số nguyên khác, bài này sẽ tìm
hiểu một vài trong số đó.

# 1. Một số kiểu số nguyên chính

Các kiểu số nguyên trong C++ được chia làm hai loại chính: có dấu (`signed`) và không có dấu (`unsigned`). Ở đây ta kí
hiệu số bit của một kiểu dữ liệu số nguyên là *n*.

Đối với kiểu số nguyên có dấu, dữ liệu được lưu trữ dưới dạng [số bù hai](https://vi.wikipedia.org/wiki/Bù_2)[
(https://vi.wikipedia.org/wiki/Bù_2)]{.printAlt}, phạm vi các số nguyên có thể được lưu trữ là từ -2<sup>*n* – 1</sup>
đến 2<sup>*n* – 1</sup> – 1. Đối với kiểu số nguyên không dấu, phạm vi các số nguyên có thể được lưu trữ là từ 0 đến
2<sup>*n*</sup> – 1. Như vậy, số nguyên không dấu chỉ lưu được các số không âm, còn số nguyên có dấu có thể lưu được cả
số dương, số không và số âm.

Dưới đây là một số mức kích cỡ chính có thể được chỉ định cho kiểu số nguyên:
- `short`: Nghĩa là "ngắn", chứa ít nhất 16 bit.
- `int`: Kiểu mặc định, chứa ít nhất 16 bit.
- `long`: Nghĩa là "dài", chứa ít nhất 32 bit.
- `long long`: Chứa ít nhất 64 bit.

C++ đảm bảo số byte của các mức kích cỡ sẽ tăng dần (không ngặt) theo thứ tự trên. Tức là số byte của `short` sẽ không
lớn hơn số byte của `int`, số byte của `int` sẽ không lớn hơn số byte của `long`, số byte của `long` sẽ không lớn hơn số
byte của `long long`. Số bit và kích cỡ thực tế của các kiểu sẽ do từng môi trường quyết định. Và cũng đừng quên rằng số
bit thực tế được sử dụng có thể ít hơn tổng số bit của kích cỡ của kiểu.

Để xác định một kiểu số nguyên, ta thực hiện nối một từ thể hiện tính có dấu (`signed` hoặc `unsigned`) với một mức kích
cỡ; để cho rõ ràng, đối với các mức kích cỡ không phải `int` ta cũng có thể viết thêm `int`. Thứ tự các từ là không quan
trọng, tuy nhiên thông thường ta viết tính có dấu trước, rồi đến mức kích cỡ, rồi đến `int` nếu có. Ví dụ để xác định
kiểu số nguyên không dấu với kích thước lớn nhất ta viết `unsigned long long int`, hoặc nếu muốn tếu ta cũng có thể viết
`int long unsigned long`.

Ta cũng có thể bỏ qua từ `signed` khi xác định kiểu số nguyên có dấu với các mức kích cỡ trên, hay nói cách khác tính có
dấu mặc định của các mức kiểu số nguyên nói trên là có dấu.

# 2. Giá trị trực tiếp của các số kiểu số nguyên chính

Một giá trị số nguyên có thể được viết bằng nhiều hệ cơ số khác nhau để thuận tiện sử dụng trong những hoàn cảnh khác
nhau. Phần chính của một giá trị số nguyên là một dãy các chữ số trong hệ cơ số được lựa chọn. Phần đầu của giá trị xác
định cơ số đó:

- Nếu kí tự đầu tiên là một chữ số khác `0`, sử dụng hệ thập phân.
- Nếu kí tự đầu tiên là chữ số `0` và kí tự thứ hai là một chữ số, sử dụng hệ bát phân.
- Nếu bắt đầu bằng `0x`, sử dụng hệ thập lục phân.
- Nếu bắt đầu bằng `0b`, sử dụng hệ nhị phân.

Trường hợp đặc biệt là khi giá trị chỉ có một chữ số `0`, khi đó đương nhiên giá trị số nguyên là số 0.

Ta thường viết giá trị trực tiếp của số nguyên bằng hệ thập phân đối với những con số mang ý nghĩa bình thường. Các cơ
số còn lại đều là các lũy thừa của 2, ta sử dụng các cơ số đó khi quan tâm hơn đến các bit của số.

Để cho dễ đọc hơn, một số dấu nháy đơn `'` có thể được đặt vào giữa hai chữ số của giá trị số nguyên, chẳng hạn viết
`5'035'109` sẽ dễ nhìn ra là khoảng hơn năm triệu hơn là viết liên `5035109`.

Mỗi giá trị số nguyên sẽ có kiểu là kiểu đầu tiên có thể chứa được số đó trong một danh sách, danh sách này được lựa
chọn bằng cách viết thêm một số chữ cái vào đằng sau (hậu tố) và cũng phụ thuộc vào hệ cơ số được sử dụng. Bảng sau đây
liệt kê các danh sách tính đến phiên bản C++ 2020:

| Hậu tố | Khi dùng hệ thập phân | Khi dùng hệ khác |
| --- | --- | --- |
| Không có | `int`<br/>`long int`<br/>`long long int` | `int`<br/>`unsigned int`<br/>`long int`<br/>`unsigned long int`<br/>`long long int`<br/>`unsigned long long int` |
| `U` | `unsigned int`<br/>`unsigned long int`<br/>`unsigned long long int` | `unsigned int`<br/>`unsigned long int`<br/>`unsigned long long int` |
| `L` | `long int`<br/>`unsigned long int`<br/>`long long int` | `long int`<br/>`unsigned long int`<br/>`long long int`<br/>`unsigned long long int` |
| `U` và `L` | `unsigned long int`<br/>`unsigned long long int` | `unsigned long int`<br/>`unsigned long long int` |
| `LL` | `long long int` | `long long int`<br/>`unsigned long long int` |
| `U` và `LL` | `unsigned long long int` | `unsigned long long int` |

Các chữ cái được sử dụng trong giá trị số nguyên không phân biệt chữ hoa và chữ thường, tuy nhiên hai chữ cái của hậu tố
`LL` phải cùng viết hoa hoặc cùng viết thường. Thứ tự của các hậu tố không quan trọng, nhưng thường `U` sẽ được viết
trước.

# 3. Chuyển đổi giá trị giữa các kiểu số nguyên chính

Giá trị của một trong những kiểu số nguyên nói trên có thể được ngầm định chuyển đổi thành một kiểu bất kì trong các
kiểu còn lại. Chẳng hạn, bạn có thể gán một giá trị kiểu `unsigned long long` vào một biến kiểu `short`, hoặc bạn có thể
sử dụng `static_cast` để chuyển đổi giá trị một cách tường minh. C++ có các quy luật quyết định giá trị của kiểu số
nguyên đích sau khi chuyển đổi như sau:

- Nếu kiểu đích có thể chứa giá trị ban đầu thì giá trị mới sẽ không thay đổi.
- Nếu không:
  - Nếu kiểu đích không có dấu, giá trị mới là phần dư của giá trị ban đầu khi chia cho 2<sup>*n*</sup>, với *n* là số
  	bit của kiểu đích.
  - Nếu kiểu đích có dấu, giá trị mới là số nguyên có dấu của kiểu đích có dạng biểu diễn nhị phân giống với của giá trị
  	nhận được nếu như chuyển đổi thành kiểu số nguyên không dấu có cùng số bit.

::: note note Ghi chú
Do giá trị của một kiểu số nguyên có thể thay đổi khi chuyển đổi thành một kiểu số nguyên nhỏ hơn, thao tác này là một
thao tác chuyển đổi "thu hẹp" và việc giá trị thay đổi có thể là một điều không mong muốn. Cú pháp khởi tạo danh sách
không cho phép thao tác này, trừ khi giá trị ban đầu là một hằng số nằm trong phạm vi của kiểu của biến, và trong các
trường hợp khác các bộ dịch cũng có thể đưa ra cảnh báo. Vì vậy, nếu có mong muốn thực hiện chuyển đổi thu hẹp giá trị
số nguyên, bạn nên thực hiện chuyển đổi tường minh sử dụng `static_cast`.
:::