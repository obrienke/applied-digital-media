let someText = `Some text
Some more text      more text`;

alert(someText);

let age = 23;
let firstName = "John";

let msg = `hello ${firstName} you are ${age} years old`;

alert(msg);

let array1 = [10, 20, 50];

function doubleUp(x){
    return x * 2;
}

let array2 = array1.map((num) => {return num * 2});

alert(array2);

let array3 = array2.map(doubleUp);

alert(array3);