document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById("tasks");

  document.getElementById("create-task-form").addEventListener("submit", submitTask);
});

let i = 1

submitTask = (e) => {
  e.preventDefault();
  let task = document.getElementById("task").value;
  const ulTask = document.createElement("li");
  ulTask.innerHTML = task + `<button id=${i}>Delete</button>`;
  i++
  tasks.append(ulTask);
}

//delete button function

tasks.addEventListener("click", (e) => {
  e.preventDefault();
  button = document.getElementById(`${i-1}`);
  button.parentNode.remove();
  i--
});