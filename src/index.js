document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

//     newTaskLi.appendChild(newTaskText);
//     document.getElementById("tasks").appendChild(newTaskLi);
//     document.getElementById("new-task-description").value = "";

//     const close = document.getElementsByClassName("close");
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     newTaskLi.appendChild(span);

//     for (let index = 0; index < close.length; index++) {
//       close[i].onclick = function() {
//         let div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }

// });