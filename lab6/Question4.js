let strUpdate = " updated";

document.getElementById("heading2").textContent += strUpdate;

let pEls = document.getElementsByClassName("23")
for(let i = 0; i < pEls.length; i++){
    pEls[i].textContent += strUpdate;
}


let h3Els = document.getElementsByTagName("h3");
for(let i = 0; i < h3Els.length; i++){
    h3Els[i].textContent += strUpdate;
}
