
let array = ["Book", "Computer", "Shoe", "Chair"];

let search = prompt("Search for");

let index = array.indexOf(search);

if(index > -1){
	document.write("Match found for "+search+" at index "+index);
}else{
	alert("No match found for "+search);
}