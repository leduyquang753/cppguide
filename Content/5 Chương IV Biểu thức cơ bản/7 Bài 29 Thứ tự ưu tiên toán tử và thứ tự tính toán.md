Bài 29. Thứ tự ưu tiên toán tử và thứ tự tính toán
# 1. Thứ tự ưu tiên toán tử

Khi viết các biểu thức tính toán, người ta đề ra một số quy luật gộp các phần biểu thức của một số toán tử trước các
toán tử khác để không phải lúc nào cũng phải viết tường minh các phần nào của biểu thức được gộp lại với nhau, làm cho
biểu thức gọn gàng và dễ đọc hơn. Các quy luật đó được gọi là thứ tự ưu tiên toán tử (operator precedence). Các biểu
thức tính toán trong C++ cũng áp dụng một bộ quy luật như vậy. Khi có nhiều toán tử xuất hiện trong một biểu thức, các
quy luật quyết định một toán tử sẽ lấy các giá trị nào để thực hiện phép toán, đó có thể là một giá trị đơn lẻ nằm ngay
bên cạnh hoặc kết quả của một toán tử khác.

Các toán tử đã được trình bày trong trang hướng dẫn này được sắp xếp theo các mức thứ tự ưu tiên giảm dần như sau:

| Mức | Các toán tử | Chiều gộp |
| --- | --- | --- |
| 2 | `a++`, `a--`,<br/>`a()` | Trái sang phải → |
| 3 | `++a`, `--a`,<br/>`+a`, `-a`,<br/>`!a`, `~a`,<br/>`sizeof a` | Phải sang trái ← |
| 5 | `a * b`, `a / b`, `a % b` | Trái sang phải → |
| 6 | `a + b`, `a - b` | Trái sang phải → |
| 7 | `a << b`, `a >> b` | Trái sang phải → |
| 9 | `a < b`, `a > b`, `a <= b`, `a >= b` | Trái sang phải → |
| 10 | `a == b`, `a != b` | Trái sang phải → |
| 11 | `a & b` | Trái sang phải → |
| 12 | `a ^ b` | Trái sang phải → |
| 13 | `a \| b` | Trái sang phải → |
| 14 | `a && b` | Trái sang phải → |
| 15 | `a \|\| b` | Trái sang phải → |
| 16 | `c ? t : f`,<br/>`a = b`,<br/>`a += b`, `a -= b`,<br/>`a *= b`, `a /= b`, `a %= b`,<br/>`a <<= b`, `a >>= b`,<br/>`a &= b`, `a ^= b`, `a \|= b` | Phải sang trái ← |
| 17 | `a, b` | Trái sang phải → |

Một số mức không có trong bảng thuộc về các toán tử khác chưa được giới thiệu.

Để xác định cách gộp các toán tử, tìm một nhóm toán tử có cùng mức ưu tiên và đứng liên tiếp nhau, với mức ưu tiên cao
nhất và nằm xa nhất về phía bên trái. Nếu nhóm toán tử có chiều gộp từ trái sang phải, chọn toán tử xa nhất về bên trái
trong nhóm; nếu nhóm toán tử có chiều gộp từ phải sang trái, chọn toán tử xa nhất về bên phải trong nhóm. Đặt một cặp
ngoặc tròn `()` xung quanh toán tử và các giá trị xung quanh nó. Đối với toán tử nằm ở bên cạnh cặp ngoặc, giá trị của
biểu thức bên trong cặp ngoặc sẽ là giá trị được đưa vào toán tử. Lặp lại quá trình đối với những toán tử còn lại chưa
nằm trong ngoặc cho đến khi ta đặt một cặp ngoặc bao quanh toàn bộ biểu thức.

Ví dụ các bước gộp toán tử cho biểu thức `a + 8 * b - 5 > c - -+d / 6 && e`:

```
    a +  8 * b   - 5  >  c -   - +d   / 6    && e
    a +  8 * b   - 5  >  c -   -(+d)  / 6    && e
    a +  8 * b   - 5  >  c -  (-(+d)) / 6    && e
    a + (8 * b)  - 5  >  c -  (-(+d)) / 6    && e
    a + (8 * b)  - 5  >  c - ((-(+d)) / 6)   && e
   (a + (8 * b)) - 5  >  c - ((-(+d)) / 6)   && e
  ((a + (8 * b)) - 5) >  c - ((-(+d)) / 6)   && e
  ((a + (8 * b)) - 5) > (c - ((-(+d)) / 6))  && e
 (((a + (8 * b)) - 5) > (c - ((-(+d)) / 6))) && e
((((a + (8 * b)) - 5) > (c - ((-(+d)) / 6))) && e)
```

Và đến đây ta biết được mỗi toán tử sẽ nhận vào các giá trị nào.

Bạn có thể đặt những cặp ngoặc tròn `()` xung quanh những phần biểu thức bạn muốn gộp lại với nhau theo ý muốn trong mã
nguồn mà không nhất thiết phải tuân theo thứ tự ưu tiên toán tử.

Một điều đặc biệt của toán tử ba ngôi `c ? t : f` là biểu thức `t` được coi như nằm trong một cặp ngoặc tròn.

# 2. Thứ tự tính toán

Thứ tự ưu tiên toán tử như đã trình bày ở trên không quyết định các toán tử nào sẽ được thực hiện tính toán trước. Ví
dụ, trong biểu thức `a * b + (c + d)`, mặc dù `*` có thứ tự ưu tiên trên `+`, nhưng điều đó không quyết định rằng `a *
b` sẽ được tính trước `c + d`; thứ tự ưu tiên chỉ quyết định rằng kết quả của `a * b` sẽ được thực hiện cộng `+` với kết
quả của `(c + d)`.

C++ có một bộ quy luật để quyết định thứ tự tính toán trong một số trường hợp, một số quy luật liên quan đến các toán tử
đã được trình bày trong trang hướng dẫn này như sau:

- Một phần biểu thức được coi là có hiệu ứng phụ (side effect) nếu nó thực hiện thay đổi biến, gọi một hàm thực hiện
  viết hoặc đọc dữ liệu, hoặc gọi một hàm có thực hiện hiệu ứng phụ. Việc tính giá trị được nêu trong các quy luật này
  không bao gồm việc thực hiện các hiệu ứng phụ.
- Việc tính giá trị của các toán hạng được thực hiện trước việc tính giá trị kết quả của toán tử.
- Trong toán tử gọi hàm, việc tính giá trị và thực hiện các hiệu ứng phụ của tất cả các tham trị diễn ra trước khi hàm
  được thực hiện, bản thân các tham trị lần lượt được thực hiện tính giá trị và các hiệu ứng phụ theo một thứ tự không
  xác định.
- Việc tính giá trị của các toán tử tăng giảm hậu tố được thực hiện trước các hiệu ứng phụ.
- Việc thực hiện tính giá trị và các hiệu ứng phụ của toán hạng bên trái các toán tử `a && b`, `a || b`, `a << b`, `a >>
  b` và `a, b` diễn ra trước việc thực hiện tính giá trị và các hiệu ứng phụ của toán hạng bên phải.
- Việc thực hiện tính giá trị và các hiệu ứng phụ của toán hạng điều kiện trong toán tử ba ngôi `c ? t : f` diễn ra
  trước việc thực hiện tính giá trị và các hiệu ứng phụ của hai toán hạng còn lại.
- Đối với các toán tử gán, việc thực hiện tính giá trị và các hiệu ứng phụ của toán hạng bên phải diễn ra trước tiên,
  sau đó đến việc thực hiện tính giá trị và các hiệu ứng phụ của toán hạng bên trái, sau đó đến việc gán giá trị vào
  biến, sau đó đến việc tính giá trị kết quả của toán tử.
- Khi một hàm được thực hiện, hàm đó được thực hiện toàn bộ trước khi thực hiện các thao tác tiếp theo.

Danh sách đầy đủ của các quy luật có thể được xem trên
[CPPReference](https://en.cppreference.com/w/cpp/language/eval_order#.22Sequenced_before.22_rules_.28since_C.2B.2B11.29)[ (https://en.cppreference.com/w/cpp/language/eval_order)]{.printAlt}.

Nếu một phần biểu thức không rơi vào các quy luật thứ tự tính toán, việc thực hiện tính toán diễn ra không theo một
trình tự xác định nào cả, thậm chí các phần nhỏ hơn có thể được thực hiện tính toán xen kẽ với nhau, thứ tự của lần thực
hiện này có thể khác với thứ tự thực hiện của lần kế tiếp. Ví dụ trong biểu thức `a + b * c`, việc thực hiện tính toán
`a`, `b` và `c` có thể diễn ra trong bất kì thứ tự nào; một nửa quá trình tính `a` có thể được thực hiện trước, rồi quá
trình tính `c` được thực hiện, rồi nửa còn lại của quá trình tính `a` được thực hiện nốt, rồi mới thực hiện quá trình
tính `b`. Điều này cho phép bộ dịch tạo ra các đoạn mã máy thực hiện công việc tính toán một cách có hiệu quả nhất.

Do ảnh hưởng của điều trên, nếu hiệu ứng phụ của một biến không được sắp xếp trình tự đối với quá trình lấy giá trị hoặc
một hiệu ứng phụ khác đối với cùng biến đó, chương trình sẽ là không hợp lệ và có hành vi không xác định. Ví dụ, `++i -
i` là không hợp lệ do hiệu ứng phụ của `++i` không được sắp xếp trình tự đối với quá trình lấy giá trị của biến `i` làm
toán hạng bên phải của toán tử `-`.

::: note danger Nguy hiểm
Như vậy, nguồn nào nói rằng "thứ tự thực hiện biểu thức tuân theo thứ tự ưu tiên toán tử", "trong một chuỗi phép toán có
cùng mức ưu tiên, các phép toán được thực hiện từ trái sang phải" hay "từ phải sang trái" là hoàn toàn sai. Một số ngôn
ngữ khác như Java có quy định chặt chẽ hơn về thứ tự thực hiện biểu thức, với cái giá phải trả là hiệu quả tính toán
không còn được như C++.
:::

Như đã đề cập trong các bài trước, ta không nên đưa các thao tác gán biến vào trong một biểu thức tính toán, thay vào đó
ta thực hiện gán trong các câu lệnh nằm riêng. Như vậy, một là ta tránh được nguy cơ chương trình trở nên không hợp lệ
do thứ tự tính toán không xác định, hai là mã nguồn trở nên dễ đọc hơn.