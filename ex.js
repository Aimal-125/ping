let input = document.getElementById("email");
let button = document.getElementById("btn");
let errortext = document.getElementById("errortxt");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

input.style.border = "1px solid hsl(223, 100%, 88%)";

function validateForm() {
	if(input.value == "") {
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Whoops! It looks like you forgot to add your email";
		input.style.border = "1px solid hsl(354, 100%, 66%)";
		errortext.style.color = "hsl(354, 100%, 66%)"
	}
	if(input.value.match(regex)) {
		errortext.style.visibility = "visible";
		errortext.innerHTML = "You are good to <b>GO!</b>";
		errortext.style.color = "green";
		input.style.border = "1px solid hsl(223, 100%, 88%)";
	}
	if(!(input.value.match(regex)) && input.value != "") {
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Please provide a valid email address";
		errortext.style.color = "hsl(354, 100%, 66%)"
		input.style.border = "1px solid hsl(354, 100%, 66%)";
	}
}

button.addEventListener("click", validateForm);