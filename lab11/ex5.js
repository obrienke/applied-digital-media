function addOne(x){
    return x + 1;
}

let number = prompt("Enter number");
number = Number(number);

document.write(number + " + 1 = " + addOne(number));

