document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById('create-task-form');
  formSubmit = form.querySelector("input[type='submit']");
  addInput(form);

  formSubmit.onclick = function(e) {
    e.preventDefault();
    task = form.elements['new-task-description'].value;
    dueDate = form.elements['new-task-due-date'].value;
    addTask(task, dueDate)
  };
});

function deleteTask(button) {
  li = button.parentElement
  ul = li.parentElement
  ul.removeChild(li)
};

function addTask(task, dueDate) {
    li = document.createElement('li');
    li.innerText = `${task} - Due Date: ${dueDate}`;
    
    button = document.createElement('button');
    button.setAttribute('onclick','deleteTask(this)')
    button.innerText = 'Delete'
    
    li.appendChild(button)
    
    document.getElementById('tasks').appendChild(li);
};

function addPriority(button, priority) {
  button.parentElement.class = priority
};

function addInput(form) {
  label = document.createElement('label')
  input = document.createElement('input')

  label.for = 'new-task-due-date'
  label.innerText = 'Due Date'
  input.type = 'date'
  input.id = 'new-task-due-date'
  input.name = 'new-task-due-date'

  submit = form.querySelector("input[type='submit']")
  form.insertBefore(label, submit)
  form.insertBefore(input, submit)
};