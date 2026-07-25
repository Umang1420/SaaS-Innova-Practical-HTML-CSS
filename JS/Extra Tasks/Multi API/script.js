let users = [];
let quotes = [];
let posts = [];
async function load() {
  let [response, response1, response2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://dummyjson.com/quotes"),
    fetch("https://dummyjson.com/posts")
  ]);

  let [userData, quoteData, postData] = await Promise.all([
    response.json(),
    response1.json(),
    response2.json()
  ]);

  users = userData;
  quotes = quoteData.quotes || [];
  posts = postData.posts || [];

  console.log(users);
  console.log(posts);
  console.log(quotes);
  showSummary();
}

let userbtn = document.getElementById("user");
let postbtn = document.getElementById("post");
userbtn.addEventListener("click", user);
postbtn.addEventListener("click", post);
userbtn.addEventListener("click", toggle1);
postbtn.addEventListener("click", toggle2);

function quote() {
  let a = Math.floor(Math.random() * 30);
  document.getElementById("qu").innerHTML =
    `"${quotes[a].quote}"<br><br>~ ${quotes[a].author}`;
}
setInterval(function () {
  quote();
}, 3800);

function user() {
  let data = "";
  for (let i = 0; i < users.length; i++) {
    data += `
                            <tr>
                                <td>${users[i].name}</td>
                                <td>${users[i].username}</td>
                                <td>${users[i].email}</td>
                                <td>${users[i].phone}</td>
                            </tr>`;
  }
  document.getElementById("data").innerHTML = data;
}
let pindex = 0;
function post() {
  document.getElementById("data1").innerHTML = `
                            <h4>Title: ${posts[pindex].title}</h4><br>
                            <h5>Content:</h5>
                            <p>${posts[pindex].body}</p>
                            <br><br>
                            <div class="btn">
                                <button id="pre" onclick="Previous();">Previous</button>
                                <button id="nx" onclick="next();">Next</button>
                            </div>`;
}

function next() {
  if (pindex === 29) {
    pindex = 0;
  } else {
    pindex++;
  }
  post();
}
const Previous = () => {
  if (pindex === 0) {
    pindex = 29;
  } else {
    pindex--;
  }
  post();
};

function showSummary() {
  document.getElementById("summary").innerHTML = `
    <p>Total Users: ${users.length}</p>
    <p>Total Posts: ${posts.length}</p>
    <p>Total Quotes: ${quotes.length}</p>
  `;
}

function toggle1() {
  if (userbtn.value == "OFF") {
    userbtn.value = "ON";
    document.getElementById("c1").style.display = "block";
  } else {
    userbtn.value = "OFF";
    document.getElementById("c1").style.display = "none";
  }
}
function toggle2() {
  if (postbtn.value == "OFF") {
    postbtn.value = "ON";
    document.getElementById("c2").style.display = "block";
  } else {
    postbtn.value = "OFF";
    document.getElementById("c2").style.display = "none";
  }
}
load();
