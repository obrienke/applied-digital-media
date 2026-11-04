let fname = "Kevin"
alert("Hello " + fname);

document.getElementById("greet").textContent = "Hello " + fname

let w = true;
let x = 3;
let y = 2.5;
let z = "some text";

z = 4;

x = prompt("Enter a number");
x = Number(x);

if(x == 1){
    alert("Number is 1")
}else{
    alert("not 1");
}
x = -1;
if(x > 0){
    alert("x is a positive number")
}else if(x < 0){
    alert("x is a negtive number")
}else{
    alert("zero");
}

let output = ""
for(let i = 1; i <= 5; i++){
    output += "Line " + i + "<br>"
}

document.getElementById("loop").innerHTML = output

let paraEls = document.getElementsByClassName("paras");
for(let i = 0; i < paraEls.length; i++){
    paraEls[i].textContent = paraEls[i].textContent + " updated"; 
}