document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');

  form.onsubmit = function(event) {
     let newTask = document.getElementById('new-task-description').value; // need the value that is actually inside of the field.
     let list = document.getElementById('tasks');
     let bullet = document.createElement('li');
     bullet.innerHTML = newTask;
     list.append(bullet);

     event.preventDefault(); // stops the page from reloading
 }
});
