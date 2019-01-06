var myButton = document.querySelector("button");
var heading = document.querySelector("h1");

function setName() {
	heading.textContent = "Tervetuloa, " + localStorage.getItem("name");
}

function refresh() {
	var userInput = prompt("What is your name?");
	localStorage.setItem("name", userInput);
	setName();
}

if (localStorage.getItem("name") == "undefined") {
	refresh();
} else {
	setName();
}

myButton.onclick = function() {
	refresh();
}