// Prompt the user to enter a number and store it in variable x
let x = prompt("Enter number");

// Convert the user input from string to a number
x = Number(x);

// Initialize a counter variable
let count = 0;

// Check the value of x and assign a value to count based on conditions
if (x < 10) {
    count = 2; // If x is less than 10, set count to 2
} else if (x > 20) {
    count = 4; // If x is greater than 20, set count to 4
} else {
    count = 3; // If x is between 10 and 20 (inclusive), set count to 3
}

// Loop from 1 to the value of count, writing "example 1" to the document on each iteration
for (let i = 1; i <= count; i++) {
    document.write("<br> example 1");
}

// Define an array of numbers
let numbers = [3, 6, 9, 12];

// Define a function to triple a number
function treble(x) {
    return x * 3; // Returns the input value multiplied by 3
}

// Add a line break before the next output
document.write("<br><br>");

// Use forEach to iterate over the array and apply the treble function to each element
numbers.forEach((val, index) => {
    // Write the tripled value of the current element to the document
    document.write(treble(val) + "<br>");
    // Update the array with the new tripled values
    numbers[index] = treble(val);
});

// Add a line break
document.write("<br>");

// Write the updated array (with tripled values) to the document
document.write(numbers + "<br><br>");

// Use the map method to create a new array with each element tripled again
let updated = numbers.map(treble);

// Write the new array to the document
document.write(updated + "<br>");
