Bài 1. Giới thiệu ngôn ngữ lập trình C++
# 1. Ngôn ngữ lập trình nói chung

Máy tính điện tử được con người tạo ra để thực hiện một số công việc một cách tự động. Các công việc được xác định cho
máy tính dưới hình thức các chương trình. Một chương trình là tập hợp các câu lệnh chỉ dẫn máy tính thực hiện các thao
tác cụ thể sao cho kết quả là công việc mong muốn được hoàn thành. Cho đến thời điểm hiện tại, máy tính vẫn chưa thể
hiểu được nhiều ngôn ngữ của con người, nên ta chưa thể tạo ra một chương trình bằng chính ngôn ngữ của mình. Thay vào
đó, chương trình được viết bằng "ngôn ngữ máy", mỗi câu lệnh là một chuỗi những con số, và mỗi chuỗi số này được gán với
một hành động nhất định mà máy tính thực hiện. Quá trình viết chương trình được gọi là lập trình, và người lập trình
được gọi là lập trình viên.

Do con người chúng ta không quen làm việc với những con số như vậy, dẫn đến năng suất viết chương trình không cao, một
nhu cầu làm cho chương trình được viết dưới dạng gần hơn với ngôn ngữ tự nhiên đã sớm xuất hiện. Thay vì phải nhập vào
những con số, lập trình viên có thể viết các từ và kí hiệu theo những quy tắc nhất định, và một chương trình máy tính sẽ
thực hiện chuyển đổi các từ và kí hiệu đó, gọi là mã nguồn, thành các câu lệnh ngôn ngữ máy, hay còn gọi là mã máy. Các
quy tắc kia được gọi là một ngôn ngữ lập trình, và do chương trình chuyển đổi thực hiện chuyển nội dung từ ngôn ngữ này
sang ngôn ngữ khác, nó được gọi là một chương trình dịch.

Có hai kiểu chính của chương trình dịch:
- Kiểu phiên dịch: Mã nguồn của chương trình được dịch toàn bộ sang mã máy trước khi chương trình được thực hiện (hay
  thường gọi là chạy). Việc này giống như phiên dịch viên thực hiện dịch toàn bộ một tài liệu trước khi xuất bản cho mọi
  người đọc.
- Kiểu thông dịch: Từng phần nhỏ (thường là câu lệnh) mã nguồn của chương trình được dịch sang mã máy rồi cho thực hiện
  ngay. Việc này giống như thông dịch viên nghe xong một câu từ người này thì nói luôn bản dịch của câu nói đó cho người
  kia.

# 2. Lịch sử ngôn ngữ lập trình C++

C++ là một ngôn ngữ lập trình lớn và lâu đời. Lớn là bởi vì nó có rất nhiều tính năng, và lâu đời do nó có một bề dày
lịch sử ngót 40 năm với rất nhiều biến chuyển trong thế giới công nghệ cũng như những quyết định về thiết kế của ngôn
ngữ. Vậy trước hết chúng ta hãy tìm hiểu sơ qua về xuất thân của C++, và từ đó làm rõ một sai lầm đầu tiên của nhiều
người khi nghĩ về ngôn ngữ này.

Bjarne Stroustroup, một nhà khoa học máy tính người Đan Mạch có mong muốn tạo ra một ngôn ngữ với những tính năng từ
ngôn ngữ Simula mà đối với ông rất hữu ích cho việc lập trình, tuy nhiên lại không chạy chậm như Simula thời bấy giờ.
Ông thêm các tính năng đó lên trên nền của ngôn ngữ C và gọi đó là "C với các lớp", "lớp" ở đây là một thuật ngữ trong
lập trình hướng đối tượng và là một tính năng chính được ông đưa vào. Đến năm 1982, Stroustoup tạo ra một phiên bản
mới, thêm vào rất nhiều tính năng, với một bộ dịch riêng mang tên "Cfront" và quyết định đặt tên cho phiên bản ngôn ngữ
mới này là "C++". Ba năm sau đó, ông cho ra mắt quyển sách *Ngôn ngữ lập trình C++* để mô tả và hướng dẫn cách sử dụng
ngôn ngữ của mình, đó là năm 1985 và được coi là năm ra đời chính thức của ngôn ngữ C++.

Trong những năm sau đó, nhiều bộ dịch khác cho C++ được cho ra đời, tạo ra rất nhiều sự lựa chọn cho các lập trình viên,
tuy nhiên các tính năng của mỗi bộ dịch lại không giống nhau, dẫn đến khó khăn trong việc học cũng như tạo ra các chương
trình có thể chạy được trong nhiều môi trường khác nhau. Để giải quyết vấn đề này, vào năm 1998, một bản quy chuẩn được
thống nhất hoàn thiện, các bộ dịch dựa theo quy chuẩn này để thực hiện, từ đó một chương trình viết theo các quy luật
của quy chuẩn có khả năng cao dịch được, và chạy được, khi qua tay các bộ dịch khác nhau.

Năm 2011, một phiên bản quy chuẩn mới được coi là đã "lột xác" C++ với rất nhiều tính năng và cơ chế mới giúp cho việc
viết chương trình trở nên dễ dàng và hiệu quả hơn. Kể từ đó, cứ ba năm một lần, C++ lại có một lần cập nhật, và lần cập
nhật nào cũng có những điều mới mẻ, thú vị nhưng cũng không kém phần hữu ích.

Và đến đây thì ta có thể nhắc đến cái sai lầm của nhiều người khi nghĩ về C++. Họ chỉ đọc phần đầu tiên của tiểu sử và
cho rẳng sau 40 năm, C++ vẫn chỉ là "C với các lớp", và từ đó cho rằng "C là cơ bản của C++", "muốn học C++ thì phải học
C trước". Như đã trình bày, ngôn ngữ C++ đã trải qua rất nhiều thay đổi và bản thân ngôn ngữ C gốc cũng đã chọn một con
đường riêng cho mình. Mã nguồn viết bằng ngôn ngữ C++ hiện đại nhìn không hề giống với mã nguồn viết bằng C. Vì lí do
này mà khái niệm "C/C++" không phải là một khái niệm đúng, hoặc chí ít đã không còn là một khái niệm đúng trong ít nhất
10 năm.

Một nguyên nhân không nhỏ làm phổ biến sai lầm trên là nhiều người đã được dạy C++ không đúng, cụ thể, người dạy truyền
đạt những tính năng đến từ C và rất ít tính năng đến từ C++. Phần lớn các tính năng của C vẫn có thể được sử dụng trong
C++, tuy nhiên không ít trong số đó không còn phù hợp. Thay vào đó có những tính năng khác, phương pháp khác để thực
hiện điều người lập trình muốn, mà trong nhiều trường hợp là những con đường dễ dàng, hiệu quả, an toàn hơn. Trang hướng
dẫn này ngoài việc truyền đạt các tính năng của C++ cũng sẽ nhắc đến những gì không còn phù hợp đến từ C để các bạn có
thể để ý và chỉ sử dụng trong những trường hợp thật sự cần thiết.

# 3. C++ có thể làm gì?

C++ là một ngôn ngữ lập trình, và vì thế như ta đã biết nó được dùng để viết các chương trình máy tính. Các bộ dịch
thường thực hiện biên dịch mã nguồn C++ thành chương trình mã máy. Gần như không có giới hạn nào đối với các loại chương
trình mà có thể được viết bằng C++, tuy nhiên sự phù hợp của nó với từng hoàn cảnh sử dụng là khác nhau. C++ thường được
dùng để viết các chương trình, thư viện hệ thống của máy tính và các ứng dụng yêu cầu hiệu năng cao như xử lí dữ liệu,
trí tuệ nhân tạo, trò chơi điện tử,... Trong một số các ứng dụng khác, việc viết bằng C++ là tương đối phức tạp và nhiều
khi hiệu năng cao cũng không phải là vấn đề quá quan trọng, nên các ngôn ngữ khác được sử dụng nhiều hơn. Một ví dụ cụ
thể là bản thân chương trình tạo ra trang hướng dẫn này được viết bằng JavaScript. Một trường hợp riêng khác là trong
ngành vi điều khiển, do việc tạo ra một bộ dịch C++ phức tạp hơn rất nhiều so với bộ dịch C, có khả năng một bộ dịch C++
không tồn tại cho một loại chip mà thay vào đó chỉ có một bộ dịch C, nên thường các chương trình cho vi điều khiển sẽ
được viết bằng C.