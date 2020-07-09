/*
 * @Description: server配置
 * @Author: yy
 * @Date: 2020-07-09 14:58:16
 * @LastEditors: yy
 * @LastEditTime: 2020-07-09 16:05:04
 */ 
const {resolve} = require('path')

const root = resolve(__dirname, '../')

module.exports = {
  PORT: 5000,
  root: root,
  public: resolve(root, './public')
}