let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);

let result = document.getElementById("result");

result.innerHTML = "<pre>"+dice1+"   "+dice2+"</pre>";

document.getElementById("image1").setAttribute("src", "img/dice"+dice1+".png");
document.getElementById("image2").setAttribute("src", "img/dice"+dice2+".png");

if(dice1 == 1 && dice2 == 1){
    document.getElementById("se").textContent = "Snake Eyes";
    document.body.style.backgroundColor = "red";
}