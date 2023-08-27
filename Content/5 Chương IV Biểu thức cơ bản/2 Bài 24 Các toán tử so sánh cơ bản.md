Bài 24. Các toán tử so sánh cơ bản
# 1. Các toán tử so sánh cơ bản

Các toán tử so sánh cơ bản sau cũng thực hiện thăng cấp kiểu số nguyên và chuyển đổi số học thông thường đối với các
toán hạng. `a` và `b` được sử dụng trong bài này để đại diện cho các toán hạng được đưa vào toán tử.

Toán tử `a == b` là toán tử so sánh bằng, cho ra `true` nếu `a` có giá trị bằng `b` hoặc `false` nếu không bằng.

Toán tử `a != b` là toán tử so sánh không bằng, cho ra `true` nếu `a` có giá trị không bằng `b` hoặc `true` nếu bằng.

Toán tử `a < b` là toán tử so sánh nhỏ hơn, cho ra `true` nếu `a` có giá trị nhỏ hơn `b` hoặc `false` trong các trường
hợp còn lại.

Toán tử `a > b` là toán tử so sánh lớn hơn, cho ra `true` nếu `a` có giá trị lớn hơn `b` hoặc `false` trong các trường
hợp còn lại.

Toán tử `a <= b` là toán tử so sánh nhỏ hơn hoặc bằng, cho ra `true` nếu `a` có giá trị nhỏ hơn hoặc bằng `b` hoặc
`false` trong các trường hợp còn lại.

Toán tử `a >= b` là toán tử so sánh lớn hơn hoặc bằng, cho ra `true` nếu `a` có giá trị lớn hơn hoặc bằng `b` hoặc
`false` trong các trường hợp còn lại.

C++ 2020 có thêm toán tử `a <=> b` thực hiện xét tính lớn hơn, bằng hoặc nhỏ hơn. Cơ chế hoạt động của toán tử này không
phải là cơ bản và vì thế toán tử này sẽ được trình bày sau.

# 2. Một số lưu ý khi sử dụng các toán tử so sánh

Khi so sánh hai giá trị số nguyên trong đó một giá trị là số âm và giá trị còn lại có kiểu không dấu, bạn có thể sẽ cho
rằng giá trị số âm sẽ so sánh nhỏ hơn giá trị không dấu. Tuy nhiên quy luật chuyển đổi số học thông thường trong nhiều
trường hợp sẽ chuyển đổi giá trị số âm đó thành kiểu không dấu, và kết quả sẽ là kết quả so sánh giá trị không dấu đó
với giá trị kia.

Do phần lớn các giá trị số thực, nhất là sau khi trải qua quá trình tính toán, là các giá trị xấp xỉ, nên ta thường
không sử dụng `==` và `!=` để so sánh chúng vì có thể cho ra kết quả không chính xác.

Hai giá trị số thực +0 và -0 là bằng nhau.

Khi thực hiện so sánh hai giá trị số thực, nếu một trong hai giá trị là "không phải số" (NaN), thì toán tử `a != b` sẽ
luôn cho ra `true` và các toán tử so sánh cơ bản còn lại sẽ luôn cho ra `false`, ngay cả khi cả hai giá trị đều là
"không phải số".