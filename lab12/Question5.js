let numbers = [2, 3, 4, 5];

function printArray(array){
    array.forEach((val) => {
        document.write(val+ "<br>");
    });    
}

document.write("<h3>Values in the array are:</h3>")

printArray(numbers);

function cube(number){
    return number * number * number;
}

let updated = numbers.map(cube);

document.write("<h3>Values in the new array are:</h3>")

printArray(updated);
