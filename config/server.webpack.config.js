/*
 * @Description: 功能描述
 * @Author: yy
 * @Date: 2020-07-09 14:20:36
 * @LastEditors: yy
 * @LastEditTime: 2020-07-09 16:05:52
 */ 

const CopyPlugin = require('copy-webpack-plugin');
const { serverAppIndex, serverBuild, serverConfig } = require('./paths')
const config = {
  target: 'node',
  entry: serverAppIndex,
  output: {
    path: serverBuild,
    filename: 'server.js'
  },
  externals: {
    './config/index': 'commonjs ./config/index'
  },
  plugins: [
    // 复制配置文件夹
    new CopyPlugin({
      patterns: [
        {from: serverConfig, to: serverBuild + '/config'}
      ]
    }),
  ]
}


module.exports = config