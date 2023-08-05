Bài 15. Phân chia tệp mã nguồn
Mã nguồn của một chương trình lớn không được để trong một tệp mã nguồn duy nhất, mà sẽ được phân chia thành nhiều tệp
nhỏ hơn để có thể dễ làm việc. Trong bài này ta sẽ tìm hiểu một số cơ chế và tính năng ngôn ngữ phục vụ cho việc phân
chia mã nguồn thành nhiều tệp.

# 1. Cơ chế dịch

Khi thực hiện dịch một dự án C++ với một số tệp mã nguồn, bộ dịch sẽ thực hiện dịch lần lượt từng tệp mã nguồn mà không
quan tâm đến sự tồn tại cũng như nội dung bên trong của các tệp mã nguồn khác. Nếu một tệp sử dụng các thành phần có mặt
trong một tệp khác, bộ dịch sẽ ghi chú lại sự sử dụng đó. Mỗi tệp mã nguồn sau khi dịch thành mã máy xong sẽ được lưu
vào một tệp chứa kết quả dịch. Sau khi tất cả các tệp mã nguồn được dịch, bộ dịch thực hiện thao tác liên kết, phối hợp
các tệp kết quả dịch cũng như các thư viện bên ngoài được sử dụng để cho ra tệp đóng gói hoàn chỉnh. Những vị trí mà một
tệp mã nguồn sử dụng các thành phần từ tệp khác được giải quyết trong giai đoạn này, bộ dịch sẽ tìm thành phần đó trong
các tệp kết quả dịch hoặc tệp thư viện, nếu không tìm thấy, bộ dịch sẽ báo lỗi.

# 2. Khai báo trước các hàm được định nghĩa trong các tệp mã nguồn khác

Như vậy, một hàm có thể được định nghĩa ở trong một tệp mã nguồn khác mà tệp mã nguồn hiện tại không cần phải biết đến
định nghĩa đó. Tuy nhiên, bộ dịch vẫn cần phải được biết rằng hàm đó tồn tại khi ta thực hiện sử dụng. Do đó trong tệp
mã nguồn ta đặt một khai báo trước của hàm trước vị trí sử dụng, ví dụ trong một tệp mã nguồn có định nghĩa hàm:

```cpp
int phiGiaoHang(const int ngay, const int thang, const int thanhTien) {
	if (ngay == thang) {
		if (thanhTien >= 200'000) {
			return 0;
		} else {
			return 10'000;
		}
	} else {
		if (thanhTien >= 500'000) {
			return 10'000;
		} else {
			return 30'000;
		}
	}
}
```

thì một tệp mã nguồn khác có thể sử dụng hàm như sau:

```cpp
int phiGiaoHang(int ngay, int thang, int thanhTien);

int soTienCanTra(const int ngay, const int thang, const int thanhTien) {
	return thanhTien + phiGiaoHang(ngay, thang, thanhTien);
}
```

# 3. Khai báo trước các biến toàn cục được định nghĩa trong tệp mã nguồn khác

Cú pháp khai báo biến toàn cục trong [bài 13](!3.3) thực hiện định nghĩa biến đó. Các biến toàn cục cũng có thể được
khai báo trước mà không định nghĩa bằng cách thêm `extern` vào đầu khai báo đó và không viết phần khởi tạo, từ khóa là
viết tắt của "external" nghĩa là "nằm bên ngoài".

Một điều cần chú ý là khi viết biểu thức khởi tạo của một biến toàn cục ta không sử dụng giá trị của các biến toàn cục
được định nghĩa trong các tệp mã nguồn khác, do thứ tự khởi tạo của các biến giữa các tệp mã nguồn khác nhau là không
xác định. Nói cách khác ta chỉ sử dụng các biến được định nghĩa phía trước khai báo biến toàn cục hiện tại trong cùng
tệp mã nguồn.

# 4. Khai báo trước các thành phần trong không gian tên

Nếu một thành phần nằm trong một không gian tên, để khai báo trước ta thực hiện đật các khai báo trước vào không gian
tên tương ứng, ví dụ trong một tệp mã nguồn có:

```cpp
namespace NangLuong {
	const int congSuat{3000};

	int nangLuongTieuThu(const int soGioHoatDong) {
		return congSuat * soGioHoatDong;
	}
}
```

thì trong các tệp mã nguồn khác ta khai báo trước như sau:

```cpp
namespace NangLuong {
	extern const int congSuat;

	int nangLuongTieuThu(int soGioHoatDong);
}
```

# 5. Thiếu hoặc thừa định nghĩa

Nếu các tệp mã nguồn sử dụng một thành phần mà thành phần đó không được định nghĩa trong một tệp mã nguồn nào, thì như
đã mô tả trong phần đầu, bộ dịch sẽ không tìm thấy thành phần trong quá trình liên kết và sẽ báo lỗi.

Nếu có nhiều hơn một định nghĩa của cùng một thành phần, bộ dịch cũng sẽ báo lỗi, lỗi thường được thông báo khi dịch nếu
các định nghĩa nằm trong cùng một tệp mã nguồn và khi liên kết nếu chúng nằm trong các tệp mã nguồn khác nhau.