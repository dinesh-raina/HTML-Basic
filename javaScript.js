// // partial case
// var ValueA = 10
// // camelcase
// var valueB = 20
// alert(ValueA + valueB);
function changeColor(){
document.getElementById("sample").style.backgroundColor = "yellow";
}
//function getData(){
//var x = document.getElementById("firstName").value;
//var y = document.getElementById("lastname").value;
//document.getElementById("fname").innerHTML = x;
//document.getElementById("lname").innerHTML = y;
//}
//function dropDown(){
//var x = document.getElementById("domain").value;
//document.getElementById("drop").innerHTML = x;
//}
//function dataList(){
//var x = document.getElementById("field").value;
//document.getElementById("data").innerHTML = x;
//}
//function radio(){
//var x = document.getElementsByName("web");
//for(i = 0; i < x.length; i++) {
//if(x[i].checked){
//document.getElementById("course").innerHTML= x[i].value;
//}
//}
//}

function checkBox(){
var x = document.getElementsByClassName("messageCheckbox");
for(i=0; i < x.length; i++){
if(x[i].checked){
document.getElementById("check").innerHTML = x[i].value;
}
}
}

function myLocation(){
var x = document.getElementById("location");
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(showPosition);
}else{
x.innerHTML = "Location Failed"
}
}
function showPosition(position){
x.innerHTML = "Longitude:" + position.coords.longitude + "Latitude: " + position.coords.latitude
}

function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function lStorage(){
if (typeof(Storage !== "undefined"){
if(localStorage.clickcount){
localStorage.clickcount = Number(localStorage.clickcount)+1;
}else{
localStorage.clickcount = 1;
}
 document.getElementById("click").innerHTML = "You have clicked" + localStorage.clickcount + "times";
}
else {
    document.getElementById("click").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function sStorage(){
if (typeof(Storage !== "undefined"){
if( sessionStorage.clickcount){
 sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
}else{
 sessionStorage.clickcount = 1;
}
 document.getElementById("tap").innerHTML = "You have clicked" + localStorage.clickcount + "times";
}
else {
    document.getElementById("tap").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function hi(){
alert("Hey Hii.....");
}
function webWorker(){
 var i = new Worker("/javascript/calculate.js");
 i.onmessage = function(event){
 alert("output is: " + event.data);
 }
 }
}
