let divEl = document.getElementById("headings");
for(let i = 1; i <= 6; i++){
    divEl.innerHTML += "<h"+i+">Heading "+i+"</h"+i+">";
}