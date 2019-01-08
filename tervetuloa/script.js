var myButton = document.querySelector("button");
var heading = document.querySelector("h1");

function setName() {
	heading.textContent = "Tervetuloa, " + localStorage.getItem("nimi");
}

function refresh() {
	var userInput = prompt("Anna käyttäjänimi:");
	localStorage.setItem("nimi", userInput);
	setName();
}

if (!localStorage.getItem("nimi")) {
	refresh();
} else {
	setName();
}

myButton.onclick = function() {
	refresh();
}
