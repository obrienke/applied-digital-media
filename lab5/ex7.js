let data = document.querySelectorAll("td");

// alert(data[3].textContent);

for(let i = 0; i < data.length; i += 2){
    data[i].style.color = "rgb(124, 193, 196)";    
}
