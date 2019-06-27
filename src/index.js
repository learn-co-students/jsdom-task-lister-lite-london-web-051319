document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("form#create-task-form")

  function newToDO(string){
    let listEl = document.querySelector("#tasks")
    let liEl = document.createElement("li")
    liEl.innerHTML +=`<div class="task-element">${string}</div>`
    let del = document.createElement("button");
    del.innerHTML = "Delete"

    listEl.append(liEl, del)
  };

  form.addEventListener('submit', event => {
    event.preventDefault()
    let inputEl = document.querySelector("input#new-task-description")
    let text = inputEl.value
    newToDO(text)
    form.reset()
  });

  del.addEventListener('click', event =>{
    event.preventDefault()
    this.parentElement.remove();
 });

});