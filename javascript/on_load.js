function getName() {
	text = document.cookie;
	text1 = text.split(";");
	text2 = text1[0].split("=")[1];
	return text2;
}
function name_checker(name_) {
	if (name_.length > 6) {
		name_ = name_.substring(0, 6) + "...";
	}
	return name_;
}
function logout() {
	document.cookie =
		"email = " + ";" + "expires = Thu,01 Jan 2022 00:00:00 UTC" + ";path=/";
	document.cookie =
		"password = " + ";" + "expires = Thu,01 Jan 2022 00:00:00 UTC" + ";path=/";
	window.open("index.html", "_self");
}

if (document.cookie != "") {
	document.getElementById("login_buttn").setAttribute("hidden", "false");
	document.getElementById("login-dropdown").setAttribute("hidden", "false");
	document.getElementById("login-dropdown").setAttribute("hidden", "false");
	let text = document.getElementById("login_icon");
	if (text.textContent.includes("Login")) {
		name_ = getName();
		val = text.innerHTML.replace("Login", name_checker(name_));
		text.innerHTML = val;
	}
} else {
	console.log("hi")
	document.getElementById("login_buttn").setAttribute("hidden", "true");
}
