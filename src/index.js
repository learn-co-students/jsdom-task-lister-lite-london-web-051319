document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // let newh1 = document.getElementById('h1')
  let button = document.querySelectorAll('input')[1]
  let form = document.getElementById('create-task-form')

  form.addEventListener("submit", function() {
  event.preventDefault()
  let text = document.getElementById('new-task-description').value
  let newli = document.createElement('li')
  newli.innerHTML = text
  newli.id = "li"
  let ulNode = document.getElementById('tasks')
  ulNode.appendChild(newli)
  //creates delete button
  let deleteBtn = document.createElement('BUTTON')
  deleteBtn.innerHTML = "delete task"
  deleteBtn.id = "button"
  newli.appendChild(deleteBtn)
  // grab delete button as node
  // buttonNode = document.getElementsById('button')
  // console.log(buttonNode)

  // create event listener for buttonNode for when its clicked
  deleteBtn.addEventListener('click', function(){
    newli.remove()
    // delete the li node
    // ulNode.removeChild(newli)
  })
    })



});
