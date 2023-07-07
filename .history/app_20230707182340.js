const cors = require('cors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((req, res, next) => {
  const apiUrl = req.protocol + '://' + req.get('host') + '/api';
  // 将 apiUrl 存储到 res.locals 中，以便在后续的路由处理程序中使用
  res.locals.apiUrl = apiUrl;
  next();
});

// 示例路由处理程序，使用 apiUrl
app.get('/users', (req, res) => {
  const apiUrl = res.locals.apiUrl;
  // 使用 apiUrl 进行 API 请求
  // ...
  res.send('API URL: ' + apiUrl);
});
//PCR開蓋
app.get('/api/start', (req, res) => {
  const myScript = require('./public/PCR_open.js');

  // 调用目标文件中的函数或执行其他操作
  myScript.req;

  res.json({ message: '服务器已启动' });
});
//PCR關蓋

app.get('/api/start', (req, res) => {
  const myScript = require('./public/PCR_close.js');

  // 调用目标文件中的函数或执行其他操作
  myScript.req;

  res.json({ message: '服务器已启动' });
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// 啟動服務器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

