module.exports = {
    mode: "development" //可以设置为development(开发模式)，production(发布模式)
}

// 补充：mode设置的是项目的编译模式。
// 如果设置为development则表示项目处于开发阶段，不会进行压缩和混淆，打包速度会快一些
// 如果设置为production则表示项目处于上线发布阶段，会进行压缩和混淆，打包速度会慢一些