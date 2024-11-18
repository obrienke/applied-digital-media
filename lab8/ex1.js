function welcome(fn){
    return "Welcome to JavaScript functions " + fn;
}

let fn = prompt("Enter name");
let msg = welcome(fn);
alert(msg);