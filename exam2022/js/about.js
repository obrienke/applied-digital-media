addEventListener("load", timer);

function timer(){
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDay();
    let open = false;

    if((day == 1 || day == 2 || day == 3 || day == 5 || day == 6) && (hour >= 9 && hour < 18)){
        open = true;
    }else if(day == 4 && (hour >= 9 && hour < 21)){
        open = true;
    }

    let msg = document.getElementById("message");
    let items = document.getElementsByClassName("list-group-item");

    //open = false;
    if(open){
        msg.textContent = "Store is currently open";
        items[day - 1].style.color = "red";
    }else{
        msg.textContent = "Store is currently closed";
        for(let i = 0; i < items.length; i++){
            items[i].style.color = "";
        }
    }

}