function generateNumbers(x, y){
    let lottoNumbers = [];
    for(let i = 1; i <= x; i++){
        let number = Math.ceil(Math.random() * y);
        if(lottoNumbers.indexOf(number) == -1){
            lottoNumbers.push(number);
        }else{
            i--;
        }
        
    }
    return lottoNumbers;
}

function getNumbers(){
    let numbers = document.getElementById("numbers").value;
    let range = document.getElementById("range").value;
    let amount = document.getElementById("amount").value;
    let lottoNumbers = "Line 1: " + generateNumbers(numbers, range) + "<br>";
    for(let i = 1; i < amount; i++){
        lottoNumbers += "Line " + (i + 1) + ": " + generateNumbers(numbers, range) + "<br>";
    }
    document.getElementById("line").innerHTML = lottoNumbers;
}

// let generateNumbers = (x, y) => {
//     let lottoNumbers = [];
//     for(let i = 1; i <= x; i++){
//         let number = Math.ceil(Math.random() * y);
//         if(lottoNumbers.indexOf(number) == -1){
//             lottoNumbers.push(number);
//         }else{
//             i--;
//         }
        
//     }
//     alert(lottoNumbers);
// }