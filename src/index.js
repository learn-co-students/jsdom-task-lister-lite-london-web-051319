document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  let ul = document.querySelector('#tasks');

  function remove_list() {
    this.parentElement.style.display = 'none';
  }

  function add_priority(list) {
    let priority = document.querySelector('#priority').value;

    if (priority === 'low')
      list.className += 'green';
    else if (priority === 'medium')
      list.className += 'yellow';
    else if (priority === 'high')
      list.className += 'red';
  }

  function add_remove_buttons() {
    let btns = document.querySelectorAll('.remove__item');

    btns.forEach(btn => {
      btn.addEventListener('click', remove_list);
    });
  }

  function sort_high_priority() {
    let highs = document.querySelectorAll('.red');
    let mediums = document.querySelectorAll('.yellow');
    let lows = document.querySelectorAll('.green');

    ul.innerHTML= '';

    highs.forEach(li => {
      ul.appendChild(li);
    });

    mediums.forEach(li => {
      ul.appendChild(li);
    });

    lows.forEach(li => {
      ul.appendChild(li);
    });
  }

  function sort_low_priority() {
    let highs = document.querySelectorAll('.red');
    let mediums = document.querySelectorAll('.yellow');
    let lows = document.querySelectorAll('.green');

    ul.innerHTML= '';

    lows.forEach(li => {
      ul.appendChild(li);
    });

    mediums.forEach(li => {
      ul.appendChild(li);
    });

    highs.forEach(li => {
      ul.appendChild(li);
    });
  }

  form.onsubmit = event => {
    event.preventDefault();

    let val = document.querySelector('#new-task-description').value;
    let li = document.createElement('li');
    let remove = document.createElement('button');

    remove.textContent = 'X';
    remove.className = 'remove__item';
    li.textContent = val;
    li.appendChild(remove);
    add_priority(li);

    ul.appendChild(li);
    add_remove_buttons();

  }

  let priority_high = document.querySelector('#high_sort');
  let priority_low = document.querySelector('#low_sort');

  priority_high.addEventListener('click', sort_high_priority);
  priority_low.addEventListener('click', sort_low_priority);


});
