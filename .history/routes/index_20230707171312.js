var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
