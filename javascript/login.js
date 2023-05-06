if (document.cookie != "") {
	window.open("index.html", "_self");
}
let email = document.getElementById("email");
let password = document.getElementById("password");
let data = [email.value, password.value];
function return_email(value) {
	val = value.split("=")[1];
	return val;
}
function check_cookie_valid() {
	cookie = document.cookie;
	let ca = cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		if (
			return_email(ca[0]) == email.value &&
			return_email(ca[1]) == password.value
		) {
			window.open("index.html", "_self");
			return true;
		} else {
			alert("Invalid email or password");
		}
	}
}
