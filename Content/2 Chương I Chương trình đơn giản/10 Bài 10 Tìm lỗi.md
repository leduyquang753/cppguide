Bài 10. Tìm lỗi
Trong quá trình lập trình, chúng ta không thể tránh khỏi việc mắc lỗi làm cho chương trình không hợp lệ hoặc có hành vi
không đúng như mong muốn. Để có thể sửa được vấn đề, việc tìm ra nguồn gốc và nguyên nhân của lỗi là rất quan trọng. Bài
này sẽ giới thiệu một số kĩ thuật tìm lỗi cơ bản.

# 1. Quan sát hành vi chương trình

Khi chương trình có hành vi không đúng như ý muốn, trước hết bạn nên thực hiện quan sát xem hành vi không mong muốn đó
cụ thể là như thế nào. Trong quá trình đó, bạn cũng nên ghi lại các dữ liệu đầu vào được cung cấp cho chương trình. Từ
những thông tin đó, bạn có thể dự đoán được phần nào của chương trình có khả năng liên quan đến lỗi, tạo cơ sở thông tin
phục vụ cho các kĩ thuật tìm lỗi tiếp theo.

# 2. Xem xét lại mã nguồn

Nếu chương trình có ít mã nguồn hoặc bạn đã dự đoán được phần chương trình đang có lỗi, bạn có thể thực hiện xem xét kĩ
lại từng câu lệnh trong mã nguồn xem chúng có đang thực sự làm đúng những gì bạn mong muốn hay không. Nếu bạn viết mã
nguồn dựa trên một bản thiết kế thuật toán, bạn cần thực hiện đối chiếu mã nguồn với thuật toán đó.

# 3. Sử dụng debugger

Thuật ngữ tiếng Anh được sử dụng để chỉ lỗi trong phần mềm là "bug", dựa theo đó, "debugger", nghĩa là "chương trình
loại bỏ bug", chỉ các chương trình phục vụ cho việc tìm và sửa các lỗi trong phần mềm. Debugger là một công cụ cơ bản
không thể thiếu trong bộ công cụ của lập trình viên, nhưng đáng tiếc là nhiều người học lập trình không được định hướng
tiếp cận với công cụ sớm, tạo ra những khó khăn không đáng có khi người học thực hiện tìm lỗi trong các chương trình
của mình.

Các phần mềm viết mã nguồn C++ sẽ cung cấp sẵn debugger. Mỗi chương trình debugger có các hình thức giao diện khác nhau
(có thể là giao diện đồ họa hoặc văn bản), nhưng chúng đều có những tính năng cơ bản chung, một số tính năng cơ bản như
vậy sẽ được giới thiệu dưới đây. Để biết chi tiết cách sử dụng debugger trong phần mềm bạn đang sử dụng, bạn hãy đọc các
nguồn tài liệu chính thức hoặc tham khảo các nguồn khác trên mạng.

## a) Đặt điểm dừng

Ta có thể xác định các vị trí mà debugger sẽ cho tạm dừng việc chạy chương trình để ta có thể xem xét hoặc thực hiện các
thao tác tiếp theo trong quá trình tìm lỗi, những vị trí đó gọi là điểm dừng, thuật ngữ tiếng Anh là "breakpoint". Khi
đã thực hiện xong các thao tác bạn muốn, bạn có thể đặt lệnh để chương trình tiếp tục chạy từ điểm dừng đó.

Nếu bạn đặt điểm dừng tại một vị trí mà khi chạy, chương trình không tạm dừng, điều đó chứng tỏ đoạn mã chứa vị trí đó
không được chạy qua. Từ thông tin này bạn có thể tiếp tục xem xét các yếu tố có thể ngăn đoạn mã đó được chạy vào.

## b) Quan sát các giá trị

Khi chương trình được tạm dừng, bạn có thể xem giá trị của các biến tại vị trí điểm dừng và đối chiếu với các dự đoán
của bạn về giá trị đúng mà các biến đó cần phải chứa. Nếu bạn thấy các giá trị bất thường, đó là đầu mối quan trọng để
bạn tiếp tục tìm đến nguồn gốc nguyên nhân gây ra giá trị bất thường, sai sót đó.

## c) Chạy từng lệnh

Khi chương trình được tạm dừng, bạn có thể đặt lệnh cho chương trình chỉ chạy lệnh tiếp theo, sau đó tiếp tục tạm dừng.
Khi thực hiện liên tiếp thao tác này kết hợp với việc quan sát các giá trị, bạn có thể nhìn được luồng chạy của chương
trình. Nếu chương trình đi theo một hướng khác với những gì bạn trông đợi, bạn có thể dựa vào các thông tin đã quan sất
để tìm ra nguyên nhân lỗi.

# 4. Tạm thời thay đổi mã nguồn

Ta có thể tạm thời thay đổi mã nguồn để phục vụ việc tìm lỗi. Hai thao tác thường được thực hiện là:

- Tạm thời loại bỏ một số phần của chương trình để xem các phần chương trình còn lại có hoạt động đúng không.
- Thêm các câu lệnh viết thông tin trạng thái của chương trình ra màn hình trong khi chạy.

Tuy nhiên, trong phần lớn các trường hợp thì phương pháp này để tìm lỗi sẽ rối và kém hiệu quả hơn so với việc sử dụng
debugger như đã nói ở phần trên, cùng với một số rủi ro sau:

- Trong quá trình thay đổi mã nguồn, ta có thể vô tình thay đổi hành vi của chương trình.
- Sau khi tìm lỗi, ta cần phải loại bỏ hết những thay đổi tạm thời mà ta đã thực hiện đối với mã nguồn, một số thay đổi
  có thể bị bỏ sót.

Vì thế, hãy ưu tiên sử dụng debugger.