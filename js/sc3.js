let canvas1 = document.getElementById("list1");
var x1=canvas1.getContext("2d");
x1.beginPath();
x1.lineWidth = 2;
x1.strokeStyle = 'white';
x1.moveTo(300, 100);
x1.lineTo(100, 150);
x1.stroke();

let canvas2 = document.getElementById("list2");
var x2=canvas2.getContext("2d");
x2.fillRect(50,50,100,100);
x2.beginPath();
x2.moveTo(20,20);
x2.lineTo(70,70);
x2.lineTo(20,70);
x2.closePath();

var canvas=document.getElementById('list3');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5; // толщина линии

ctx.arc(120, 100, 45, 0, Math.PI * 2, false);
ctx.stroke();

let canvas4 = document.getElementById("list4");
var x4=canvas4.getContext("2d");
x4.strokeStyle = 'black';
x4.lineWidth = 3;
x4.strokeRect(60,50,100,100);

var canvas5 = document.getElementById('list5');
var ctx5 = canvas5.getContext('2d');

ctx5.beginPath();
ctx5.moveTo(200, 150);
ctx5.lineTo(10, 150);
ctx5.lineTo(100, 50);
//ctx.lineTo(50, 50); - этот шаг опускаем
ctx5.closePath();
ctx5.stroke();