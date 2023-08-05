Bài 16. Tệp phần đầu
# 1. Khái niệm và cách sử dụng

Như ta đã biết ở [bài 15](!3.5), một tệp mã nguồn muốn sử dụng các thành phần trong các tệp khác thì cần phải khai báo
trước chúng. Khi các thành phần được sử dụng trong nhiều tệp, các khai báo trước này sẽ phải được lặp lại trong tất cả
các tệp đó. Điều này khá là bất tiện và có rủi ro sai sót.

C++ cung cấp một giải pháp cho phép sử dụng nội dung một tệp mã nguồn để chèn vào nhiều tệp mã nguồn khác nhau bằng cách
viết một dòng có dạng như sau:

```cpp
#include <đường dẫn đến tệp được bao>
```

Trước khi được dịch, bộ dịch sẽ thực hiện thay thế dòng mã này bằng nội dung của tệp được chỉ định, như vậy nội dung đó
sẽ trở thành một phần của tệp mã nguồn.

Đường dẫn đến tệp thường là các đường dẫn tương đối sử dụng dấu gạch chéo xuôi `/` để phân cách các mức thư mục (ngay cả
trên Windows vốn dùng dấu gạch chéo ngược `\`), và cần được bao trong một trong hai cặp kí tự `<>` hoặc `""`. Cách tệp
được tìm kiếm được định nghĩa bởi môi trường, tức phụ thuộc vào bộ dịch, nhưng thông thường hành vi của chúng sẽ như
sau:

- Nếu tên tệp được bao trong `<>`, bộ dịch sẽ thử từng vị trí trong một danh sách xác định trước và tìm xem có tệp nào
  ứng với đường dẫn được xác định tương đối với vị trí đó hay không.
- Nếu tên tệp được bao trong `""`, bộ dịch sẽ thử tìm tệp tương đối với vị trí của tệp mã nguồn hiện tại, nếu không có,
  tiếp tục thực hiện giống như trường hợp tên tệp được bao trong `<>`.

Như vậy, ta có thể đặt khai báo trước của các thành phần vào trong một tệp và sử dụng tệp trong các tệp mã nguồn cần đến
các thành phần đó. Do các tệp này thường được đặt ở phần đầu tệp mã nguồn, chúng được gọi là các tệp phần đầu, tiếng Anh
là "header". Hai đuôi tên tệp thường được sử dụng cho tệp phần đầu là `.h` và `.hpp`, "h" là chữ cái đầu của từ
"header", còn "pp" là viết tắt của "plus plus" chỉ hai dấu cộng trong tên ngôn ngữ C++. Do `.h` cũng được sử dụng với
các tệp phần đầu từ ngôn ngữ C, `.hpp` có thể được sử dụng để thể hiện tệp phần đầu là chỉ dành cho C++.

Thông thường, một tệp phần đầu sẽ được tạo ra cho mỗi tệp mã nguồn và chứa khai báo trước của các thành phần bên trong
tệp mã nguồn đó.

C++ cung cấp một số tệp phần đầu chứa khai báo của các thành phần trong thư viện chuẩn. Dòng `#include <iostream>` ta đã
sử dụng từ đầu là sử dụng tệp phần đầu `iostream`. Các vị trí chứa các tệp này sẽ nằm trong danh sách vị trí mặc định để
tìm tệp phần đầu, và tên của chúng không có đuôi. Một số phần trong thư viện chuẩn của C++, nằm trong một số tệp phần
đầu này sẽ được giới thiệu trong các bài sau, tuy nhiên nếu bạn hiếu kì thì bạn có thể xem danh sách các tệp phần đầu
chuẩn trên [CPPReference](https://en.cppreference.com/w/cpp/header)[
(https://en.cppreference.com/w/cpp/header)]{.printAlt}.

Khi sử dụng thêm các thư viện từ bên ngoài, ta có thể xác định thêm các thư mục chứa các tệp phần đầu của thư viện đó
vào danh sách vị trí tìm kiếm tệp phần đầu.

# 2. Cảnh giới phần đầu

Một tệp phần đầu có thể viết `#include` để thực hiện nhập nội dung và sử dụng các thành phần trong một tệp phần đầu
khác. Như vậy sẽ phát sinh một trường hợp là nếu hai tệp phần đầu cần nhau, tệp phần đầu này sẽ nhập tệp phần đầu kia và
tạo ra một vòng luẩn quẩn. Để tránh vấn đề này, ta đặt các dòng mã để thực hiện "cảnh giới", không cho một tệp phần đầu
được nhập quá một lần trong một tệp mã nguồn, trong tiếng Anh gọi là "header guard".

Các dòng cảnh giới phần đầu được chia làm hai phần. Phần thứ nhất được đặt ở đầu tệp phần đầu và có dạng như sau:

```cpp
#ifndef <định danh>
#define <cùng định danh>
```

Phần thứ hai được đặt ở cuối tệp phần đầu:

```cpp
#endif
```

Định danh trong phần thứ nhất cần là một định danh riêng biệt, không được sử dụng trong bất cứ vị trí nào khác của mã
nguồn dự án. Thông thường để đảm bảo điều này, định danh sẽ gồm tên dự án và đường dẫn đến tệp phần đầu viết hoa toàn bộ
và phân cách bằng các dấu gạch dưới.

Với các dòng cảnh giới, nếu một tệp phần đầu đã hoặc đang được nhập mà lại có thêm dòng thực hiện nhập đó, thì dòng đó
sẽ không có tác dụng, tránh được việc tệp phần đầu được nhập nhiều hơn một lần.

Về mặt bản chất, các dòng trên là các chỉ dẫn tiền xử lí, ta sẽ tìm hiểu cụ thể về chúng trong các bài sau.

::: note note Ghi chú
Nhiều bộ dịch cung cấp thêm dòng `#pragma once` để thực hiện tính năng tương tự như cảnh giới phần đầu, tuy nhiên đây
không phải là một tính năng trong C++ chuẩn và những lí do ban đầu mà tính năng này được đưa vào đã không còn đúng trong
thời đại ngày nay.
:::

# 3. Ví dụ chia tệp và sử dụng tệp phần đầu

Chẳng hạn ta có một chương trình cho người dùng nhập vào một số nguyên dương và kiểm tra đó có phải số nguyên tố hay
không:

```cpp
#include <iostream>

int laySo() {
	while (true) {
		std::cout << "Nhap mot so nguyen duong: ";
		int so{};
		std::cin >> so;
		if (so > 0) {
			return so;
		}
	}
}

bool laSoNguyenTo(const int so) {
	if (so == 1) {
		return false;
	}
	for (int i{2}; i < so; i = i + 1) {
		if (so % i == 0) {
			return false;
		}
	}
	return true;
}

int main() {
	int so = laySo();
	if (laSoNguyenTo(so)) {
		std::cout << so << " la so nguyen to.\n";
	} else {
		std::cout << so << " khong la so nguyen to.\n";
	}
}
```

Ta có thể chia thành các tệp như sau:

`nhapXuat.h`:

```cpp
#ifndef SONGUYENTO_NHAPXUAT_H
#define SONGUYENTO_NHAPXUAT_H

int laySo();

#endif // SONGUYENTO_NHAPXUAT_H
```

`nhapXuat.cpp`:

```cpp
#include <iostream>

#include "nhapXuat.h"

int laySo() {
	while (true) {
		std::cout << "Nhap mot so nguyen duong: ";
		int so{};
		std::cin >> so;
		if (so > 0) {
			return so;
		}
	}
}
```

`kiemTra.h`:

```cpp
#ifndef SONGUYENTO_KIEMTRA_H
#define SONGUYENTO_KIEMTRA_H

bool laSoNguyenTo(int so);

#endif // SONGUYENTO_KIEMTRA_H
```

`kiemTra.cpp`:

```cpp
#include "kiemTra.h"

bool laSoNguyenTo(const int so) {
	if (so == 1) {
		return false;
	}
	for (int i{2}; i < so; i = i + 1) {
		if (so % i == 0) {
			return false;
		}
	}
	return true;
}
```

`main.cpp`:

```cpp
#include <iostream>

#include "kiemTra.h"
#include "nhapXuat.h"

int main() {
	int so{laySo()};
	if (laSoNguyenTo(so)) {
		std::cout << so << " la so nguyen to.\n";
	} else {
		std::cout << so << " khong la so nguyen to.\n";
	}
}
```