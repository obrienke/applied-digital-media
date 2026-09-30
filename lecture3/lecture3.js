let t = new Date();

document.getElementById("clock").textContent = new Date().toLocaleTimeString('en-GB');

setInterval(setTime, 1000);

function setTime(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // apply padding. eg. if seconds is 1, then don't want 10:23:1, want 10:23:01
    // alternatively, just toLocaleTimeString() - see line 3 above, which gives this format - hh:mi:ss - padded zeros included when required.
    if(s < 10){
        s = "0" + s;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(h < 10){
        h = "0" + h;
    }

    document.getElementById("clock").textContent = h + ":" + m + ":" + s;
}