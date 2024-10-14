let paraEl = document.getElementById("para1");

paraEl.innerHTML = "<b>Text Updated</b>";



let paraElements = document.getElementsByClassName("paras");

for(let i = 0; i < paraElements.length; i++){
    paraElements[i].innerHTML = "para updated " + i; 
}

let h1Elements = document.getElementsByTagName("h1");
for(let i = 0; i < h1Elements.length; i++){
    h1Elements[i].innerHTML = "head updated " + i; 
}

document.querySelector("#para1")

document.querySelectorAll(".paras")
