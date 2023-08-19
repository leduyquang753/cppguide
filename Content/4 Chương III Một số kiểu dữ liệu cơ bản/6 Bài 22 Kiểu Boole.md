Bài 22. Kiểu Boole
Ta đã được biết về kiểu `bool` từ [bài 8](!2.8#3), nên ở bài này ta sẽ chỉ nói thêm về việc chuyển đổi giá trị giữa kiểu
`bool` và các kiểu số chính đã được trình bày.

Một giá trị số nguyên hoặc số thực có thể được ngầm định chuyển đổi thành kiểu `bool`. Giá trị mới là `false` nếu giá
trị ban đầu bằng 0 và `true` nếu khác 0. Đây là một thao tác chuyển đổi thu hẹp.

Một giá trị kiểu `bool` có thể được ngầm định chuyển đổi thành một kiểu số nguyên. Giá trị mới là `0` nếu giá trị ban
đầu là `false` và `1` nếu giá trị ban đầu là `true`. Giá trị kiểu `bool` không thể được chuyển đổi trực tiếp thành kiểu
số thực.