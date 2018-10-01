/**
 * Created by lly on 2017/6/15.
 */
(function () {

    //


    // var text=document.getElementById("text");
    // var password=document.getElementById("password"

})();

//判断用户名，密码是否为空
function checkMe() {
    var logon =document.getElementById('logon');
    console.info(logon);
    if(logon.inp.value=='') {
        alert("请输入用户帐号!");
        logon.inp.focus();
    }
    if(logon.pasw.value==''){
        alert("请输入登录密码!");
        logon.pasw.focus();
    }else {
        logon.submit();
    }
}

//




// //
// function checkPASS() {
//     var text=document.getElementById('text');
//     var password=document.getElementById('password');
//
//     if(login.)
// }
//
// //
// function () {
//
// }
