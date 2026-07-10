const task = document.querySelector('#task');
const button = document.querySelector('#addtask');
const taskList = document.querySelector('#taskList');
button.addEventListener('click', (e) => {addTask(e)});

function addTask(e) {
    let taskvalue = task.value;
    if(taskvalue.trim()){
        let li = document.createElement('li');
        li.innerText = taskvalue;
        li.addEventListener('click', (e) => {removeTask(e)});
        taskList.appendChild(li);
    }
    task.value = '';
}

function removeTask(e) {
    e.target.remove();
}