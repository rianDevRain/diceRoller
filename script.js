/** @format */

// Get all the items I need from html
const howManyBtn = document.querySelector("#submitDice");
const numberOfDie = document.querySelector("#numberOfDice");
const totalOfDice = document.querySelector("#totalDie");
const showBtn = document.querySelector("#showAllBtn");
const showArrayList = document.querySelector("#showArray");
const resetButton = document.querySelector("#reset");
const formContainer = document.querySelector("#form");
const howManySides = document.querySelector("#howManySide");
// declare the dieRolls array. Const can be mutated later
const dieRolls = [];
//Event listeners call functions below. Learning arrow functions
// Took me a while to realize that let and const are not hoisted
// Therefore I put the eventlisteners on the bottom after the fucntions

// diceAdder takes the value from input and checks if it is a number
//Then it generates a random number between 1-6 and pushes to array
//Then using reduce method and a add function adds each item of the
//array and displays to html
let diceAdder = () => {
	let howMany = Number(howManySides.value);
	let dieNumber = Number(numberOfDie.value);
	if (isNaN(dieNumber) || dieNumber == '', isNaN(howMany) || howMany == '') {
		totalOfDice.innerHTML = `Please enter a number`;
	} else {
		let count = 0;
		while (count < dieNumber) {
			dieRolls.push(Math.floor(Math.random() * howMany) + 1);
			count++;
		}
		// Loops through each item in an array and adds each item to the total.
		//I changed to an arrow function all on one line.
		//Explaned below above the add function
		let sum = dieRolls.reduce((total, itemInArray) => total + itemInArray);
		//The other way from the source showed this:
		// const = dieRolls.reduce(add);
		totalOfDice.innerHTML = `The total dice is: ${sum}`;
	}
};
//This function uses the map() method to loop through each item and display
//in html each die in an ordered list. Each loop it is writing the html
//For each item in the array I understand there are
let arrayDisplay = () => {
	showArrayList.innerHTML =
		"<ol>" +
		dieRolls.map(function (number) {
				return "<li>" + number + "</li>";
			})
			.join("") +
		"</ol>";
};
//Tied to the reset button this will pop each item from the array
//Then resets all elements in html except for the input doesnt reset
//See readme
let resetLoop = () => {
	dieRolls = [];
	// while (dieRolls.length > 0) {
	// 	dieRolls.pop();
	// }
	totalOfDice.innerHTML = `Enter a new Number`;
	formContainer.reset();
	arrayDisplay();
};

resetButton.addEventListener("click", resetLoop);
howManyBtn.addEventListener("click", diceAdder);
showBtn.addEventListener("click", arrayDisplay);
// Function for the reduce() method I got from source. Found out how to put this
// directly into the reduce() method using =>. Basically it is taking each item b and
// adding it to the total a. It does this for each item so it loops same amount
// of times as there are items in array

// Directly from source:

// const add = (a, b) => a + b;

// Same as if I did this:

// function add(total, item) {
//   return total + item;
// }
