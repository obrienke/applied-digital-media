let btn1 = 0;
let btn2 = 0;
let btn3 = 0;

document.getElementById("counter-btn1").addEventListener("click", button1);

function button1(){
	btn1++;
	document.getElementById("counter-display1").innerHTML = btn1 + " clicks";
}

document.getElementById("counter-btn2").addEventListener("click", button2);

function button2(){
	btn2++;
	document.getElementById("counter-display2").innerHTML = btn2 + " clicks";
}

document.getElementById("counter-btn3").addEventListener("click", button3);

function button3(){
	btn3++;
	document.getElementById("counter-display3").innerHTML = btn3 + " clicks";
}
