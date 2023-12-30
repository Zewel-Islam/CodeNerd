// document.getElementById("convertButton").addEventListener("click", function () {
//   let celsiusInputValue = document.getElementById("celsiusInput").value;
//   let fahrenheitResult = (celsiusInputValue * 9) / 5 + 32;
//   document.getElementById("result").innerText = fahrenheitResult.toFixed(2);
// });

function temperatureResult() {
  let celsiusInputValue = document.getElementById("celsiusInput").value;
  let convertButton = document.getElementById("convertButton");
  let fahrenheitResult = (celsiusInputValue * 9) / 5 + 32;
  document.getElementById("result").innerText = fahrenheitResult.toFixed(2);
}
