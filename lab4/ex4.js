let number = Math.floor(Math.random() * 10) + 1;

if(number >= 1 && number <= 10){
    alert(number);
}else{
    alert("invalid number"); // should never see this
}