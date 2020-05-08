// module.exports = {
//     mode: "development" //可以设置为development(开发模式)，production(发布模式)
// }

// 补充：mode设置的是项目的编译模式。
// 如果设置为development则表示项目处于开发阶段，不会进行压缩和混淆，打包速度会快一些
// 如果设置为production则表示项目处于上线发布阶段，会进行压缩和混淆，打包速度会慢一些


// 在webpack 4.x中，默认会将src/index.js 作为默认的打包入口js文件
//                  默认会将dist/main.js 作为默认的打包输出js文件
// 如果不想使用默认的入口/出口js文件，我们可以通过改变 webpack.config.js 来设置入口/出口的js文件，如下：
const path = require("path");
module.exports = {
    mode: "development",
    //设置入口文件路径
    entry: path.join(__dirname, "./src/main.min.js"),
    //设置出口文件
    output: {
        //设置路径
        path: path.join(__dirname, "./dist"),
        //设置文件名
        filename: "budle.js"
    }
}