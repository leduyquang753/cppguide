Bài 23. Các toán tử số học
Các toán tử được trình bày trong bài này thực hiện các phép toán số học đối với các kiểu số. `a` và `b` được sử dụng
trong bài này để đại diện cho các toán hạng được đưa vào toán tử.

# 1. Chuyển đổi kiểu của các toán hạng

C++ có các quy luật thực hiện chuyển đổi các kiểu của từng toán hạng một cách độc lập và của các toán hạng liên hệ với
nhau khi đưa vào toán tử. Dưới đây trình bày các quy luật đối với các toán tử số học và các kiểu số.

## a) Thăng cấp kiểu số nguyên (integral promotion)

Các toán tử số học trong C++ chỉ thực hiện trên các giá trị số nguyên có kiểu nhỏ nhất là `int`. C++ thực hiện ngầm định
chuyển đổi giá trị khi đưa vào toán tử của một số kiểu số nguyên thành một kiểu không nhỏ hơn `int`, thao tác này được
gọi là "thăng cấp". Trong số các kiểu đã được giới thiệu ở [chương III](!4.0):

- Các kiểu `short`, `char` và `bool` sẽ được chuyển đổi thành `int` nếu nó có phạm vi đủ lớn, nếu không thì chuyển đổi
  thành `unsigned int`.
- Kiểu `wchar_t` sẽ được chuyển đổi thành kiểu đầu tiên có phạm vi không nhỏ hơn nó trong danh sách: `int`, `unsigned
  int`, `long`, `unsigned long`, `long long`, `unsigned long long`, kiểu gốc của `wchar_t`.
- Kiểu `bool` sẽ được chuyển đổi thành kiểu `int`.

## b) Chuyển đổi số học thông thường (usual arithmetic conversions)

Với các toán tử nhận vào hai toán hạng, nếu kiểu của hai toán hạng sau khi thăng cấp là khác nhau, C++ thực hiện ngầm
định chuyển đổi chúng thành một kiểu chung, thao tác này được gọi là "chuyển đổi số học thông thường". Đối với các kiểu
số đã được trình bày, các quy luật chuyển đổi như sau:

- Nếu hai toán hạng cùng có kiểu số thực, toán hạng có kiểu số thực nhỏ hơn được chuyển đổi thành kiểu số thực lớn hơn.
- Nếu một toán hạng có kiểu số thực và một toán hạng có kiểu số nguyên, toán hạng có kiểu số nguyên được chuyển đổi
  thành kiểu số thực.
- Nếu hai toán hạng cùng có kiểu số nguyên:
  - Nếu hai kiểu số nguyên có cùng tính có dấu, toán hạng có kiểu số nguyên nhỏ hơn được chuyển đổi thành kiểu số nguyên
  	lớn hơn.
  - Nếu một kiểu số nguyên có dấu và một kiểu số nguyên không dấu:
	- Nếu kiểu có dấu không lớn hơn kiểu không dấu, toán hạng có kiểu có dấu được chuyển đổi thành kiểu không dấu.
	- Nếu kiểu có dấu có thể biểu diễn mọi giá trị của kiểu không dấu, toán hạng có kiểu không dấu được chuyển đổi thành
	  kiểu có dấu.
	- Còn lại, chuyển đổi cả hai toán hạng thành kiểu không dấu tương ứng với kiểu có dấu.

Phục vụ cho thao tác này, thứ tự của các kiểu số được sắp xếp theo thứ tự lớn dần như sau, ngay cả khi kích cỡ thực tế
của các kiểu có thể là bằng nhau:

- Các kiểu số nguyên: `int`, `long`, `long long`.
- Các kiểu số thực: `float`, `double`, `long double`.

::: note warning Lưu ý
Một điều cần lưu ý từ các quy luật chuyển đổi trên là khi thực hiện phép toán với hai số nguyên khác tính có dấu, trong
nhiều trường hợp giá trị của kiểu có dấu sẽ được chuyển đổi thành kiểu không dấu và nếu giá trị có dấu là một số âm thì
phép toán có thể cho ra kết quả không mong muốn. Khi đó, bạn cần thực hiện chuyển đổi giá trị không dấu thành có dấu sử
dụng `static_cast` trước khi đưa vào toán tử.
:::

# 2. Các toán tử tính toán cơ bản

## a) Các toán tử âm dương

Toán tử `+a` là toán tử dương, cho giá trị `a`.

Toán tử `-a` là toán tử âm, cho giá trị đối của `a`.

## b) Các toán tử cộng, trừ, nhân, chia

Toán tử `a + b` là toán tử cộng, cho tổng của `a` và `b`.

Toán tử `a - b` là toán tử trừ, cho hiệu của `a` và `b`.

Toán tử `a * b` là toán tử nhân, cho tích của `a` và `b`.

Toán tử `a / b` là toán tử chia, cho thương của `a` và `b`. Có một số quy luật đặc thù cho toán tử này như sau:

- Nếu hai toán hạng có kiểu số nguyên, toán tử sẽ cho ra phần nguyên của thương. Nếu số chia là 0, phép chia là không
  hợp lệ và chương trình có hành vi không xác định.
- Nếu hai toán hạng có kiểu số thực và số chia là 0:
  - Nếu số bị chia khác 0, toán tử sẽ cho ra dương vô cùng nếu hai toán hạng có cùng dấu hoặc âm vô cùng nếu khác dấu
    (nhớ rằng có dương không và âm không).
  - Nếu số bị chia là 0, toán tử sẽ cho ra "không phải số".

Toán tử `a % b` là toán tử dư, chỉ áp dụng cho các toán hạng số nguyên, cho ra phần dư của phép chia `a` cho `b`. Cụ thể
giá trị cho ra được tính bằng biểu thức `a - a / b * b`.

# 3. Các toán tử thao tác trên biểu diễn bit của số nguyên

Trong một số trường hợp ta có nhu cầu thao tác trực tiếp trên các bit nhị phân của số nguyên. Các toán tử sau cho phép
thực hiện các thao tác đó.

Toán tử `~a` là toán tử bù (not), mỗi bit của giá trị kết quả là nghịch đảo của bit tương ứng của `a`. Giá trị kết quả
được gọi là số [bù một](https://vi.wikipedia.org/wiki/Bù_1) của `a`[ (https://vi.wikipedia.org/wiki/Bù_1)]{.printAlt}.

Toán tử `a & b` là toán tử giao (and), mỗi bit của giá trị kết quả là 1 khi cả hai bit tương ứng của `a` và `b` là 1,
hoặc 0 trong các trường hợp còn lại. Nói cách khác tập hợp các bit 1 của giá trị kết quả là giao của tập hợp các bit 1
của `a` và của `b`.

Toán tử `a | b` là toán tử hợp (or), mỗi bit của giá trị kết quả là 0 khi cả hai bit tương ứng của `a` và `b` là 0, hoặc
1 trong các trường hợp còn lại. Nói cách khác tập hợp các bit 1 của giá trị kết quả là hợp của tập hợp các bit 1 của `a`
và của `b`.

Toán tử `a ^ b` là toán tử xor, mỗi bit của giá trị kết quả là 1 khi hai bit tương ứng của `a` và `b` khác nhau, hoặc 0
nếu giống nhau.

Toán tử `a << b` là toán tử dịch trái, dãy bit của giá trị kết quả là dãy bit của `a` sau khi bỏ `b` bit đầu và thêm `b`
bit 0 vào phía sau. Thao tác toán tương ứng là nhân `a` với 2<sup>`b`</sup> rồi lấy phần dư khi chia cho 2<sup>*n*</sup>
với *n* là số bit của `a`.

Toán tử `a >> b` là toán tử dịch phải, dãy bit của giá trị kết quả là dãy bit của `a` sau khi bỏ `b` bit cuối và thêm
`b` bit giống với bit đầu tiên của `a` vào phía trước. Thao tác toán tương ứng là lấy phần nguyên của thương khi chia
`a` cho 2<sup>`b`</sup>.

Hai toán tử `a << b` và `a >> b` có một số quy luật đặc thù sau:

- Chuyển đổi số học thông thường không được thực hiện, kiểu của kết quả là kiểu của `a` sau khi thăng cấp.
- Nếu `b` âm hoặc không nhỏ hơn số bit của `a`, thao tác là không hợp lệ và chương trình có hành vi không xác định.

# 4. Hành vi khi kết quả phép toán số nguyên vượt quá phạm vi của kiểu

Nếu kết quả của phép toán số nguyên nằm ngoại phạm vi biểu diễn của kiểu kết quả, hành vi có quy luật như sau:

- Nếu kiểu kết quả không có dấu, kết quả cuối cùng là phần dư khi chia kết quả ban đầu cho 2<sup>*n*</sup> với *n* là số
  bit của kiểu kết quả.
- Nếu kiểu kết quả có dấu, thao tác là không hợp lệ và chương trình có hành vi không xác định.

Nếu kết quả của phép toán `a / b` nằm ngoài phạm vi của kiểu thì cả hai phép toán `a / b` và `a % b` là không hợp lệ và
chương trình sẽ có hành vi không xác định. Điều này không mâu thuẫn với quy luật của kiểu số nguyên không dấu trên do
kết quả của phép toán `a / b` với các giá trị số nguyên không dấu sẽ không bao giờ vượt ra ngoài phạm vi của kiểu.