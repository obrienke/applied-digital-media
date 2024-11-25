console.log("Arrays");

let students = ["John", "Mary", "Sam"]
let grades = [41, 92, 67];

function printGrades(){
    console.log("Grades: ");
    students.forEach((element, index) => 
        console.log(element + " got a score of " + grades[index]));    
}

printGrades();

students.push("Jim");
grades.push(56);

printGrades();

students.pop()
grades.pop()

printGrades();

let sum = grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
console.log("sum total of grades: " +sum);

console.log("average grade: " + (sum / grades.length).toFixed(2));


let number = 0;
let valid = 0;

while(valid == 0){
    number = prompt("Enter a number");
    if(!isNaN(number)){
        valid = 1;
    }    
}

console.log("Number entered is " + number);