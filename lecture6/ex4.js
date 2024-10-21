let pEl = document.getElementById("para")
pEl.innerHTML = "para 1";

let hEls = document.getElementsByClassName("heads");

hEls[0].innerHTML = "head 1"; 
hEls[1].innerHTML = "head 11"; 
hEls[2].innerHTML = "head 111"; 

for(let i = 0; i < hEls.length; i++){
    hEls[i].innerHTML = "update " + (i + 1);
}

/*let h = document.getElementsByTagName("p");
for(let i = 0; i < h.length; i++){
    h[i].innerHTML = "update " + (i + 1);
}*/


