let first = 1;
let flag = true;
while(flag){
    first = prompt("Enter first number");
    if(first <= 20){
        flag = false;
    }else{
        alert("First number cannot be greater than 20. Please try again.");
    }
}

let table;
let x = 0; // initializer for the while loop
// add table with first row for headings
table = "<table border=\"1\">";
table += "<tr>";
table += "<th>number</th><th>square</th><th>cube</th>";
table += "</tr>"

let max = +first + 12;
while (first < max){ //can simply add extra rows or reduce rows by changing 10 to another value
  table += "<tr>";
  table += "<td>"+first+"</td><td>"+Math.pow(first,2)+"</td><td>"+Math.pow(first,3)+"</td>";
  table += "</tr>";
  first++;
}

table += "</table>";

document.getElementById("table1").innerHTML += "<h1>Assessment - Question 6</h1>" + table;
