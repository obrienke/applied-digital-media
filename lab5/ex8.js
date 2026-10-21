let numbers = document.querySelector("#table1");
// let numbers = document.getElementById("table1")
let output = "<table>";
output += "<tr><th>number</th><th>square</th><th>cube</th></tr>";

for(let i = 1; i <= 10; i++){
    output += "<tr><td>"+i+"</td><td>"+Math.pow(i,2)+"</td><td>"+Math.pow(i,3)+"</td></tr>";
}

output += "</table>"

numbers.innerHTML = output