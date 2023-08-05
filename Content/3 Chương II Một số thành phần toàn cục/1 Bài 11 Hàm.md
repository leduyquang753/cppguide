Bài 11. Hàm
# 1. Khái niệm và cú pháp cơ bản

Nhiều lúc khi viết chương trình ta có nhu cầu thực hiện nhiều lần một số câu lệnh nào đó, nhưng không nhất thiết là lặp
lại nhiều lần liên tiếp nhau mà rải rác trong chuỗi hoạt động của chương trình. Các câu lệnh có thể thực hiện một số
thao tác hoặc thực hiện tính toán một giá trị nào đó. Ta có thể đưa một bản sao của các câu lệnh vào mỗi vị trí mong
muốn, nhưng rõ ràng điều đó là không hiệu quả. C++ cung cấp một thành phần cho phép ta phối hợp các câu lệnh đó vào một
nhóm để có thể dễ dàng sử dụng, đó là hàm.

Thuật ngữ hàm, tiếng Anh là "function", được lấy từ khái niệm trong toán học chỉ một cái mà khi đưa một số giá trị đầu
vào, nó sẽ cho ra một giá trị đầu ra tương ứng. Các hàm trong C++ cũng có khả năng làm như vậy thông qua việc thực hiện
các thao tác tính toán được xác định bên trong nó.

Cú pháp để tạo ra một hàm (khai báo hàm) có dạng:

```cpp
<kiểu trả về> <định danh>(<các đối đầu vào>) {
	<các câu lệnh>
}
```

Lúc này vị trí tốt nhất mà bạn nên đặt cú pháp khai báo hàm là trước phần chương trình chính (tức trước dòng `int
main()`). Cách đặt ở những vị trí khác sẽ tiếp tục được giới thiệu sau.

Ta có thể xác định kiểu số nguyên `int` hoặc kiểu Boole `bool` đã học làm kiểu trả về, hoặc nếu ta không muốn trả về một
giá trị nào, ta có thể xác định kiểu `void`. `void`, nghĩa là "rỗng", là một kiểu không có giá trị nào. Khi ta xác định
kiểu `void` để không trả về giá trị, hàm sẽ chỉ thực hiện các hành động mà không thực hiện tính ra một kết quả nào cả,
thuật ngữ thường gọi cho nó là thủ tục (procedure).

::: note warning Lưu ý
Bạn không thể sử dụng kiểu `void` làm kiểu của các biến. Kể cả nếu C++ có cho phép thì điều đó cũng rất vô nghĩa.
:::

Định danh, hay tên, của hàm được đặt tương tự như đối với các biến.

Trong cặp ngoặc tròn `()` là nơi bạn có thể khai báo một số biến, các biến này sẽ được cung cấp các giá trị đầu vào của
hàm, và được gọi là các đối. Cú pháp khai báo một đối đầu vào gồm kiểu của biến và theo sau là tên của biến đó. Nếu có
nhiều đối đầu vào, các khai báo được phân cách bằng dấu phẩy `,`. Còn nếu không có đối đầu vào nào, bạn để cặp ngoặc
trống. Bạn cũng có thể làm cho một biến là biến hằng bằng cách viết thêm `const` trước kiểu của biến.

Sau cặp ngoặc tròn là cặp ngoặc móc `{}` nơi bạn viết các câu lệnh sẽ được thực hiện. Bạn có thể sử dụng tất cả các câu
lệnh mà bạn đưa vào phần chương trình chính. Ngoài ra, còn có một câu lệnh mới để phục vụ cho tính năng cần thiết của
hàm, đó là câu lệnh `return` với cú pháp:

```cpp
return <giá trị>;
```

`return` có nghĩa là "trả về", thực hiện hai thao tác sau:

1. Lấy giá trị được cung cấp làm kết quả tính toán của hàm.
2. Ngừng toàn bộ hoạt động của hàm.

Nếu kiểu trả về là `void`, sẽ không có phần giá trị, như vậy câu lệnh sẽ là `return;`, còn nếu là một kiểu dữ liệu thì
ta cần phải viết một biểu thức cho ra một giá trị với kiểu tương ứng.

Ngoài ra, nếu kiểu trả về không phải `void` thì trong tất cả các trường hợp, câu lệnh `return` phải được thực hiện để
cho một giá trị kết quả của hàm, nếu không chương trình sẽ là không hợp lệ và có hành vi không xác định.

Ví dụ dưới đây khai báo một hàm tìm tổng của các số nguyên từ số nguyên `a` đến số nguyên `b`:

```cpp
int tongKhoangSo(const int a, const int b) {
	int tong{0};
	for (int i{a}; i <= b; i = i + 1) {
		tong = tong + i;
	}
	return tong;
}
```

::: note note Ghi chú
Một hàm không thể trả về nhiều hơn một giá trị được. Một số cách để hàm đưa trở lại nhiều giá trị sẽ được tìm hiểu trong
các bài sau.
:::

# 2. Sử dụng hàm

Thao tác thực hiện một hàm được gọi là gọi hàm. Cú pháp gọi hàm có dạng:

```cpp
<định danh hàm>(<các giá trị đầu vào>)
```

Mỗi giá trị đầu vào là một biểu thức cho ra giá trị có kiểu của đối tương ứng trong khai báo hàm, những giá trị này sẽ
được *sao chép* vào các biến đối đầu vào. Nếu có nhiều giá trị đầu vào, chúng cũng được phân cách bằng dấu phẩy `,`. Và
nếu hàm không nhận giá trị đầu vào nào thì bạn cũng vẫn cần để cặp ngoặc tròn trống `()`.

::: note warning Lưu ý
Do biến đối đầu vào là một biến độc lập, việc thay đổi giá trị biến sẽ không ảnh hưởng đến biến ban đầu được sử dụng để
cung cấp giá trị cho đối. Cơ chế để thực hiện thay đổi biến ở bên ngoài hàm sẽ được trình bày trong các bài sau.
:::

Đối với các hàm trả về giá trị, bản thân cú pháp gọi hàm đại diện cho giá trị trả về của hàm. Có nghĩa là, ta có thể sử
dụng cú pháp gọi hàm làm một phần trong biểu thức để sử dụng giá trị trả về của hàm.

Chẳng hạn, muốn viết ra màn hình tổng hai khoảng số từ 5 đến 8 và từ 10 đến 15, ta có thể sử dụng hàm `tongKhoangSo` ở
trên như sau:

```cpp
std::cout << tongKhoangSo(5, 8) + tongKhoangSo(10, 15);
```

Một điều cần chú ý là nếu có nhiều lời gọi hàm trong cùng một biểu thức, thứ tự chúng được thực hiện là không xác định.
Chẳng hạn nếu có hai hàm, mỗi hàm thực hiện viết ra màn hình một thông báo, thì khi gọi chúng trong cùng một biểu thức,
không thể biết chắc được thông báo nào sẽ được viết ra trước.

::: note danger Nguy hiểm
Như vậy, những nguồn nào nói là "các giá trị được tính toán từ trái sang phải", hay "từ phải sang trái" là hoàn toàn
sai. Bạn có thể sử dụng một bộ dịch và thấy các giá trị được tính toán theo một thứ tự nào đó, nhưng khi sử dụng một bộ
dịch khác, hoặc thậm chí chính sửa thiết lập của chính bộ dịch đó, thì thứ tự đó rất có thể sẽ khác đi.
:::

Đối với các hàm không trả về giá trị (thủ tục) hoặc các hàm có trả về giá trị nhưng ta muốn bỏ qua giá trị đó, ta viết
cú pháp gọi và viết vào đằng sau một dấu chấm phẩy `;`. Đó là câu lệnh gọi hàm.

# 3. Hàm `main`

Sau khi học cú pháp khai báo hàm thì có thể bạn đã nhận ra cú pháp khai báo phần chương trình chính `int main()` trùng
khớp với cú pháp đó. Và thực ra phần chương trình chính đúng là một hàm mang tên `main`, không nhận giá trị đầu vào và
có kiểu trả về `int`. Hàm này được tự động thực hiện khi chương trình được chạy.

Hàm `main` có hai điểm đặc biệt sau đây:

1. Bạn không thể tự gọi nó.
2. Một câu lệnh `return 0;` được ngầm định đặt ở cuối hàm.

Giá trị trả về của `main` thể hiện sự thành công hay thất bại của chương trình. Giá trị `0` thể hiện chương trình đã
hoàn thành suôn sẻ, các giá trị khác thể hiện chương trình đã thất bại và không thể làm tròn nhiệm vụ của mình, những
giá trị cụ thể có thể được gán cho những nguyên nhân thất bại khác nhau.

Như vậy, riêng đối với hàm `main` ta không cần phải viết lệnh `return` trong những trường hợp bình thường. Tuy nhiên có
những lúc ta không muốn trả về giá trị `0` mặc định đó do ta muốn thông báo sự thất bại của chương trình, khi đó ta thực
hiện viết câu lệnh `return` với giá trị trả về mong muốn.

# 4. Nạp chồng hàm

C++ cho phép khai báo nhiều hàm có định danh giống nhau, ngôn ngữ sử dụng thêm một yếu tố nữa ngoài định danh để phân
biệt các hàm là các đối đầu vào. Cụ thể, nếu hai hàm có định danh giống nhau nhưng danh sách kiểu của các đối đầu vào
(tức là không tính đến tên các đối) khác nhau thì hai hàm đó là khác nhau. Cơ chế này được gọi là nạp chồng hàm.

Cơ chế này thường được sử dụng để viết các hàm thực hiện chức năng tương tự nhau nhưng được sử dụng với số giá trị đầu
vào hoặc kiểu các giá trị đầu vào khác nhau, ví dụ:

```cpp
void ghiViTri(const int x) {
	std::cout << x;
}

void ghiViTri(const int x, const int y) {
	std::cout << "(" << x << "; " << y << ")";
}
```

Một điều dễ hiểu là không thể khai báo hai hàm có định danh và danh sách kiểu đối đầu vào giống nhau.