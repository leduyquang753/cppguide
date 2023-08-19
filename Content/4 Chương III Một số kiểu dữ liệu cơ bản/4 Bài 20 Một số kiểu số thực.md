Bài 20. Một số kiểu số thực
# 1. Một số kiểu số thực chính

Các kiểu số thực trong C++ có thể lưu các số với phần thập phân dưới dạng [dấu phẩy
động](https://vi.wikipedia.org/wiki/Số_thực_dấu_phẩy_động)[
(https://vi.wikipedia.org/wiki/Số_thực_dấu_phẩy_động)]{.printAlt}. Một số kiểu số thực chính là:

- `float`: Kiểu số thực 32 bit tuân theo chuẩn [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)[
  (https://en.wikipedia.org/wiki/IEEE_754)]{.printAlt}. Giá trị tuyệt đối lớn nhất có thể được biểu diễn là khoảng
  340.10<sup>36</sup>.
- `double`: Kiểu số thực 64 bit tuân theo chuẩn IEEE 754. Giá trị tuyệt đối lớn nhất có thể được biểu diễn là khoảng
  180.10<sup>306</sup>.
- `long double`: Một kiểu số thực với phạm vi và độ chính xác bằng hoặc cao hơn `double`.

Các kiểu số thực có một số đặc điểm đáng lưu tâm sau đây:
- Do số được lưu dưới hệ nhị phân, nó không thể lưu chính xác hầu hết các giá trị trong hệ thập phân mà chúng ta hay
  dùng. Nếu thử chuyển đổi một số như vậy từ hệ thập phân sang nhị phân, ta sẽ thấy dạng biểu diễn nhị phân kéo dài vô
  hạn, như vậy kiểu số thực với một số lượng hữu hạn bit sẽ chỉ có thể lưu giá trị xấp xỉ của số đó.
- Giá trị tuyệt đối của số càng lớn, độ chính xác của giá trị càng giảm. Điều này xảy ra do hình thức lưu giá trị của số
  thực là một số chữ số nhị phân có nghĩa nhất định, khi giá trị tuyệt đối tăng thì giá trị của chữ số có nghĩa cuối
  cùng được lưu cũng tăng dần.
- Có hai giá trị biểu diễn số không với hai dấu dương và âm (+0 và -0). Điều này cho phép giữ lại dấu của kết quả tính
  toán khi giá trị tuyệt đối của nó quá nhỏ. Hai giá trị so sánh bằng nhau.
- Có hai loại giá trị đặc biệt là vô cùng và "không phải số" (not a number – NaN). Giá trị vô cùng sẽ được sinh ra khi
  kết quả của một phép tính vượt quá phạm vi của kiểu, hoặc khi chia một số khác không cho 0, và "không phải số" được
  sinh ra khi thực hiện các phép tính không hợp lệ, chẳng hạn như chia 0 cho 0.

# 2. Giá trị trực tiếp của các kiểu số thực chính

Một giá trị số thực có thể được viết bằng hệ thập phân hoặc hệ thập lục phân.

Cấu trúc của giá trị số thực hệ thập phân gồm:
- Phần định trị:
  - Một số chữ số của phần nguyên.
  - Dấu chấm `.` thập phân.
  - Một số chữ số của phần thập phân.
- Chữ `e` phân cách phần định trị và phần mũ.
- Một số chữ số của phần mũ.

Giá trị sẽ được tính bằng phần định trị nhân với lũy thừa cơ số 10 của phần mũ.

Ví dụ, `508.36e6` có phần định trị là 508,36, phần mũ là 6, giá trị là 508,36.10<sup>6</sup> = 508 360 000.

Bạn có thể thực hiện lược bỏ một số phần trong cấu trúc trên bằng một trong các cách dưới đây để dễ viết và đọc hơn:

- Bỏ chữ `e` và phần mũ.
- Để trống phần nguyên hoặc để trống phần thập phân, khi đó bạn cũng có thể bỏ chữ `e` và phần mũ.
- Bỏ dấu chấm thập phân và phần thập phân.

Phần nào được lược bỏ, phần đó sẽ được mặc định giá trị là 0.

Bạn cũng có thể chèn các dấu nháy đơn `'` vào giữa các chữ số để dễ đọc hơn.

Như vậy ta cũng có thể viết giá trị số thực 508 360 000 theo các cách sau:

```cpp
508'360'000.0
508'360'000.
.508'36e9
508'360e3
```

::: note warning Lưu ý
Như đã đề cập ở bài trước, nhiều giá trị viết trong hệ thập phân sẽ không thể biểu diễn chính xác trong hệ nhị phân. Tuy
nhiên trong nhiều hoàn cảnh sử dụng sự không chính xác này là chấp nhận được.
:::

Cấu trúc của giá trị số thực hệ thập lục phân gồm:
- Hai kí tự `0x`.
- Phần định trị:
  - Một số chữ số của phần nguyên viết trong hệ thập lục phân.
  - Dấu chấm `.` thập phân.
  - Một số chữ số của phần thập phân viết trong hệ thập lục phân.
- Chữ `p` phân cách phần định trị và phần mũ.
- Một số chữ số của phần mũ viết trong hệ thập phân.

Giá trị sẽ được tính bằng phần định trị nhân với lũy thừa cơ số 2 của phần mũ.

Bạn cũng có thể thực hiện lược bỏ một phần của giá trị trực tiếp tương tự như giá trị hệ thập phân, tuy nhiên bạn không
thể loại bỏ phần mũ, và bạn cũng có thể chèn các dấu nháy đơn `'` giữa các chữ số.

Như vậy giá trị 508 360 000<sub>10</sub> = 1E4C F540<sub>16</sub> có thể được viết bằng hệ thập lục phân theo các cách
sau:

```cpp
0x1E4C.F54p16
0x.1E4C'F54p32
0x1E4C'F54p4
0x1E4C'F540.p0
```

Kiểu mặc định của giá trị số thực là `double`. Bạn có thể viết hậu tố `F` để xác định kiểu `float`, hoặc `L` để xác định
kiểu `long double`.

Và tương tự như các giá trị số nguyên, các chữ cái được sử dụng trong giá trị số thực không phân biệt chữ hoa và chữ
thường.

# 3. Chuyển đổi giá trị giữa các kiểu số thực chính

Giá trị của một trong những kiểu số thực nói trên có thể được ngầm định chuyển đổi thành một kiểu bất kì trong các kiểu
còn lại. Nếu giá trị ban đầu có thể được biểu diễn chính xác trong kiểu đích, giá trị mới sẽ không thay đổi, nếu không,
giá trị mới sẽ là giá trị của kiểu đích gần nhất so với giá trị ban đầu.

::: note note Ghi chú
Cũng như khi chuyển đổi thu hẹp kiểu số nguyên, thao tác chuyển đổi giá trị từ một kiểu số thực lớn hơn sang một kiểu số
thực nhỏ hơn là một thao tác chuyển đổi thu hẹp, và bạn nên thực hiện tường minh sử dụng `static_cast`.
:::

# 4. Chuyển đổi giá trị giữa kiểu số nguyên và kiểu số thực

Một giá trị của kiểu số nguyên có thể được chuyển đổi thành kiểu số thực. Nếu giá trị không thể được biểu diễn chính xác
trong kiểu số thực đích (do quá lớn) thì nó sẽ được xấp xỉ bằng cách chọn giá trị gần nhất của kiểu đích.

Một giá trị của kiểu số thực có thể được chuyển đối thành kiểu số nguyên. Giá trị mới là phần nguyên của số thực và phải
nằm trong phạm vi của kiểu số nguyên đích, nếu không sẽ là không hợp lệ và chương trình sẽ có hành vi không xác định.
Đây là một thao tác chuyển đổi thu hẹp.