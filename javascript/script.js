// // partial case
// var ValueA = 10
// // camelcase
// var valueB = 20
// alert(ValueA + valueB);
function changeColor(){
document.getElementById("sample").style.backgroundColor = "yellow";
}
function getData(){
var x = document.getElementById("firstName").value;
var y = document.getElementById("lastname").value;
document.getElementById("fname").innerHTML = x;
document.getElementById("lname").innerHTML = y;
}
function dropDown(){
var x = document.getElementById("domain").value;
document.getElementById("drop").innerHTML = x;
}
function dataList(){
var x = document.getElementById("field").value;
document.getElementById("data").innerHTML = x;
}