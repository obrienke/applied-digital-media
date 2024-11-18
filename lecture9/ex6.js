
function getLottoNumbers(){
    document.getElementById("output").innerHTML = "Numbers for next draw for one line:"; 
    let numberOfNumbersPerLine = document.getElementById("numbers").value;
    let numberRange = document.getElementById("range").value;
    let lines = document.getElementById("lines").value;
    for(let i = 1; i <= lines; i++){
        let numbers = generateNumbers(numberOfNumbersPerLine, numberRange); 
        document.getElementById("output").innerHTML += "<br><br> Line " + i + ": " + numbers; 
    }
    document.getElementById("odds").innerHTML = "Odds of have a winning line are " + getOdds(numberOfNumbersPerLine, numberRange) + " to 1";

}

function generateNumbers(x, y){
    let lottoNumbers = [];
    for(let i = 1; i <= x; i++){
        let number = Math.ceil(Math.random() * y);
        if(lottoNumbers.indexOf(number) == -1){ //indexOf() - checks if number already chosen.
            lottoNumbers.push(number); 
        }else{
            i--; // number chosen already, so reset and try again
        }
    }
    return lottoNumbers.sort(function(a, b){return a - b});
}

function getOdds(numbers, range){
    let dividend = 1;
    let divisor = 1;
    for(let i = 1, j = 0; i <= numbers; i++, j++){
        divisor = divisor * i;
        dividend = dividend * (range - j);
    }
    return dividend / divisor;
}