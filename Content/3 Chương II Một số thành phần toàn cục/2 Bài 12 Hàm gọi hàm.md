Bài 12. Hàm gọi hàm
Trong hàm `main` (phần chương trình chính) ta có thể gọi các hàm, và các hàm cũng có thể gọi các hàm khác. Có một số
yếu tố cần lưu ý về quá trình các hàm thực hiện gọi nhau này mà ta sẽ tìm hiểu sau đây.

# 1. Định nghĩa hàm và khai báo hàm

Mã nguồn C++ được xử lí theo thứ tự đọc (từ trái qua phải, từ trên xuống dưới). Khi thực hiện gọi một hàm, ngôn ngữ yêu
cầu hàm đó phải được biết trước, tức là khai báo của hàm đó cần được đặt trước vị trí gọi. Đó là lí do trong bài trước
bạn được tạm thời khuyên rằng hãy đặt khai báo của các hàm trước hàm `main`, để hàm `main` có thể gọi được. Tuy nhiên,
có một trường hợp đặc biệt là hai hàm thực hiện gọi nhau như sau:

```cpp
void hamA(const bool canGoiTiep) {
	if (canGoiTiep) {
		hamB(false);
	}
}

void hamB(const bool canGoiTiep) {
	hamA(canGoiTiep);
}
```

Nếu ta đặt khai báo `hamA` trước khai báo `hamB` thì `hamA` sẽ thực hiện gọi `hamB` trước khi `hamB` được khai báo, còn
nếu đặt khai báo `hamB` trước thì nó sẽ gọi khai báo `hamA` trước khi `hamA` được khai báo. Để giải quyết vấn đề này,
C++ có cú pháp khai báo rằng một hàm tồn tại bằng cách viết khai báo hàm đó, nhưng thay vì viết khối lệnh của hàm (gọi
là thân hàm), ta chỉ đặt một dấu chấm phẩy `;`. Như vậy với đoạn mã trên ta có thể đặt khai báo `void hamB(const bool
canGoiTiep);` lên phía trên, và lời gọi của `hamA` sẽ được thỏa mãn. Ta cũng có thể bỏ `const` của các đối đầu vào trong
khai báo hàm thành `void hamB(bool canGoiTiep);` (nhưng vẫn giữ trong khai báo còn lại với khối lệnh của hàm).

Những khai báo hàm với khối lệnh thân hàm được gọi là định nghĩa hàm. Nếu bạn thực hiện khai báo một hàm và sử dụng hàm
đó, thì một lẽ đương nhiên là bạn sẽ phải viết định nghĩa hàm, tức viết thân hàm. Nếu đã viết rồi mà bộ dịch vẫn báo lỗi
không tìm thấy định nghĩa hàm, bạn hãy kiểm tra thật kĩ lại xem tên và các kiểu đối đầu vào của định nghĩa hàm đã được
viết chính xác chưa.

# 2. Chồng lời gọi và hàm đệ quy

Khi một hàm thực hiện gọi hàm khác, quá trình thực hiện của hàm hiện tại được tạm dừng, hàm kia được thực hiện và đến
khi xong thì quá trình thực hiện quay về vị trí cũ của hàm ban đầu. Nhưng làm sao máy tính biết được vị trí cũ của hàm
ban đầu để quay về?

Khi thực hiện lời gọi hàm, máy tính sẽ lưu lại trạng thái thực hiện của hàm hiện tại, bao gồm giá trị của tất cả các
biến được tạo ra bên trong hàm và thông tin vị trí thực hiện hiện tại, sau đó mới chuyển sang thực hiện hàm được gọi.
Nếu hàm thứ hai này thực hiện gọi tiếp một hàm thứ ba khác, thông tin thực hiện của hàm thứ hai cũng sẽ được lưu lại.
Khi hàm thứ ba được thực hiện xong, thông tin thực hiện của hàm thứ hai được khôi phục và khi đến lượt nó thực hiện
xong, thông tin thực hiện của hàm ban đầu được khôi phục để tiếp tục thực hiện. Ta có thể tưởng tượng các thông tin được
lưu lại và khôi phục giống như một chồng giấy được đặt thêm và lấy đi từng tờ giấy ở vị trí trên cùng, do đó các thông
tin này được gọi là chồng lời gọi.

Một hàm có thể có lời gọi chính nó, thao tác này được gọi là đệ quy. Ứng dụng thường thấy nhất của đệ quy là một hàm
giải bài toán nào đó tính ra kết quả dựa trên kết quả của bài toán tương tự, nhưng nhỏ hơn. Khi đó hàm thực hiện gọi
chính nó để giải bài toán nhỏ hơn đó, và trạng thái thực hiện của lần gọi hàm hiện tại sẽ được lưu lại. Khi lần gọi hàm
giải bài toán nhỏ hơn được thực hiện xong, trạng thái lần gọi hàm ban đầu sẽ được khôi phục và hoàn thành công việc tính
toán ra kết quả.

::: note warning Lưu ý
Lệnh `return` sẽ chỉ ngừng quá trình thực hiện lần gọi hàm hiện tại, kể cả khi một hàm đang gọi chính nó. Nhiều người
học sẽ nghĩ sai rằng khi có nhiều lời gọi hàm giống nhau đang được thực hiện đệ quy thì `return` sẽ ngừng quá trình thực
hiện của tất cả các lời gọi của hàm, điều này là không đúng. Điều sẽ xảy ra là lời gọi hiện tại sẽ được hoàn thành, lời
gọi trước đó sẽ được khôi phục và tiếp tục thực hiện.
:::

Khi hàm gọi đệ quy, một điều dễ hiểu là sự đệ quy cần kết thúc ở một điểm nào đó. Các hàm giải bài toán đệ quy sẽ có các
trường hợp cơ bản mà có thể biết được ngay kết quả, khi đó hàm sẽ không gọi chính nó nữa.

Việc có nhiều lời gọi hàm lồng nhau, nhất là lời gọi hàm đệ quy thường sẽ gặp phải một hạn chế là để đảm bảo sử dụng tài
nguyên bộ nhớ hiệu quả, lượng bộ nhớ dành cho việc lưu trạng thái các lần gọi hàm thường không phải là lớn. Nếu bộ nhớ
lưu chồng lời gọi trở nên đầy, chương trình sẽ gặp lỗi. Vì thế, đối với các bài toán kích cỡ lớn, cần phải sử dụng những
phương pháp khác để giải quyết thay cho đệ quy. Một ví dụ đơn giản như sau.

Để tính tổng các số tự nhiên từ 1 đến *n*, ta có thể lấy tổng các số tự nhiên từ 1 đến *n* – 1 rồi cộng với *n*. Trường
hợp cơ bản là tổng các số tự nhiên từ 1 đến 1 là 1. Vậy ta có thể viết hàm đệ quy sau:

```cpp
int tongCacSoTuNhienDauTien(const int n) {
	if (n == 1) {
		return 1;
	} else {
		return tongCacSoTuNhienDauTien(n - 1) + n;
	}
}
```

Số lời gọi đệ quy bằng với số nguyên đầu vào `n`. Nếu giá trị `n` đủ lớn thì sẽ có nhiều lời gọi đệ quy đến nỗi bộ nhớ
lưu chồng lời gọi sẽ đầy. Thay vào đó ta có thể viết hàm tích lũy lần lượt từng số:

```cpp
int tongCacSoTuNhienDauTien(const int n) {
	int tong{0};
	for (int i{1}; i <= n; i = i + 1) {
		tong = tong + i;
	}
	return tong;
}
```

Hoặc sử dụng công thức:

```cpp
int tongCacSoTuNhienDauTien(const int n) {
	return (n + 1) * n / 2;
}
```