let button = document.getElementById("pbtn");
button.addEventListener("click",toggle);
function show(){
  
   document.getElementById("input").style.display = "block";  
}
function hide(){
    document.getElementById("input").style.display = "none"; 
}

    
function toggle() {
  if (button.value == "OFF") {
    button.value = "ON";
    show();
  } else {
    button.value = "OFF";
    hide();
  }
}

let savedData = localStorage.getItem("TODOS");
let TODOSList = savedData ? JSON.parse(savedData) : [];
let inputtask = document.getElementById("tn");
let inputdesc = document.getElementById("td");
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",add);
dis();
function add(){
    let task = inputtask.value.trim();
    let desc = inputdesc.value.trim();
    
    TODOSList.push({task:task,description:desc,completed:false});
    localStorage.setItem("TODOS",JSON.stringify(TODOSList));
    
    inputtask.value = "";
    inputdesc.value = "";
    dis();
}
function toggleComplete(i) {
  TODOSList[i].completed = !TODOSList[i].completed;
  localStorage.setItem("TODOS", JSON.stringify(TODOSList));
  dis();
}
function dis(){
    let tasklist = "";
    let date = document.getElementById("date");
    const ukDate = new Date().toLocaleDateString("en-GB");
    for(let i = 0; i < TODOSList.length; i++){
        tasklist  += `<li id="show">
                    <div class="data">
                      <h3 id="ht-${i}" style="text-decoration: ${TODOSList[i].completed ? 'line-through' : 'none'}">${TODOSList[i].task}</h3><br>
                      <p id="date-${i}">${ukDate}</p><br>
                      <p id="hd-${i}">${TODOSList[i].description}</p><br>
                     <input type="checkbox" id="com-${i}" onchange="toggleComplete(${i})" ${TODOSList[i].completed ? "checked" : ""}>
                      </div>
                      <div class="buttons"><br>
                        <button onclick="edit(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button onclick="del(${i})"><i class="fa-solid fa-trash-can"></i></button>
                      </div>
                    
                  </li>`
      document.getElementById("lists").innerHTML = tasklist;
    }
     
}
function edit(i){
  let ntask = prompt("Edit task-name",TODOSList[i].task);
  let ndesc = prompt("Edit Description",TODOSList[i].description);
  if(ntask && ndesc){
    TODOSList[i]={task:ntask,description:ndesc};
    localStorage.setItem("TODOS",JSON.stringify(TODOSList));
  }
  dis();
}

function del(i) {
  TODOSList.splice(i, 1);  
  localStorage.setItem("TODOS", JSON.stringify(TODOSList));
  dis();  
}