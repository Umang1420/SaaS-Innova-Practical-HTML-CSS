let users = [];
let quotes = [];
let posts = [];
async function load(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let response1 = await fetch("https://dummyjson.com/quotes");
    let response2 = await fetch("https://dummyjson.com/posts");
        const data = await response1.json();
        const data1 = await response2.json()
        users = await response.json();
        quotes = data.quotes || [];
        posts = data1.posts || [];
    let promises = new Promise((resolve, reject) => {
        if(response || response1 || response2){
            resolve(console.log(users));
            resolve(console.log(posts));
            resolve(console.log(quates));
        }else{
            reject(console.log("issue"))
        };
    })
}



let u = document.getElementById("user");
let p = document.getElementById("post");
u.addEventListener("click",user);
p.addEventListener("click",post);
u.addEventListener("click",toggle1);
p.addEventListener("click",toggle2);
function quote(){
    let a = Math.floor(Math.random() * 30);
    document.getElementById("qu").innerHTML = `"${quotes[a].quote}"<br><br>~ ${quotes[a].author}`
    
}
setInterval(function(){
    quote();
},3000);    

function user(){
    let data = ""
    for(let i=0; i<users.length; i++){
        data += `
                            <tr>
                                <td>${users[i].name}</td>
                                <td>${users[i].username}</td>
                                <td>${users[i].email}</td>
                                <td>${users[i].phone}</td>
                            </tr>`
    }
    document.getElementById("data").innerHTML = data;
}
let pindex = 0;
function post(){
    
    document.getElementById("data1").innerHTML = `
                            <h4>Title: ${posts[pindex].title}</h4><br>
                            <h5>Content:</h5>
                            <p>${posts[pindex].body}</p>
                            <br><br>
                            <div class="btn">
                                <button id="pre" onclick="Previous();">Previous</button>
                                <button id="nx" onclick="next();">Next</button>
                            </div>`
}

function next(){
    if(pindex === 29){
        pindex = 0;
    }else{
        pindex++;
    }
    post();
}
const Previous = () => {
    if(pindex === 0){
        pindex = 29;
    }else{
        pindex--;
    }
    post();
};

function toggle1() {
  if (u.value== "OFF") {
    u.value = "ON";
    document.getElementById("c1").style.display = "block";
  } else {
    u.value = "OFF";
    document.getElementById("c1").style.display = "none";
  }
}
function toggle2() {
  if (p.value == "OFF") {
    p.value = "ON";
    document.getElementById("c2").style.display = "block";
  } else {
    p.value = "OFF"
    document.getElementById("c2").style.display = "none";
  }
}
load();