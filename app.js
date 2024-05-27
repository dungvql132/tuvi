const express = require('express');
const app = express();
const port = process.env.PORT || 1337;;
const path = require("path");
const bodyParser = require('body-parser');

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// Sử dụng các file tĩnh 
app.use(express.static(__dirname + '/public'));

// dùng body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Sử dụng route từ thư mục routes
const indexRoute = require('./routes/index.route');
app.use('/', indexRoute);

// Sử dụng route từ thư mục routes
const laplasotuvinamphaiRoute = require('./routes/laplasotuvinamphai.route');
app.use('/nhapthongtinlasonamphai', laplasotuvinamphaiRoute);

const laplasotuvibacphaiRoute = require('./routes/laplasotuvibacphai.route');
app.use('/nhapthongtinlasobacphai', laplasotuvibacphaiRoute);


const hienthilasonamphai = require('./routes/hienthilasonamphai.route');
app.use('/lasonamphai', hienthilasonamphai);

const hienthilasobacphai = require('./routes/hienthilasobacphai.route');
app.use('/lasobacphai', hienthilasobacphai);

const gioithieu = require('./routes/gioithieu.route');
app.use('/gioithieu', gioithieu);

const laptutru = require('./routes/laptutru.route');
app.use('/laptutru', laptutru);

const lapluchao = require('./routes/lapluchao.route');
app.use('/lapluchao', lapluchao);

app.get("*",(req,res) => {
  res.render("404")
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });