let arr1 = [];
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;

let output = arr1;
let outEl = document.getElementById("output");
outEl.innerHTML = output;

delete arr1[1];
display(arr1)

arr1.pop();
display(arr1)

arr1.push(1);
display(arr1)

function display(arr){
    output += "<br>" + arr;
    outEl.innerHTML = output;
}

arr1[1] = 3;
display(arr1)

let arr2 = arr1.splice(2);
display(arr2)

let compare = (a,b) => {return a - b;}
arr2.sort(compare);
arr1.sort(compare);
display(arr1);
display(arr2);

let arr3 = arr1.concat(arr2);
display(arr3);

