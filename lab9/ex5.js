let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let outEl = document.getElementById("output");
let output = "";
for(let i = 0; i < numbers.length; i++){
    output += "element " + (i + 1) + ": " + numbers[i] + "<br>";
}

// outEl.innerHTML = output;

output += "<br>For each<br>";

numbers.forEach((e, i) => output += "element " + (i + 1) + ": " + e + "<br>");

outEl.innerHTML = output;