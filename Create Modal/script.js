let openBtn = document.getElementById("openModalBtn");
let closeBtn = document.getElementById("closeModalBtn");
let myModalElement = document.getElementById("myModal");
openBtn.addEventListener("click", function () {
  myModalElement.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  myModalElement.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === myModalElement) {
    myModalElement.style.display = "none";
  }
});
