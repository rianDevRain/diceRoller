let howManyBtn = document.querySelector("#submitDice");
let numberOfDie = document.querySelector("#numberOfDice");
let totalOfDice = document.querySelector("#totalDie");
let showBtn = document.querySelector("#showAllBtn");
let showArrayList = document.querySelector("#showArray");

let dieRolls = [];

howManyBtn.addEventListener("click", function() {
  let dieNumber = Number(numberOfDie.value);
  if (isNaN(dieNumber)) {
    totalOfDice.innerHTML = `Please enter a number`;
  } else {
    let count = 0;
    while (count < dieNumber) {
      dieRolls.push(Math.floor(Math.random() * 6));
      count++;
      // debugger;
      const sum = dieRolls.reduce(add);
      totalOfDice.innerHTML = `The total of all dice is: ${sum}`;
    }
  }
});

showBtn.addEventListener("click", function () {
  showArrayList.innerHTML =
    "<ol>" + dieRolls.map(function (number) {
        return "<li>" + number + "</li>";
      })
      .join("") +
    "</ol>";
});

const add = (a, b) => a + b;
