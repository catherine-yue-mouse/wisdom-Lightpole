module.exports = {
 devServer: {
  port: 57103 // 端口号配置
 },
 configureWebpack: {
  externals: {
   'AMap': 'AMap' // 高德地图配置
  }
 }
}