var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

module.exports = {
    entry:'./src/index.js',
     
     output:{
          //__dirname 当前webpack.config.js的路径
          filename: '[name].js',      //打包后index.js的名字，
                                     // 这个[name]的意思是,配置入口entry键值对里的key值,app/dist/js/index,最后的index，
                                     //这里无论你src/js/index.js这个脚本如何命名，打包后都将是index.js
          path: path.resolve(__dirname)
     },


     //插件
     plugins:[
        new HtmlWebpackPlugin({
          filename:'dist/index.html'
        })
     ]
}