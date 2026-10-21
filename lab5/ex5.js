let items = document.getElementsByTagName("li");

let counter = 0;
while(counter < items.length){
    items[counter].textContent = "line item " + ++counter;
}
