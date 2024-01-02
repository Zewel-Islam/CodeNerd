// >>>>>>>>>At first we have to catch the addNote button<<<<<<<</////

const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// ...............set an event listener on this button..........
addBtn.addEventListener("click", () => addNewNote());

// note div ke function er moddhe call kore tar vitor sob kisu ke js niye aste hobe
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tools">
       <button id="edit" class="edit"><box-icon name='edit-alt' ></box-icon></button>
         <button id="delete" class="delete"><box-icon name='trash'></box-icon></i></button>
       </div>
       <div class="main ${text ? "" : "hidden"}"></div>
       <textarea class="${text ? "hidden" : ""}"></textarea>
  `;
  let editBtn = note.querySelector(".edit");
  let deleteBtn = note.querySelector(".delete");
  let main = note.querySelector(".main");
  let textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLs();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLs();
  });
  document.body.appendChild(note);
}

// localStorage.setItem("name", "Jewel")

function updateLs() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
