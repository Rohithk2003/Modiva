const images = [
	"../images/banner.png",
	"../images/banner1.png",
	"../images/banner2.jpg",
];
function changeBg() {
	const header = document.querySelector("#banner");
	const bg = images[Math.floor(Math.random() * images.length)];
	header.src = bg;
}
setInterval(changeBg, 3000);
function change_image(value) {
	const header = document.querySelector("#banner");
	const bg = images[value];
	header.src = bg;
}
