const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal () {
     const enteredValue = inputEl.value;
     const listItemel = document.createElement('li');
     listItemel.textContent = enteredValue;
     listEl.appendChild(listItemel);
     inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);