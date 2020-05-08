import $ from "jquery";
$(function () {
    //隔行变色
    // $("li:odd").css("background", "cyan");
    // $("li:even").css("background", "pink");
    //三行隔行变色
    $("li:nth-child(3n-2)").css("background", "cyan"); //1,4,7
    $("li:nth-child(3n-1)").css("background", "skyblue"); //2,5,8
    $("li:nth-child(3n)").css("background", "lightblue"); //3,6,9
})