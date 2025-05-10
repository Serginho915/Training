const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.createElement('ul');
form.appendChild(list);
const tasksCount = document.getElementById('taskCount');

let tasksLeft = localStorage.getItem('tasksLeft') ? +localStorage.getItem('tasksLeft') : 10;
let tasksArr = JSON.parse(localStorage.getItem('tasksArr')) || [];

tasksCount.innerText = `Tasks left: ${tasksLeft}`;


function updateTaskCount() {
  tasksCount.innerText = `Tasks left: ${tasksLeft}`;
  localStorage.setItem('tasksLeft', tasksLeft);
}


function renderTask(taskText, completed = false) {
  const task = document.createElement('li');
  task.innerText = taskText;

  if (completed) {
    task.style.textDecoration = 'underline';
  }

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';

  const doneButton = document.createElement('button');
  doneButton.innerText = 'Done';

  doneButton.addEventListener('click', () => {
    task.style.textDecoration = 'underline';
    const taskToUpdate = tasksArr.find((t) => t.text === taskText);
    if (taskToUpdate) taskToUpdate.completed = true;
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
  });

 
  removeButton.addEventListener('click', () => {
    task.remove();
    tasksArr = tasksArr.filter((t) => t.text !== taskText);
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
    tasksLeft++;
    updateTaskCount();
  });

  task.appendChild(removeButton);
  task.appendChild(doneButton);
  list.appendChild(task);
}


tasksArr.forEach((task) => renderTask(task.text, task.completed));


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) {
    alert('Task cannot be empty!');
    return;
  }

  if (tasksLeft > 0) {
    tasksArr.push({ text: taskText, completed: false });
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
    renderTask(taskText);
    tasksLeft--;
    updateTaskCount();
    input.value = '';
    input.placeholder = 'Enter task';
  } else {
    alert('No more tasks permitted');
  }
});
