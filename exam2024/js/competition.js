function quiz(){
	let ans1 = document.getElementsByClassName("question1");
	let ans2 = document.getElementsByClassName("question2");
	alert("Answer to question 1 is Koalas and answer to question 2 is Purple.")	
	if(ans1[2].checked && ans2[0].checked){
		// answered both correctly
		alert("Well done. You answered both questions correctly. Use the following code to receive a 20% discount whenever you visit the Galway Zoo: \n\nGZ20");
	}else if(ans1[2].checked || ans2[0].checked){
		// answered one correctly
		alert("Well done. You answered one question correctly. Use the following code to receive a 10% discount whenever you visit the Galway Zoo: \n\nGZ10");
	}else{
		// answered none correctly
		alert("Hard Luck. You answered no questions correctly. However, we would love to see you at Galway Zoo, so please use the following code to receive a 5% discount whenever you visit the Galway Zoo: \n\nGZ05");
	}
}