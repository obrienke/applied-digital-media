function singleDigits(number){
    let output = "";
    for(let i = 0; i < number.length - 1; i++){
        output = output + number.charAt(i) + ", ";
    }
    output += number.charAt(number.length - 1);
    return output;
}

let number = prompt("Enter a number");
alert(singleDigits(number));
