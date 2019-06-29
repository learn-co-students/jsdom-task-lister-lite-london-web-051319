function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} 


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  

 
  const taskList = document.querySelector("#tasks");
  
  

  let taskForm = document.querySelector("#create-task-form");

  

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    li = document.createElement("li");
    li.innerText = document.querySelector("#new-task-description").value;
    
    const idGenerator = `${li.innerText.toLowerCase().replace(/ /g,'-')}-${getRandomInt(1000)}`

    li.id = idGenerator

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X"
    deleteButton.id = idGenerator;
    deleteButton.addEventListener("click", (e) => {
      const currentElementId = e.target.id;
      currentElement = document.getElementById(currentElementId);
      taskList.removeChild(currentElement)

    })

    li.append(deleteButton);


    taskList.append(li);
    document.querySelector("#new-task-description").value = ""
  });
  
  
  taskList.addEventListener("click", (e) => {

  })

});
