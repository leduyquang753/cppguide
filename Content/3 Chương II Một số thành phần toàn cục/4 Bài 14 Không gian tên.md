Bài 14. Không gian tên
# 1. Khái niệm và khai báo

Một chương trình phức tạp có thể có nhiều bộ phận khác nhau, và sử dụng các thư viện từ bên ngoài. Khi đó sẽ có rất
nhiều thành phần trong phạm vi toàn cục, làm cho khả năng vô tình có hai thành phần có tên giống nhau xuất hiện và gây
ra vấn đề.

Trong C, để tránh vấn đề này, người ta thường đặt một tiền tố cho tất cả các thành phần tương ứng với tên của bộ phận
hoặc thư viện đó, chẳng hạn thư viện đồ họa OpenGL sử dụng tiền tố `gl`, thư viện truyền tệp `curl` sử dụng tiền tố
`curl_`. C++ cung cấp một tính năng để thực hiện cô lập tên các thành phần trong một bộ phận khỏi các bộ phận khác, đó
là không gian tên.

Một không gian tên được khai báo trong phạm vi toàn cục với cú pháp như sau:

```cpp
namespace <định danh> {
	<các khai báo toàn cục>
}
```

Định danh của một không gian tên thường là tên của bộ phận chương trình hoặc thư viện đang được viết. Ta đã học các
thành phần toàn cục là hàm và biến toàn cục, các khai báo của chúng được đặt trong cặp ngoặc móc `{}` của không gian tên
để thực hiện cô lập trong không gian tên đó.

Thực ra, khi đặt một thành phần vào trong một không gian tên thì định danh của không gian tên sẽ trở thành một phần của
định danh thành phần đó. Định danh đầy đủ của thành phần gồm định danh của không gian tên chứa nó, hai dấu hai chấm `::`
rồi đến định danh riêng của thành phần. Do đó, nếu hai thành phần có định danh giống nhau nhưng nằm trong hai không gian
tên khác nhau, chúng sẽ có hai định danh đầy đủ khác nhau và do đó không bị trùng tên. Nếu tất cả các bộ phận đều sử
dụng không gian tên để chứa các thành phần của nó, trong không gian tên toàn cục sẽ chỉ còn lại tên của các bộ phận, đó
là một số lượng tên ít hơn hẳn và do đó sẽ hầu như không có nguy cơ bị trùng tên.

Ta có thể viết nhiều khai báo không gian tên với cùng một định danh, khi đó chúng sẽ vẫn được coi là cùng một không gian
tên. Không gian tên là một thành phần toàn cục, nên ta cũng có thể khai báo một không gian tên lồng bên trong một không
gian tên khác.

Các thành phần không nằm trong không gian tên nào được nói là nằm trong không gian tên toàn cục (global namespace).
Khoảng bên trong không gian tên là một phạm vi gọi là phạm vi không gian tên (namespace scope).

Đến đây thì ta có thể giải thích ý nghĩa của hai định danh `std::cout` và `std::cin`: `cout` và `cin` là định danh riêng
của các biến, và `std` là không gian tên mà chúng nằm bên trong. `std` là viết tắt của từ "standard" nghĩa là "chuẩn",
nó chỉ thư viện chuẩn mà C++ cung cấp sẵn. Phần lớn các thành phần của thư viện chuẩn nằm trong không gian tên `std`.

# 2. Sử dụng các thành phần trong không gian tên

Trong phạm vi của một không gian tên, ta có thể sử dụng một thành phần bằng cách viết định danh riêng của thành phần đó,
ví dụ:

```cpp
namespace ThongSo {
	const int congSuat{3000};
	const int soGioHoatDong{8};
	const int nangLuongTieuThu{congSuat * soGioHoatDong};
}
```

Nếu một thành phần nằm trong một không gian tên mà vị trí hiện tại nằm ngoài không gian tên đó, ta có thể sử dụng thành
phần bằng cách viết định danh của không gian tên, sau đó viết hai dấu hai chấm `::` để thực hiện "truy cập" không gian
tên, rồi viết định danh riêng của thành phần, ví dụ:

```cpp
namespace ThongSo {
	const int congSuat{3000};
}

int nangLuongTieuThu(const int soGioHoatDong) {
	return ThongSo::congSuat * soGioHoatDong;
}
```

Ta có thể viết hai dấu hai chấm `::` ở đầu để thực hiện truy cập không gian tên toàn cục, tính năng này hữu ích khi
trong phạm vi không gian tên có thành phần trùng tên với một thành phần bên ngoài, ví dụ:

```cpp
const int so{2};

namespace Ngoai {
	const int so{3};
	
	namespace Trong {
		const int so{1};
		
		void vietCacSo() {
			std::cout << so << "\n"; // Cho ra 1.
			std::cout << ::so << "\n"; // Cho ra 2.
			std::cout << ::Ngoai::so << "\n"; // Cho ra 3.
		}
	}
}
```

Ta có thể khai báo trước một hàm bên trong một không gian tên rồi định nghĩa hàm bên ngoài không gian tên đó, khi đó ta
cần phải viết tên các không gian tên chứa hàm đó vào định danh của hàm trong định nghĩa, ví dụ:

```cpp
namespace Ngoai {
	namespace Trong {
		void hamA();
		void hamB();
	}

	void Trong::hamA() {}
}

void Ngoai::Trong::hamB() {}
```

Ta cũng có thể khai báo không gian tên với định danh nằm trong một định danh không gian tên khác để lồng không gian tên
này vào không gian tên kia, ví dụ:

```cpp
namespace A::B {}
```

sẽ tương đương với:

```cpp
namespace A {
	namespace B {}
}
```

# 3. Một số khai báo liên quan đến không gian tên

## a) Khai báo tên khác cho không gian tên

Ta có thể đặt một tên khác cho không gian tên sử dụng cú pháp sau:

```cpp
namespace <định danh mới> = <định danh của không gian tên>;
```

Sau khai báo này, định danh mới sẽ tham chiếu đến cùng không gian tên được chỉ định. Thông thường khai báo này được sử
dụng để đặt một tên ngắn gọn hơn cho không gian tên khi sử dụng.

## b) Khai báo nhập một tên từ không gian tên

Khai báo có dạng:

```cpp
using <định danh trong không gian tên>;
```

Khai báo này sẽ đưa định danh riêng của thành phần được xác định vào trong phạm vi hiện tại. Nhờ đó để sử dụng ta chỉ
cần viết định danh riêng thay vì phải viết thêm định danh của các không gian tên dẫn đến nó.

## c) Khai báo nhập tất cả tên từ không gian tên

Khai báo có dạng:

```cpp
using namespace <định danh của không gian tên>;
```

Khai báo này sẽ đưa tất cả các định danh của các thành phần đã được khai báo trước đó trong không gian tên vào trong
phạm vi hiện tại.

Đến đây thì ta có thể hiểu tại sao việc viết `using namespace std;` là một hành động nguy hiểm. Thư viện chuẩn của `std`
rất lớn, chứa hàng trăm tên và nó vẫn đang tiếp tục được mở rộng với những thành phần mới. Câu khai báo trên sẽ đổ tất
cả các tên này vào phạm vi hiện tại, gây ra nguy cơ các thành phần trong mã nguồn của bạn vô tình có tên trùng với các
thành phần trong thư viện chuẩn và gây ra vấn đề.

Trong nhiều trường hợp khác, khai báo `using namespace` thường chỉ nên được sử dụng khi mã nguồn sử dụng nhiều thành
phần trong không gian tên, và khi đó khai báo nên được đặt trong phạm vi nhỏ nhất cần sử dụng đến chúng.