function validLogin(username){
    if(username == "adm"){
        return true;
    }else{
        return false;
    }
}

let username = prompt("Enter username");

alert("Valid username: " + validLogin(username));
