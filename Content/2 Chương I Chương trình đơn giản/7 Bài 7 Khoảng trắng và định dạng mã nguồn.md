Bài 7. Khoảng trắng và định dạng mã nguồn
# 1. Khoảng trắng

C++ không thực hiện kiểm soát chặt chẽ về các khoảng trắng bạn có thể đặt trong mã nguồn. Trong nhiều trường hợp, ngôn
ngữ phân định các thành phần cú pháp thông qua việc chúng sử dụng các loại kí tự khác nhau. Trong một số ít trường hợp
còn lại thì cần có khoảng trắng để có thể phân định chẳng hạn như giữa hai thành phần cú pháp cấu thành bằng các từ, một
ví dụ là giữa `int` và `a` trong khai báo biến `int a{10};`. Ngoài việc đó ra thì số lượng khoảng trắng cũng như kiểu
các khoảng trắng (dấu cách, dấu tab, dấu xuống dòng) trong đa số trường hợp là không quan trọng.

Để dễ hình dung, ta lấy ví dụ dòng lệnh `int tong {a + b};`. Ta có thể bỏ gần như mọi khoảng trắng trừ ở vị trí giữa
`int` và `tong` do nếu viết liền thì nó sẽ thành một từ `inttong`:

```cpp
int tong{a+b};
```

Ta có thể sử dụng bao nhiêu khoảng trắng tùy ý:

```cpp
   int       tong{  a     + b   }  ;
```

Thậm chí sử dụng cả dấu xuống dòng:

```cpp
int
tong { a
       + b
     };
```

Các câu lệnh cũng không cần phân tách với nhau bằng khoảng trắng hoặc có thể phân tách bằng dấu cách. Ta có thể viết
`int a;std::cin >> a;` trên cùng một dòng.

Một số vị trí mà các kí tự khoảng trắng có ảnh hưởng là:

- Trong tên của thành phần được nhập với lệnh `#include`. Nếu bạn viết các khoảng trắng vào trong cặp ngoặc nhọn `<>`
  chúng sẽ được coi là một phần của tên thành phần.
- Mỗi lệnh `#include` cần được viết trên một dòng riêng.
- Trong nội dung văn bản (trong cặp nháy kép `""`) của câu lệnh viết ra màn hình. Bạn đưa những khoảng trắng nào vào thì
  màn hình sẽ xuất hiện những khoảng trắng đó. Tuy nhiên bạn không thể gõ trực tiếp kí tự xuống dòng mà bạn cần phải sử
  dụng `\n`.

# 2. Định dạng mã nguồn

Trong khi thực hiện lập trình các chương trình máy tính, chúng ta bỏ nhiều thời gian đọc mã nguồn hơn là viết. Vì thế để
công việc có thể thực hiện hiệu quả, mã nguồn cần phải được trình bày sao cho dễ đọc. Hai tiêu chuẩn tổng quát về tính
dễ đọc là khả năng nhìn ra các thành phần khác nhau của mã nguồn, và mức độ thống nhất của định dạng trong toàn bộ mã
nguồn của dự án.

Một số quy luật định dạng cơ bản thường được áp dụng là:

- Để một dòng trống giữa các phần khác nhau của mã nguồn, chẳng hạn giữa phần đầu và phần chương trình chính.
- Mỗi dòng không chứa nhiều hơn một câu lệnh, tuy nhiên một câu lệnh có thể được chia ra nhiều dòng nếu quá dài.
- Các câu lệnh trong một đoạn mã nguồn bao bởi cặp ngoặc móc `{}` được thêm khoảng trắng ở phía trước sao cho chúng được
  thụt vào trong hơn so với các thành phần nằm ngoài đoạn mã nguồn đó.
- Để một dấu cách giữa các thành phần cú pháp trong một câu lệnh, trừ khi một thành phần nằm ngay sau dấu mở ngoặc, ngay
  trước dấu đóng ngoặc hoặc ngay trước dấu chấm phẩy `;` kết thúc câu lệnh.

Có một số bộ quy chuẩn về định dạng mã nguồn được một số tổ chức công bố mà bạn có thể tìm hiểu và tham khảo. Nhưng bạn
có thể tùy ý lựa chọn kiểu định dạng mã nguồn cho các chương trình của mình, miễn sao nó thỏa mãn được tính dễ đọc. Các
phần mềm viết mã cho C++ thường sẽ có tính năng tự động định dạng mã nguồn.