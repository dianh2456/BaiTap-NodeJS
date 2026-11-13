var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.write('Họ và tên: Nguyễn Lê Duy Anh<br>');
    res.write('Lớp: CNTT18A<br>');
    res.write('Trường: Cao đẳng Kỹ thuật Công Nghệ Nha Trang');

    res.end();
}).listen(3000);

console.log('Server đang chạy tại địa chỉ: http://localhost:3000');