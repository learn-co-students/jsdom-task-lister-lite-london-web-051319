document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("create-new-task")
  button.addEventListener('click', function(e){
    e.preventDefault()
    const text = document.getElementById("new-task-description");
    const tasks = document.getElementById("tasks");
    const newItem = document.createElement("li")
    newItem.innerText = text.value
    tasks.append(newItem)
  })
});
