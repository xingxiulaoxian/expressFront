/*
 * @Description: 功能描述
 * @Author: yy
 * @Date: 2020-07-08 16:00:38
 * @LastEditors: yy
 * @LastEditTime: 2020-07-09 11:59:09
 */ 

var express = require('express');
var app = express();

const PORT = 5000

app.use('/*', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}! http://localhost:${PORT}`);
});