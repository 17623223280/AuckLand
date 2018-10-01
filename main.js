/**
 * Created by lly on 2017/6/19.
 */


function proveMe () {

    var prove =document.getElementById('prove');
    console.info(prove);
    if(prove.name.value=='') {
        alert("请输入名字!");
        prove.name.focus();
    }
    if(prove.phone.value==''){
        alert("请输入电话号码!");
        prove.phone.focus();
    }
    if(prove.destination.value==''){
        alert("请输入目的地!");
        prove.destination.focus();
    }
    if(prove.vehicle.value==''){
        alert("请输入交通工具!");
        prove.vehicle.focus();
    }
    if(prove.text.value==''){
        alert("请输入详情!");
        prove.text.focus();
    }
    else {
        prove.submit();
    }
}


