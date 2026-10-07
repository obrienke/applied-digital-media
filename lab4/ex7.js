let number = Math.floor(Math.random() * 100) + 1;
// alert(number);
let guess = -1;
let attempts = 6;

while(true){
    guess = prompt("Attempts left: " + (attempts) + ". Guess a number from 1 to 100");
    if(guess != number){
        attempts--;
        if(attempts == 0){
            break;
        }
        if(guess > number){
            alert("incorrect, try again. Hint: Lower");
        }else{
            alert("incorrect, try again. Hint: Higher");
        }
    }else{
        alert("Good guess. Number is: " + guess);
        break;
    }
}

alert("Game over");
