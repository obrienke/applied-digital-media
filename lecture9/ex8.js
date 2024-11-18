let text = prompt("Enter some text");

function vowels(text){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if('aeiou'.includes(text.charAt(i))){
            count++
        }
    }
    return count;
}

document.write("Number of vowels in " + text + " is " + vowels(text));
