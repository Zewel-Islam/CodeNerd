// function plusFun() {
//   let countElement = document.getElementById("countElement");
//   let countNumber = parseInt(countElement.innerText);
//   countNumber = countNumber + 1;
//   countElement.innerText = countNumber;
// }
// function minusFun() {
//   let countElement = document.getElementById("countElement");
//   let countNumber = parseInt(countElement.innerText);
//   countNumber = countNumber - 1;
//   countElement.innerText = countNumber;
// }

let countElement = document.getElementById("countElement");
let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");

let currentNumber = 0;

function updateNumber() {
  countElement.textContent = currentNumber;
}

increment.addEventListener("click", function () {
  currentNumber = currentNumber + 1;
  updateNumber();
});
decrement.addEventListener("click", function () {
  if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    updateNumber();
  }
});
