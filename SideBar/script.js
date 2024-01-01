function openSidebar() {
  document.querySelector(".sidebar").style.display = "block";
}
function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
}


// For make sidebar disappear clicking outside.

// let sideBar=document.getElementById('sideBar')
// let mainContent=document.getElementById('mainContent')
// window.addEventListener('click', function (event) {
//   if (event.target===mainContent) {
//     sideBar.style.display="none"
//   }
// })