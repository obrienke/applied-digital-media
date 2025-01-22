/*code for exercise 5*/

function add(){
  let x = Number(document.getElementById("first").value) + Number(document.getElementById("second").value);
  document.getElementById("answer").textContent = x;
}

function key(){
  document.getElementById("key").innerHTML = event.key;
  if(event.key == "r"){
document.body.style.backgroundColor = "red"; 
  }else if (event.key == "g"){
document.body.style.backgroundColor = "green"; 
  }else if (event.key == "b"){
document.body.style.backgroundColor = "blue"; 
  }else{
document.body.style.backgroundColor = "white";  
  }   
}
