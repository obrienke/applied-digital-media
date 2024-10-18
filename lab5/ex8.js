let table;
let x = 0; // initializer for the while loop
// add table with first row for headings
table = "<table>";
table += "<tr>";
table += "<th>number</th><th>square</th><th>cube</th>";
table += "</tr>"

while (x < 10){ //can simply add extra rows or reduce rows by changing 10 to another value
  table += "<tr>";
  table += "<td>"+(++x)+"</td><td>"+Math.pow(x,2)+"</td><td>"+Math.pow(x,3)+"</td>";
  table += "</tr>";
}

table += "</table>";

document.getElementById("table1").innerHTML += "<h1>Lab 5 - Question 8</h1>" + table;
