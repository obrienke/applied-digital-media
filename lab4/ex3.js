let dollar = 1.12;

let output = "";

let euroStr = "euro";

for(let euro = 1; euro <= 20; euro++){
    output += euro + " " + euroStr + " is worth " + (euro * dollar).toFixed(2) + " dollars<br>";
    euroStr = "euros";
}

document.getElementById("output").innerHTML = output;