let email = document.getElementById("email");
let password = document.querySelector("#pwd_input");
document.getElementById("reg-btn").onclick = register;

function register() {
	if (email.value == "" || password.value == "") {
		alert("Please fill in all fields");
		return;
	}
	document.cookie =
		"email = " +
		email.value +
		";" +
		"expires = Thu,01 Jan 2024 00:00:00 UTC" +
		";path=/";
	document.cookie =
		"password = " +
		password.value +
		";" +
		"expires = Thu,01 Jan 2024 00:00:00 UTC" +
		";path=/";
	window.open("index.html", "_self");
}
