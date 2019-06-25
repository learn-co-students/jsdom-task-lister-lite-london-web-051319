document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputField = document.getElementById("new-task-description");
  const submit = document.querySelector("input[type='submit']");
  const list = document.getElementById("tasks");
  submit.addEventListener("click", e => {
    e.preventDefault();
    const itemList = document.createElement("li");
    const text = document.createTextNode(inputField.value);
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.addEventListener("click", e => {
      itemList.remove();
    });
    const selectColor = document.createElement("select");
    const option1 = document.createElement("option");
    option1.innerText = "low"
    const option2 = document.createElement("option");
    option2.innerText = "high";
    selectColor.append(option1, option2);
    itemList.append(text, deleteButton, selectColor);
    list.appendChild(itemList);
    inputField.value = "";
  })

  const reset = document.getElementById("reset-button");
  reset.addEventListener("click", e => {
    e.preventDefault();
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild);
    }
  });

  const sort = document.getElementById("sort-button");
  sort.addEventListener("click", () => {
    const items = [...list.children]
    items.sort(({innerText: a}, {innerText: b}) => sort.innerText === "sort ASC" ? a.localeCompare(b) : -a.localeCompare(b));
    list.append(...items);
    sort.innerText = sort.innerText === "sort ASC" ? "sort DESC" :  "sort ASC"
  })
});
