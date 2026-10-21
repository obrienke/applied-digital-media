document.getElementById("Lecture5").textContent = "Lecture 5";

let paras = document.getElementsByClassName("odd");

let value = 1;

setText(paras, "Paragraph", 2)

paras = document.getElementsByClassName("even");
value = 2;

setText(paras, "Paragraph", 2)


function setText(paras, text, val){
    for(let i = 0; i < paras.length; i++){
        paras[i].textContent = text + " " + value;
        value += val;
    }   
}

let divs = document.getElementsByTagName("div")

value = 1;

setText(divs, "Div", 1)

let paras2 = document.querySelectorAll(".more");
paras2[0].textContent = "More Paragraphs"
paras2[1].textContent = "More Paragraphs"

imgEl = document.querySelector("#dom_image");
imgEl.setAttribute("src", "img/dom.png")
