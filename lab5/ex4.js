let paraEls = document.getElementsByClassName("paras");
let index = 0;
do{
    paraEls[index].textContent = "Paragraph " + ++index;
}while(index < paraEls.length);
