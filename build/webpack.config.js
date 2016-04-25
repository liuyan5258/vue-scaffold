// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的main.js文件
  entry: {
    main: path.resolve(__dirname, '../app/app.js'),
    vendors: [
      'Vue'
    ]
  },
  // 输出配置
  output: {
    // 输出路径是 myProject/test/static
    path: path.resolve(__dirname, '../test/static'),
    publicPath: 'static/',
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {

    loaders: [
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/, 
        loader: 'vue'   
      },
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!autoprefixer'),
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!autoprefixer!sass-loader'),
      //   exclude: /node_modules/
      // },
      // 加载图片
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      less: 'vue-style!css!less',
      sass: 'vue-style!css!sass'
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, '../app/index.html'),
      inject: true
    })
  ]
}