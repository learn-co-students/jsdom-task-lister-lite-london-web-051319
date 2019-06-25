document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById('create-task-form');
   // const priority = ['high', 'medium', 'low']
   // let pick = document.createElement('span');
   // pick.textContent = 'Priority';
   // form.append(pick)


   form.onsubmit = function(event) {
      let bullet = document.createElement('li');
      let button = document.createElement('button');
      let priority = document.getElementById('priority').value
      button.innerHTML = 'delete';
      let content = document.getElementById('new-task-description').value;
      bullet.innerHTML = content;
      bullet.append(button);
      bullet.append(priority)
      const list = document.querySelector('#tasks');
      list.append(bullet);


      event.preventDefault();

      button.addEventListener('click', function(e){
         this.parentElement.remove();
      });


   }

});
