function validate(){
    let pass = true;
    if(document.getElementById("first").value.length == 0){
        alert("First name must be entered");
        pass = false;
    }
    if(document.getElementById("last").value.length == 0){
        alert("Surname must be entered");
        pass = false;
    }
    if(document.getElementById("msg").value.length == 0){
        alert("A message must be entered");
        pass = false;
    }
    let emailAddress = document.getElementById("email").value;
    if(emailAddress.indexOf("@") == -1 || emailAddress.indexOf(".") == -1){
        alert("Email address must contain a . and a @");
        pass = false;
    }
    if(pass){
        alert("Form Validation Complete");
    }
    return pass;
}