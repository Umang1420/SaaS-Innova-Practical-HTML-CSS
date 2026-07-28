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
    }else{
        alert("Fill The Details");
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

// Exactly aapka original HTML markup
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
                        <button type='button' onclick='edit(${i}, this)'>Edit</button>
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

// Edit function - includes same classes (task-title, task-desc) for inputs
function edit(index, btn) {
    let itemDiv = btn.closest('#task-item');
    let currentTask = taskList[index];

    itemDiv.innerHTML = `
        <div><input type="text" class="task-title" id="edit-task-${index}" value="${currentTask.task}"></div>
        <div><input type="text" class="task-desc" id="edit-desc-${index}" value="${currentTask.taskDescription}"></div>
        <div>
            <label>Completed</label>
            <input type="checkbox" disabled ${currentTask.Completed ? 'checked' : ''}>
        </div>
        <div>
            <button type='button' onclick="saveEdit(${index})">Save</button>
            <button type='button' onclick="renderList()">Cancel</button>
        </div>
    `;
}

function saveEdit(index) {
    let newTitle = document.getElementById(`edit-task-${index}`).value.trim();
    let newDesc = document.getElementById(`edit-desc-${index}`).value.trim();

    if (newTitle !== "" && newDesc !== "") {
        taskList[index].task = newTitle;
        taskList[index].taskDescription = newDesc;
        renderList();
    } else {
        alert("Fields cannot be empty!");
    }
}

function del(index) {
    taskList.splice(index, 1);
    renderList();
}