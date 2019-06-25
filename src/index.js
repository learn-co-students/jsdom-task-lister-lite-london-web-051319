document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //---------- declaring the input fields from HTML ---------------//
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  //---------- declaring where the new task will go on the webpage ---------//
  const newTaskUl = document.getElementById("tasks");
  //---------- creates the event listener, waiting to run createNewTask when button is clicked and form submitted -----/
  newTaskForm.addEventListener("submit", createNewTask);
});

// function createNewTask(eventSubmit) {
//   eventSubmit.preventDefault();
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;
//   let newTaskUl = document.getElementById("tasks");
//   newTaskUl.appendChild(newTask);
// }

const createNewTask = eventSubmit => {
  //------ preventDefault stops the form from submitting before running the rest of the code -------//
   eventSubmit.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  //------ Takes the function of appendNewTask and sends what is created in newTask --------//
  appendNewTask(newTask);
  //------ resets test input once form submitted -------------//
  eventSubmit.target.reset();
};

const appendNewTask = task => {
  //-------- gets whats been entered from the user and adds it to the HTML list tag---------//
  document.getElementById("tasks").appendChild(task);
};
