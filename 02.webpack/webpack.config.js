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
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vuePlugin = new VueLoaderPlugin();
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: "./src/index.html",
    //设置生成的预览页面名称
    filename: "index.html"
})
module.exports = {
    mode: "development",
    //设置入口文件路径
    entry: path.join(__dirname, "./src/main.min.js"),
    //设置出口文件
    output: {
        //设置路径
        path: path.join(__dirname, "./dist"),
        //设置文件名
        filename: "bundle.js"
    },
    // 添加plugins信息
    plugins: [htmlPlugin, vuePlugin],
    module: {
        rules: [{
                //test设置需要匹配的文件类型，支持正则
                test: /\.css$/,
                //use表示该文件类型需要调用的loader
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来设置字节数，只有小于limit值的图片，才会转换
                //为base64图片
                use: "url-loader?limit=16940"
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                //exclude为排除项，意思是不要处理node_modules中的js文件
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}