const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config)=>{
      config.resolve.alias
          .set('src', resolve('src'))
          .set('assets',resolve('src/assets'))
          .set('common',resolve('src/common'))
          .set('components',resolve('src/components'))
          .set('layout',resolve('src/layout'))
          .set('base',resolve('src/base'))
          .set('static',resolve('src/static'))
  },
  //项目部署基础
  //默认情况下，我们假设你的应用程序将部署在域的根目录下
  //例如https://www.my-app.com/ 
  //如果你的应用程序部署在子路径，你需要在
  //这里指定//子路径。例如，如果您的应用程序部署在
  // https://www.foobar.com/my-app/ 
  //那么将其更改为'/ my-app /' 
  baseUrl: '/',

  //在哪里输出构建文件 
  outputDir: 'dist',

  //静态资产的放置位置（js / css / img / font / ...） 
  //assetsDir: '',

  //是否使用eslint-loader来保存lint。
  //有效值：true | false | '错误' 
  //当设置为'错误'时，lint错误会导致编译失败。
  lintOnSave: true,

  //使用浏览器内编译器使用完整版本？
  // https：//vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only 
  runtimeCompiler: false,

  //默认情况下，babel-loader会跳过`node_modules`。
  //用这个选项显式地传递一个依赖。
  //transpileDependencies: [/* string or regex */],

  //为生产构建生成sourceMap？
  productionSourceMap: true,

  //调整内部webpack配置。
  //见https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md 
  //chainWebpack: () => {},
  configureWebpack: () => {},

  // CSS相关选项 
  css: {
     //将组件中的CSS提取到单个CSS文件中（仅在生产中）
    //也可以是要传递的选项对象extract-text-webpack-plugin 
    extract: true,

    //启用CSS源地图？
    sourceMap: false,

    //将自定义选项传递给预处理器加载器。例如将选项传递给
    // sass-loader，使用{sass：{...}} 
    loaderOptions: {},

    //为所有css /预处理器文件启用CSS模块。
    //此选项不会影响* .vue文件。
    modules: false
  },

  //在生产版本中为babel＆TS使用线程加载器
  //默认情况下启用，如果机器具有多个 
  parallel: require('os').cpus().length > 1,

  // PWA插件的选项。
  //请参阅https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa 
  pwa: {},
  //配置webpack-dev-server行为 
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    //请参阅https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy 
    proxy: null, // string | Object
    before: app => {}
  },
  //第三方插件的选项 
  pluginOptions: {
    // ...
  }
}