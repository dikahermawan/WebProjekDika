//rotasi2
var canvas6 = document.getElementById('Canvas6');
canvas6.width = 400;
canvas6.height = 300;
var ctx6 = canvas6.getContext('2d');

let panjangPP = 150;
let lebarPP = 75;

ctx6.translate(canvas6.width / 2, canvas6.height / 2);
ctx6.fillStyle = 'grey';
ctx6.fillRect(0, 0, panjangPP, lebarPP);
ctx6.rotate(Math.PI / 6);
ctx6.fillStyle = 'lightblue';
ctx6.fillRect(0, 0, panjangPP, lebarPP);

//rotasi 2
var canvas7 = document.getElementById('Canvas7');
canvas7.width = 400;
canvas7.height = 200;
var ctx7 = canvas7.getContext('2d');

let panjangPp = 150;
let lebarPp = 75;

ctx7.translate(canvas7.width / 2, canvas7.height / 2);
ctx7.fillStyle = 'grey';
ctx7.fillRect(0, 0, panjangPp, lebarPp);
ctx7.rotate(Math.PI / -6);
ctx7.fillStyle = 'lightblue';
ctx7.fillRect(0, 0, panjangPp, lebarPp);


