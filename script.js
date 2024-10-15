const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const removeTaskButton = document.getElementById('removeTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        updateTaskList();
        taskInput.value = '';
    }
});

removeTaskButton.addEventListener('click', () => {
    tasks.pop();
    updateTaskList();
});

function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}