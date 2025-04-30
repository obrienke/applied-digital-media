function timer(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let open = false;
    

    if((day == 1 || day == 2 || day == 3) && (hour >= 9 && hour < 17)){
        open = true;
    }else if((day == 4 || day == 5) && (hour >= 9 && hour < 21)){
        open = true;
    }else if(day == 5 && (hour >= 12 && hour < 19)){
        open = true;
    }

    if(open){
        document.getElementById("message").textContent = "This store is currently open"
    }
}

function randomOffers() {
    var imgLocation = "img/";
    var imgList = ["paris.jpg","tallinn.jpg","lisbon.jpg","copenhagen.jpg","budapest.jpg","rome.jpg"];  
    var labelList = ["Paris, France","Tallinn, Estonia","Lisbon, Portugal","Copenhagen, Denmark","Budapest, Hungary","Rome, Italy"];
    
    var randomIndex1 = parseInt(Math.random()*imgList.length);  
    document.getElementById("soimage1").src = imgLocation + imgList.splice(randomIndex1,1);
    document.getElementById("sotext1").innerHTML = labelList.splice(randomIndex1,1);
    
    var randomIndex2 = parseInt(Math.random()*imgList.length);  
    document.getElementById("soimage2").src = imgLocation + imgList.splice(randomIndex2,1);
    document.getElementById("sotext2").innerHTML = labelList.splice(randomIndex2,1);
  }