let add = document.getElementById("add");
let input = document.getElementById("task");
let list = document.getElementById("list");

let dragItem = null;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

add.addEventListener("click", function () {

    if (input.value.trim() == "") {
        alert("Enter Task");
        return;
    }

    tasks.push(input.value);

    saveTasks();

    displayTasks();

    input.value = "";

});

function displayTasks() {

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerText = tasks[i];

        li.draggable = true;

        li.dataset.index = i;

        li.addEventListener("dragstart", function () {

            dragItem = li;

        });

        li.addEventListener("dragover", function () {

            event.preventDefault();

        });

        li.addEventListener("drop", function () {

            let dragIndex = dragItem.dataset.index;
            let dropIndex = li.dataset.index;

            let temp = tasks[dragIndex];
            tasks[dragIndex] = tasks[dropIndex];
            tasks[dropIndex] = temp;

            saveTasks();

            displayTasks();

        });

        list.appendChild(li);

    }

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}