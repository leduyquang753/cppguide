Bài 9. Câu lệnh lặp
Nhiều khi ta có nhu cầu thực hiện lặp đi lặp lại một hành động nào đó. Nếu số lần lặp lại là xác định, ta có thể viết
lặp đi lặp lại mã nguồn thực hiện hành động, tuy nhiên điều này rõ ràng là không hiệu quả và khi số lần lặp là không xác
định thì ta không thể làm như vậy được. C++ cung cấp một cơ chế để thực hiện lặp lại các câu lệnh được gọi là câu lệnh
lặp.

# 1. Câu lệnh lặp `while`

Cú pháp của câu lệnh lặp `while` có dạng:

```cpp
while (<điều kiện>) <câu lệnh>
```

`while` có nghĩa là "trong khi", tức là trong khi điều kiện được thỏa mãn, câu lệnh được xác định sẽ được thực thi. Điều
kiện là một biểu thức điều kiện cho ra giá trị kiểu `bool` giống với câu lệnh rẽ nhánh.

Khi thực hiện câu lệnh `while`, điều kiện sẽ được kiểm tra, nếu là `false` (sai) thì cả câu lệnh sẽ được bỏ qua, còn nếu
là `true` (đúng) thì câu lệnh phía sau sẽ được thực hiện, sau đó việc thực hiện lặp lại với việc kiểm tra điều kiện, đến
khi nào điều kiện là `false` thì thôi. Mỗi lần câu lệnh được thực hiện được gọi là một lần lặp.

Câu lệnh có thể là một câu lệnh đơn hoặc khối lệnh giống như đối với câu lệnh rẽ nhánh. Và cũng để cho dễ đọc, thông
thường ta luôn sử dụng một khối lệnh.

Ví dụ dưới đây cho người dùng nhập vào một số nguyên, nhưng kiểm tra điều kiện số nguyên nhập vào phải không âm (không
nhỏ hơn `0`), nếu vi phạm thì cho người dùng nhập lại:

```cpp
int so{-1};
while (so < 0) {
	std::cout << "Nhap mot so nguyen khong am: ";
	std::cin >> so;
}
```

# 2. Câu lệnh lặp `for`

Cú pháp của câu lệnh lặp `for` có dạng:

```cpp
for (<câu lệnh khởi tạo>; <điều kiện lặp>; <hành động sau lần lặp>) <câu lệnh>
```

Câu lệnh `for` là mở rộng của câu lệnh lặp `while` với những yếu tố mới sau:

- Có thể xác định một câu lệnh để thực hiện khi bắt đầu thực hiện câu lệnh `for`, gọi là câu lệnh khởi tạo. Đây có thể
  là một câu lệnh khai báo biến hoặc một câu lệnh gán biến, vì vậy nó thường được dùng để đặt giá trị ban đầu cho các
  biến được sử dụng trong câu lệnh lặp.
- Có thể xác định hành động được thực hiện sau mỗi lần lặp. Thường hành động này sẽ thực hiện thay đổi các biến.

Bạn có thể loại bỏ bất kì yếu tố nào trong số ba yếu tố câu lệnh khởi tạo, điều kiện lặp và hành động sau lần lặp, tuy
nhiên bạn vẫn cần phải giữ lại các dấu chấm phẩy `;`. Nếu bỏ trống, câu lệnh khởi tạo và hành động sau lần lặp sẽ mặc
định không thực hiện gì, còn điều kiện lặp sẽ mặc định là `true`.

Nghĩa của từ `for` là "cho", do ứng dụng phổ biến nhất của câu lệnh lặp `for` là cho một biến nhận lần lượt các giá trị
trong một khoảng nào đó. Chẳng hạn muốn viết ra màn hình bảng nhân của 7 với các số từ 0 đến 10, ta cho một biến số
nguyên nhận lần lượt giá trị từ `0` đến `10`:

```cpp
for (int i{0}; i <= 10; i = i + 1) {
	std::cout << "7 . " << i << " = " << 7 * i << "\n";
}
```

# 3. Câu lệnh lặp `do`–`while`

Cú pháp của câu lệnh lặp `do`–`while` có dạng:

```cpp
do <câu lệnh>
while (<điều kiện>);
```

Câu lệnh này có thứ tự thực hiện ngược lại so với câu lệnh `while`. Thay vì kiểm tra điều kiện trước thì câu lệnh
`do`–`while` sẽ thực hiện câu lệnh trước, sau đó mới thực hiện kiểm tra điều kiện, và nếu điều kiện đúng thì lặp lại quá
trình bằng cách thực hiện câu lệnh. Như vậy, câu lệnh được xác định sẽ được thực hiện ít nhất một lần.

Đoạn mã nhập số viết bằng câu lệnh `while` ở trên có thể được viết lại bằng câu lệnh `do`–`while` như sau:

```cpp
int so{};
do {
	std::cout << "Nhap mot so nguyen khong am: ";
	std::cin >> so;
} while (so < 0);
```

Trong thực tế thì có khá ít trường hợp ta sử dụng câu lệnh này, và trong một số ngôn ngữ khác thì câu lệnh này bị loại
bỏ, lập trình viên có thể viết hành vi tương tự sử dụng câu lệnh lặp `while` thay thế.

# 4. Các câu lệnh can thiệp quá trình lặp

Trong một số trường hợp, mã nguồn câu lệnh lặp cần phải được viết tương đối phức tạp để có thể thực hiện đúng các hành
động như mong muốn. C++ cung cấp một số câu lệnh để đơn giản hóa các trường hợp liên quan tới quá trình lặp. Các câu
lệnh này được đặt trong nội dung câu lệnh của các câu lệnh lặp.

Câu lệnh `continue;` thực hiện bỏ qua phần còn lại của câu lệnh trong lần lặp, hay nói cách khác làm cho câu lệnh lặp
coi như đã thực hiện xong câu lệnh. Đối với câu lệnh lặp `while` và `do`–`while`, quá trình sẽ chuyển sang kiểm tra điều
kiện, còn đối với câu lệnh lặp `for` thì sẽ thực hiện hành động sau lần lặp rồi mới kiểm tra điều kiện.

Trường hợp phổ biến nhất sử dụng câu lệnh `continue;` là với đoạn mã kiểu như sau:

```cpp
while (dieuKien1) {
	if (dieuKien2) {
		// Hành động.
	}
}
```

Thì có thể được đơn giản hóa thành:

```cpp
while (dieuKien1) {
	if (!dieuKien2) {
		continue;
	}
	// Hành động.
}
```

Câu lệnh `break;` thực hiện kết thúc quá trình thực hiện của toàn bộ câu lệnh lặp. Trường hợp phổ biến nhất sử dụng câu
lệnh `break;` là khi điều kiện dừng câu lệnh lặp phụ thuộc vào các yếu tố bên trong lần lặp:

```cpp
bool laHopSo{false};
for (int i{2}; i < n; i = i + 1) {
	if (n % i == 0) {
		laHopSo = true;
		break;
	}
}
```

Tuy nhiên nếu không sử dụng `break;` ta vẫn có thể viết lại đoạn mã trên như sau:

```cpp
bool laHopSo{false};
for (int i{2}; i < n && !laHopSo; i = i + 1) {
	if (n % i == 0) {
		laHopSo = true;
	}
}
```

Nhưng ta có thể thấy điều kiện thêm làm cho các yếu tố lặp khó đọc hơn một chút.

::: note warning Lưu ý
Nếu câu lệnh lặp không có yếu tố nào có thể dừng vòng lặp, nó sẽ lặp lại vô hạn lần cho đến khi chương trình bị buộc
dừng, và trong một số trường hợp thì C++ có thể coi như chương trình không hợp lệ và có hành vi không xác định. Trong
phần lớn các trường hợp thì hành vi này là không mong muốn do lỗi trong quá trình xác định điều kiện lặp.
:::

Nếu có nhiều câu lệnh lặp được sử dụng lồng nhau, các câu lệnh can thiệp sẽ được thực hiện đối với câu lệnh lặp ở bên
trong nhất. Nếu muốn can thiệp các câu lệnh lặp bên ngoài, bạn có thể sử dụng các điều kiện, ví dụ:

```cpp
while (dieuKien1) {
	// Một số hành động.
	bool canDung{false};
	while (dieuKien2) {
		// Một số hành động.
		if (dieuKien3) {
			canDung = true;
			break; // Ngừng vòng lặp bên trong. 
		}
	}
	if (canDung) {
		break; // Ngừng vòng lặp bên ngoài.
	}
}
```

Việc sử dụng hay không sử dụng các câu lệnh can thiệp quá trình lặp nên được cân bằng sao cho mã nguồn dễ đọc và dễ làm
việc nhất.