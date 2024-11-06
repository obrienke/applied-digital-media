//alert("functions");

function function1(){
    document.write("function 1<br><br>");
}

function1();
function1();

function function2(param1, param2){
    document.write("value 1 is " + param1 + ". Value 2 is " +param2 + "<br><br>");
}

let param1 = 200
function2(param1, "1000");


function function3(param1, param2){
    let sum = param1 + param2;
    return sum;
}

let result = function3(200, 1000);

document.write("result is " + result);

