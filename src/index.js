document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");



  form.onsubmit = function(event){

    let description = document.getElementById('new-task-description').value;
    let priority = document.getElementById('priority').value;
    let list = document.createElement('li');
    list.innerHTML = description;
    let full_list = document.getElementById('list');
    let del = document.createElement("button");
    del.innerHTML = "delete"

    list.append( del );
    list.append("Priority - ")
    list.append(priority);
    // del.document.addEventListener('click', function(){
    //   list.delete;
    // });
    full_list.append(list);

    del.addEventListener('click', function(){
      this.parentElement.remove();
    });

    debugger

    event.preventDefault();
  }
});
