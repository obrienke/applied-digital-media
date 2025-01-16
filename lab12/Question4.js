function hoursToSeconds(hours){
    return hours * 3600;
}

let hours = prompt("Enter number of hours");
let hourString = "hours";

if(hours == 1){
    hourString = "hour"
}

alert(hours + " " + hourString + " is " + hoursToSeconds(hours) + " seconds");

function minutesToHoursAndMinutes(minutes){
    let hr = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let hourString = "hours";
    let minutesString = "minutes";
    if(mins == 1){
        minutesString = "minute";
    }
    if(hr == 1){
        hourString = "hour";
    }
    return hr + " " + hourString + " and " + mins + " " + minutesString; 
}

let minutes = prompt("Enter number of minutes");
if(minutes == 1){
    alert(minutes + " minute is " + minutesToHoursAndMinutes(minutes));
}else{
    alert(minutes + " minutes is " + minutesToHoursAndMinutes(minutes));
}
