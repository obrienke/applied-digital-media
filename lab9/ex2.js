let array = ["Book", "Computer", "Shoe", "Chair"];

let item = prompt("Enter item");

let outEl = document.getElementById("output");
if(array.indexOf(item) >= 0){
    outEl.textContent = "Found";
}else{
    outEl.textContent = "Not Found";
}