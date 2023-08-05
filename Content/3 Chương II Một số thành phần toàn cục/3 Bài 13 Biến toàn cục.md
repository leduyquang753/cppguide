Bài 13. Biến toàn cục
Ta có thể đặt các câu lệnh khai báo biến trong phạm vi toàn cục, các biến đó được gọi là các biến toàn cục.

Không như biến khai báo trong hàm, nếu câu lệnh khai báo không có phần khởi tạo, biến sẽ được mặc định khởi tạo bằng
`0` đối với kiểu số hoặc `false` đối với kiểu `bool`. Tuy nhiên, ta vẫn nên luôn viết phần khởi tạo để cho rõ ràng.

Biến toàn cục có thể được sử dụng trong các biểu thức, kể cả trong biểu thức khởi tạo giá trị của biến toàn cục khác,
miễn sao biến đã được khai báo trước vị trí sử dụng, ví dụ:

```cpp
#include <iostream>

const int khoiLuongToiDa{10'000};
const int soXeToiDa{5};
const int taiTrongToiDa{khoiLuongToiDa / soXeToiDa};

int main() {
	int taiTrong{};
	std::cout << "Nhap tai trong xe (kg): ";
	std::cin >> taiTrong;
	if (taiTrong > taiTrongToiDa) {
		const int luongCanBo{taiTrong - taiTrongToiDa};
		std::cout << "Qua tai.\nCan bo " << luongCanBo << " kg.\n";
	} else {
		std::cout << "Xe co the qua cau.\n";
	}
}
```

Các biến toàn cục sẽ được khởi tạo giá trị trước khi hàm `main` được thực hiện.

Hiện tại bạn có thể sử dụng các biến toàn cục để thực hiện những tương tác phức tạp hơn giữa các hàm hơn là chỉ thông
qua đối đầu vào và giá trị trả về, tuy nhiên khi có các tính năng ngôn ngữ khác được giới thiệu ở các bài sau, chúng sẽ
cho phép các phương pháp tương tác khác có hiệu quả hơn. Còn nếu biến chỉ được sử dụng bên trong một hàm nào đó, bạn nên
khai báo biến đó ở bên trong hàm.

`std::cout` và `std::cin` mà chúng ta vẫn sử dụng thực ra cũng là hai biến toàn cục, chúng được khai báo trong thành
phần `iostream`. Các thông tin cụ thể về chúng sẽ tiếp tục được hé lộ trong các bài sau.