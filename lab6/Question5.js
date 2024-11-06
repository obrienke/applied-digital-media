let maxVal;
let flag = 0;
while(flag == 0){
    maxVal = prompt("Enter a max value for the guessing game range. Value entered must be greater than 50.");
    if(maxVal > 50){
        flag = 1;
    }else{
        alert("Value entered must be greater than 50. Please try again.");
    }
}

let number = Math.ceil(Math.random() * maxVal); 

let maxGuesses = 3;

let ans = prompt("What is the capital city of Ireland?");
if(ans.toUpperCase() == "DUBLIN"){
    alert("correct");
    maxGuesses = 6;
}else{
    alert("incorrect");
}

// Variable to store the user's guess, initialized to 0
let guess = 0;

// Counter to keep track of the number of attempts, starting at 1
let counter = 1;

// Loop to allow the user up to 6 attempts to guess the number
while(counter <= maxGuesses) {

    /* Prompt the user to enter their guess, storing it in the 'guess' variable
	   Note the '+' operator before the prompt. 
	   This ensures the string input value e.g. "3" is converted into a number value e.g. 3.
	 */
    guess = +prompt("Guess " + counter + ": Please enter a value between 1 to " + maxVal);

    // Check if the guess is equal to the randomly generated number
    if(guess == number) {
        // If the guess is correct, congratulate the user and exit the loop
        alert("Good Guess. It was " + number);
        counter = 7;  // Setting counter to 7 ensures the loop ends after a correct guess
    } else {
        // If the guess is incorrect and it's not the last attempt
        if(counter != maxGuesses) {
            // If the guess is higher than the random number, give a hint
            if(guess > number) {
                alert("Sorry, wrong number. Try again. Hint: It is lower than your current guess");
            // If the guess is lower, give a different hint
            } else {
                alert("Sorry, wrong number. Try again. Hint: It is higher than your current guess");
            }
        }else{
            alert("Sorry, wrong number. That was your final guess");
        }
        // Increment the counter for the next attempt
        counter++;
    }
}

// After 6 incorrect attempts or a correct guess, alert that the game is over
alert("game over");
