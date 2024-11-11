function getNumbers(){
    let rangeOfNumbers = document.getElementById("numbers").value;
    let numberOfNumbers = document.getElementById("many").value;
    let theNums = generateLottoNumbers(rangeOfNumbers, numberOfNumbers);
    document.getElementById("line").innerHTML = theNums;
    return false;
}

function generateLottoNumbers(x, y){
    let lottoNumbers = [];
    for(let i = 1; i <= y; i++){
        let num = Math.ceil(Math.random() * x);
        if(lottoNumbers.indexOf(num) == -1){
            lottoNumbers.push(num);
        }else{
            i--;
        }
    }
    lottoNumbers.sort(function(a,b){return a - b;});
    return lottoNumbers;
}

