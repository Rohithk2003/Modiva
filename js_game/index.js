var inputs = ["x", "o"],
	first_input = 0,
	pressed_buttons = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	],
	count = 0,
	turn_indi = document.getElementById("turn-indicator");

let users = [
	"player <span style='color:red'>X</span>",
	"player <span style='color:red'>0</span>",
];
turn_indi.innerHTML = users[first_input] + "'s turn";

function reset() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			pressed_buttons[i][j] = 0;
		}
	}
	for (let _ = 1; _ < 10; _++) {
		let btn = document.getElementById("btn" + _);
		btn.innerHTML = "";
		btn.disabled = false;
	}
	count = 0;
	first_input = 0;
	document.getElementById("results").innerHTML = "";
	turn_indi.innerHTML = users[first_input] + "'s turn";
}
function check() {
	let won = false;
	let sum1 = 0,
		sum2 = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			sum1 += pressed_buttons[i][j];
			sum2 += pressed_buttons[j][i];
		}

		if (sum1 == 3 || sum2 == 3 || sum1 == 4 * 3 || sum2 == 4 * 3) {
			won = true;
			return won;
		}

		sum1 = 0;
		sum2 = 0;
	}
	sum1 = pressed_buttons[0][0] + pressed_buttons[1][1] + pressed_buttons[2][2];
	sum2 = pressed_buttons[0][2] + pressed_buttons[1][1] + pressed_buttons[2][0];

	if (sum1 == 3 || sum2 == 3 || sum1 == 4 * 3 || sum2 == 4 * 3) {
		won = true;
		return won;
	}
	return won;
}

function cl(id, row, column) {
	let btn = document.getElementById(id);
	btn.innerHTML = inputs[first_input];
	btn.disabled = true;
	count++;
	if (first_input + 1 > 1) {
		first_input = 0;
		pressed_buttons[row][column] = 4;
		btn.style.color = "red";
		turn_indi.innerHTML = users[first_input] + "'s turn";
	} else {
		first_input = 1;
		pressed_buttons[row][column] = 1;
		btn.style.color = "blue";
		turn_indi.innerHTML = users[first_input] + "'s turn";
	}
	if (count > 4) {
		if (check() == true) {
			if (first_input == 0) {
				first_input = 1;
			} else {
				first_input = 0;
			}
			document.getElementById("results").innerHTML =
				users[first_input] + " won!";
			for (let _ = 1; _ < 10; _++) {
				document.getElementById("btn" + _).disabled = true;
			}
		}
		if (count == 9 && check() == false) {
			let result_text = document.getElementById("results");
			result_text.innerHTML = "Draw!";
			result_text.style.paddingRight = "18px";
		}
	}
}
