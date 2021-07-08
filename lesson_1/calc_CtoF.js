function convertToFahrenheit() {
	let celsius = document.getElementById("celsDeg").value;
	let fahrenheit = (celsius * 9 / 5) + 32;
	document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + "°F";
}