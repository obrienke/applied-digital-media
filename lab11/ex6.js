function correctMonth(x){
    let result = true;
    if(x.toUpperCase() != "DECEMBER"){
        result = false;
    }
    return result;
}

let month = prompt("Enter month");

document.write("Is it december? " + correctMonth(month));
