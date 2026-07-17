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

function add(){
    let task = inputtask.value.trim();
    let desc = inputdesc.value.trim();
    
    TODOSList.push({task:task,description:desc});
    localStorage.setItem("TODOS",JSON.stringify(TODOSList));
    
    inputtask.value = "";
    inputdesc.value = "";
}

function dis(){
    let tasklist = "";
    for(let i = 0; i < TODOSList.length; i++){
        tasklist  += ` `
    }
}