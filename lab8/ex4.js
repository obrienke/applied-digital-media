function isOdd(number){
    return number % 2 == 1
} 

let live = true;
while(live){
    let number = prompt("Enter a number (-1 to quit)");
    if(number == -1){
        live = false;
    }else{
        if(isOdd(number)){
            alert(number + " is an odd number");
        }else{
            alert(number + " is an even number")
        }   
    }
} 
