let taskList = [];
let currentFilter = "all"; 

function add() {
    let inputtask = document.getElementById("ts");
    let inputds = document.getElementById("td");
    let task = inputtask.value.trim();
    let taskd = inputds.value.trim();
    
    if (task !== "" && taskd !== "") {
        taskList.push({ task: task, taskDescription: taskd, Completed: false });
        inputtask.value = "";
        inputds.value = "";
        renderList();
    }
}

function display() {
    currentFilter = "all";
    renderList();
}

function filter() {
    
    let buttonText = event.target.innerText.toLowerCase();
    if (buttonText === "completed") {
        currentFilter = "completed";
    } else if (buttonText === "incomplete") {
        currentFilter = "incomplete";
    }
    renderList();
}


function renderList() {
    let list = "";
    
    for (let i = 0; i < taskList.length; i++) {
        
        if (currentFilter === "completed" && !taskList[i].Completed) continue;
        if (currentFilter === "incomplete" && taskList[i].Completed) continue;

        list += `<div id='task-item'>
                    <div><p class='task-title'>${taskList[i].task}</p></div>
                    <div><p class='task-desc'>${taskList[i].taskDescription}</p></div>
                    <div>
                        <label>Completed</label>
                        <input onclick='check(${i}, this)' ${taskList[i].Completed ? 'checked' : ''} type="checkbox">
                    </div>
                    <div>
                        <button type='button' onclick='edit(${i})'>Edit</button>
                        <button type='button' onclick='del(${i})'>Delete</button>
                    </div>
                </div>`;
    }
    
    document.getElementById("display").innerHTML = list;
}

function check(index, checkbox) {
    taskList[index].Completed = checkbox.checked;
    renderList(); 
}

function edit(index) {
    let currentTask = taskList[index];
    let newTitle = prompt("Edit Task Title:", currentTask.task);
    let newDesc = prompt("Edit Task Description:", currentTask.taskDescription);
    
    if (newTitle !== null && newDesc !== null) {
        taskList[index].task = newTitle.trim() || currentTask.task;
        taskList[index].taskDescription = newDesc.trim() || currentTask.taskDescription;
        renderList();
    }
}

function del(index) {
    taskList.splice(index, 1);
    renderList();
}