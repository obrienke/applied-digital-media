// Exercises 5 and 6 combined
let number = Math.floor(Math.random() * 10) + 1;
let guess = -1;

while(true){
    guess = prompt("Guess a number from 1 to 10");
    if(guess != number){
        alert("incorrect, try again")
    }else{
        break;
    }
}

alert("Good guess. Number is " + number);
