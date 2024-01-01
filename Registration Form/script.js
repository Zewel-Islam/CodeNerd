function addStudent() {
  let name = document.getElementById("name").value.trim();
  let rollNumber = document.getElementById("rollNumber").value.trim();
  let course = document.getElementById("course").value.trim();

  let table = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];

  let newRow = table.insertRow(0);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = rollNumber;
  cell3.innerHTML = course;
}
