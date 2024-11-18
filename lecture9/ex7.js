function factorial(x){
    let product = 1;
    for(let i = x; i > 1; i--){
        product *= i; 
    }
    return product;
}

let number = prompt("Enter number");
document.write(number + " factorial is " + factorial(number));
