function add(item){
	if(item == 1){
		sessionStorage.qty1 = document.getElementById("qty1").value;	
	}else{
		sessionStorage.qty2 = document.getElementById("qty2").value;
	}
	alert("Item added to cart");
}

function cart(){
	document.getElementById("qty1").textContent = sessionStorage.qty1;
	document.getElementById("qty2").textContent = sessionStorage.qty2;
	document.getElementById("total1").textContent = "€"+sessionStorage.qty1 * 25;
	document.getElementById("total2").textContent = "€"+sessionStorage.qty2 * 25;	
	document.getElementById("total").textContent = "€"+((sessionStorage.qty1 * 25) + (sessionStorage.qty2 * 25));
}
