function greeting(){
    let name = prompt("Enter name");
    document.getElementById("greet").textContent = "Hello " + name;
}

greeting();

let color = prompt("Enter favourite Colour");

function printColor(color){
    document.getElementById("color").textContent = color;
}

printColor(color)

let length = prompt("Enter length of rectangle")
let width = prompt("Enter width of rectangle")

function area(x, y){
    document.getElementById("area").textContent = "Area: " + (x * y);
}

area(length, width)

let rows = prompt("Enter number of rows of triangle");

function stars(rows){
    let count = 0;
    for(let i= 1; i <= rows; i++){
        for(let j = 1; j <= i; j++){
            count++;
        }
    }
    return count;
}

let numberOfStars = stars(rows); 

document.getElementById("tristars").textContent = "Stars: " + numberOfStars;

let addition = (first, second) => {
    return first + second;
} 

document.getElementById("add").textContent = "Result: " + addition(3, 4);