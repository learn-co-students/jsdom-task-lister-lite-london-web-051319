document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("create-task-form").addEventListener("submit", newTask);

  
  
  // create a new list item on click of add
  function newTask(e) {
    e.preventDefault();

    const createLi = document.createElement("li");
    const inputValue = document.getElementById("new-task-description").value;
    const newItemText = document.createTextNode(inputValue);
    createLi.appendChild(newItemText)
    document.getElementById("tasks").appendChild(createLi);
    document.getElementById("new-task-description").value = "";

    console.log('hello')

    // Click on a close button to hide the current list item
    const close = document.getElementsByClassName("close");
    const span = document.createElement("SPAN");
    const txt = document.createTextNode(" \u00D7");
    span.className = "close";
    span.appendChild(txt);
    createLi.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      }
    }
  }
  
});
