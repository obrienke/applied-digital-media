function htmlEventHandler(){
    alert("HTML Event Handler");
}

let domEv = document.getElementById("button2");

domEv.onclick = domEventHandler;

function domEventHandler(){
    alert("DOM Event Handler");
}

let evListener = document.getElementById("button3");

evListener.addEventListener("click", eventListenerFunction);

function eventListenerFunction(){
    alert("Event Listener");
}