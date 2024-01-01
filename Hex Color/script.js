// function generateRandomColor() {
//   let output = "0123456789ABCDEF";
//   let color = "#";
//   for (i = 0; i < 6; i++) {
//     color = color + output[Math.floor(Math.random() * 16)];
//   }
//   document.getElementById("colorDisplay").textContent = color;
//   document.body.style.backgroundColor = color;
// }

document
  .getElementById("generateColorBtn")
  .addEventListener("click", function () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("colorDisplay").textContent = color;
    document.body.style.backgroundColor = color;
  });
