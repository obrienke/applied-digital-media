let total = 0;
let counter = 0;
let number = 0;

do{
    number = prompt("Enter number " + (counter + 1) + " (-1 to quit)");
    total += Number(number);
    counter++;
}while(number != -1);

let output = document.getElementById("average");

if(total != -1){
    output.innerHTML = "<b>Total:</b> " + (++total);
    output.innerHTML += "<br>";
    output.innerHTML += "<b>Average:</b> " + (total/--counter);
    output.innerHTML += "<br>";
    output.innerHTML += "<p>"+counter+" numbers entered</p>";
}else{
    output.innerHTML = "<b>No numbers entered</b>"
}


