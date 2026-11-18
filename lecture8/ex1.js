function grades(result){
    let grade = "";
    if(result > 100 || result < 0){
        grade = "invalid result";
    }else if(result >= 85){
        grade = "Merit";
    }else if(result >= 40){
        grade = "Pass";
    }else{
        grade = "Fail"
    }
    return grade;
}

alert(grades(30))

function sum(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

alert(sum(5, 6, 7, 8));


