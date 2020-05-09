import $ from "jquery";
import './css/index.css'
import './css/index.less'
import './css/index.scss'
$(function () {
    //隔行变色
    // $("li:odd").css("background", "cyan");
    // $("li:even").css("background", "pink");
    //三行隔行变色
    $("li:nth-child(3n-2)").css("background", "pink"); //1,4,7
    $("li:nth-child(3n-1)").css("background", "skyblue"); //2,5,8
    $("li:nth-child(3n)").css("background", "lightblue"); //3,6,9
})
class Person {
    static info = 'aaa'
}

console.log(Person.info)

//--------------------------------------
import Vue from 'vue'
// 导入单文件组件
import App from './components/App.vue'
const vm = new Vue({
    el: "#app",
    render: h => h(App)
})