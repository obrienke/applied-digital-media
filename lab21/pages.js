function captureDetails(){
    let name = document.getElementById("name").value;
    let answer = document.getElementById("dublin").checked;

    sessionStorage.name = name;
    sessionStorage.answer = answer;
}

function checkAnswer(){
    if(sessionStorage.answer == "true"){
        document.getElementById("output").textContent = "Well done " + sessionStorage.name +
                                                        ". You answered correctly.";
    }else{
        document.getElementById("output").textContent = "Hard luck " + sessionStorage.name +
                                                        ". You answered incorrectly.";
    }
}