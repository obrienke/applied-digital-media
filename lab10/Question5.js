let numbers = [10, 20, 30, 40, 50];

document.write("Content of numbers array:<br><br>");

/*for(let i = 0; i < numbers.length; i++){
	document.write("element "+(i+1)+": "+numbers[i]+"<br>");
}*/

//let i = 0;
//numbers.forEach(x => document.write("element "+(++i)+": "+x+"<br>")); // produces same result
//numbers.forEach(x => document.write("element "+(i+1)+": "+x+"<br>")); // produces same result

numbers.forEach((val, index) => document.write("element " + (index + 1) + ": " + val + "<br>"));
