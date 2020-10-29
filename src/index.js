/* CREATING TASKS: Step 1. create an empty array when the DOM is loaded
Step 2. when the user submits the form create a list element && store the form field value in the list element
Step 3. append the list element to the UL element */


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let tasks = [];

  // let form = document.getElementById('form');

  function deleteTask() {
    this.parentNode.remove();
  }

  form.onsubmit = e => {
    e.preventDefault();

    let newTask = document.getElementById('new-task-description').value;
    let list = document.createElement('li');
    let delete_listItem = document.createElement('button');

    delete_listItem.textContent = 'x';
    delete_listItem.className = 'delete_task';
    list.textContent = newTask;
    list.appendChild(delete_listItem);
    let ulist = document.getElementById('tasks');
    ulist.appendChild(list);

    let buttons = document.querySelectorAll('.delete_task');

    buttons.forEach(btn => {
      btn.addEventListener('click', deleteTask);
    });
  };
});
