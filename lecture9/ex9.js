function fibonacci(){
    let number = 0;
    let last = 0;
    let next = 1;
    let output = last + ", " + next + ", ";
    for(let i = 1; i <= 7; i++){
        number = next + last;
        output += number + ", ";
        last = next;
        next = number;
    }
    output += next + last;
    alert(output);
}

fibonacci();
