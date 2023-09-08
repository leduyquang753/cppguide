Bài 30. Đối tượng và định danh
# 1. Đối tượng

Chúng ta đã tìm hiểu qua về khái niệm "đối tượng" trong [bài 17](!4.1). Phần này sẽ trình bày thêm một số điều về các
đối tượng.

## a) Thời lượng lưu trữ (storage duration)

Trong quá trình chạy chương trình, mỗi đối tượng sẽ có một khoảng thời gian nào đó mà một phần bộ nhớ được dành ra làm
chỗ cho nó, đó được gọi là thời lượng lưu trữ.

Đối với các đối tượng được tạo ra bằng câu lệnh khai báo biến thông thường trong hàm, thời lượng lưu trữ là "tự động"
("automatic"). Phần bộ nhớ cho đối tượng được cấp ở đầu phạm vi chứa biến và thu hồi sau khi đi ra khỏi phạm vi đó.

Đối với các đối tượng được tạo ra bằng câu lệnh khai báo biến toàn cục, thời lượng lưu trữ là "tĩnh" ("static"). Phần bộ
nhớ cho đối tượng được cấp khi chương trình bắt đầu chạy và thu hồi khi chương trình kết thúc.

Ngoài ra còn có các thời lượng "luồng" ("thread") và "động" ("dynamic") sẽ được tìm hiểu trong các bài sau.

## b) Thời gian sống (lifetime)

Thời gian sống là khoảng thời gian mà một đối tượng tồn tại đầy đủ và nguyên vẹn trong khi chạy chương trình, khi đó đối
tượng có thể được sử dụng bình thường. Như vậy, thời gian sống của một đối tượng bắt đầu khi quá trình khởi tạo của nó
hoàn tất và kết thúc khi quá trình phá hủy nó được bắt đầu hoặc phần bộ nhớ của nó được thu hồi hay tái sử dụng.

## c) Tên

Mọi đối tượng ta đã tạo ra bằng câu lệnh khai báo biến đều được cho một cái tên là một định danh. Tuy nhiên, một đối
tượng không nhất thiết phải được gán một tên. Các bài sau sẽ hé lộ một số cách mà các đối tượng như vậy có thể được tạo
ra.

# 2. Định danh

Phần này sẽ nói chi tiết về quy định của C++ đối với các định danh mà ta sử dụng để đặt tên cho các đối tượng cũng như
các thành phần khác của chương trình.

## a) Thành phần kí tự của định danh

Kí tự đầu tiên của một định danh có thể là một chữ cái tiếng Anh, dấu gạch dưới hoặc một kí tự Unicode thuộc tập hợp
`XID_Start`. Các kí tự tiếp theo của định danh có thể là một chữ cái tiếng Anh, một chữ số, dấu gạch dưới hoặc một kí tự
Unicode thuộc tập hợp `XID_Continue`. Chi tiết về các tập hợp có thể được xem trên [trang web chính thức của
Unicode](https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers)[
(https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers)]{.printAlt}. Các kí tự Unicode thuộc các
tập hợp trên bao gồm chữ của nhiều ngôn ngữ khác nhau, trong đó có tiếng Việt.

Một số ví dụ định danh hợp lệ:
- `ordinalNumber` – chứa toàn chữ cái tiếng Anh.
- `ordinal_number` – chứa chữ cái tiếng Anh và dấu gạch dưới.
- `player1Stats` – chứa chữ cái tiếng Anh và chữ số, kí tự đầu tiên không phải chữ số.
- `số_thứ_tự` – chứa chữ cái tiếng Anh, chữ cái tiếng Việt và dấu gạch dưới.
- `区の人口` – chứa chữ Hán và chữ cái tiếng Nhật.

Một số ví dụ định danh không hợp lệ:
- `ordinal number` – chứa dấu cách.
- `OMG!!!1!!` – chứa dấu chấm than `!`.
- `2023_stats` – kí tự đầu tiên là chữ số.
- `emojiCount_👌` – chứa kí tự emoji, kí tự emoji không thuộc tập hợp kí tự Unicode được cho phép.

Các từ khóa không thể được sử dụng làm định danh. Một số định danh khác khi được sử dụng ở những vị trí nhất định cũng
mang ý nghĩa đặc biệt trong ngôn ngữ. Một danh sách đầy đủ các từ khóa được liệt kê trên
[CPPReference](https://en.cppreference.com/w/cpp/keyword)[ (https://en.cppreference.com/w/cpp/keyword)]{.printAlt}.

::: note note Ghi chú
Mặc dù các định danh cho phép viết các chữ cái không phải tiếng Anh, trong thực tế ta thường không làm như vậy do các
định danh đó khó viết hơn và một số bộ dịch không hỗ trợ chúng. Như vậy thông thường ta chỉ dùng các định danh bao gồm
các chữ cái tiếng Anh, chữ số và dấu gạch dưới.
:::

## b) Các định danh dành riêng (reserved identifiers)

Ngoài ra, ngôn ngữ còn quy định các định danh dành riêng cho các mục đích sử dụng của ngôn ngữ và môi trường, bao gồm:

- Các định danh chứa hai dấu gạch dưới liên tiếp nhau `__`.
- Các định danh bắt đầu bằng dấu gạch dưới và theo sau là một chữ cái viết hoa.
- Các định danh bắt đầu bằng dấu gạch dưới trong không gian tên toàn cục.

Người lập trình sử dụng C++ không được phép sử dụng các định danh trên để đặt cho các thành phần của mình; nếu sử dụng,
chương trình là không hợp lệ và có hành vi không xác định.

## c) Một số cách đặt định danh thông dụng

Các dự án viết bằng C++ chủ yếu sử dụng một số cách viết định danh sau:

- Snake case (kiểu "con rắn"): Viết thường toàn bộ, phân cách các từ bằng dấu gạch dưới, ví dụ `so_thu_tu`.
- Camel case (kiểu "lạc đà"): Mỗi từ có chữ cái đầu tiên viết hoa và các chữ cái còn lại viết thường, các từ được viết
  liền nhau. Có hai kiểu con:
  - Viết thường chữ cái đầu tiên, ví dụ `soThuTu`.
  - Không viết thường, tức viết hoa chữ cái đầu tiên, ví dụ `SoThuTu`. Kiểu này còn được gọi là Pascal case (từ ngôn ngữ
  	lập trình Pascal).

Các dự án có các bộ quy ước đặt tên khác nhau, mỗi bộ sẽ thực hiện gán một kiểu viết định danh cho từng loại thành phần
của chương trình. Bạn có thể tham khảo và lựa chọn một bộ quy ước như vậy để áp dụng cho chương trình của mình. Bạn cũng
có thể tự đặt ra một bộ quy ước của riêng mình, tuy nhiên nếu bạn có ý định cho người khác đọc mã nguồn thì bạn cần
tránh các kiểu đặt định danh quá lạ lẫm vì sẽ gây khó khăn hơn cho người đọc.