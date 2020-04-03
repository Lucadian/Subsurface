module.exports = {
  //输出路径
  outputDir:'../dist',

  //输出的文件，其文件名是否添加哈希值
  filenameHashing:true,
  publicPath: '/dist/',
  pages:{
    index:{
      entry: './src/main.js',

      // 模板来源
      template: './public/index.html',

      // 在 dist/index.html 的输出
      filename: '../index.html',

      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // title: '次表面网络空间',
    }
  },

  devServer:{
    port:8080,
    // host:'192.168.2.2',
    // contentBase:'./dist',
    contentBase:'../',
    progress:true,
    compress:true
  },
  //生产环境的 SourceMap，关闭以加快打包速度
  productionSourceMap:false,
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [

    ]
  }
}