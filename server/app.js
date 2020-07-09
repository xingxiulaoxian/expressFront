/*
 * @Description: 服务
 * @Author: yy
 * @Date: 2020-07-08 16:00:38
 * @LastEditors: yy
 * @LastEditTime: 2020-07-09 15:55:21
 */ 

const express = require('express');
const config = require('./config/index')
const app = express();

app.use(express.static(`${config.root}/public`));

app.use('/*', (req, res) => {
  res.send(config)
})

app.listen(config.PORT, function () {
  console.log(`Example app listening on port ${config.PORT}! http://localhost:${config.PORT}`);
});