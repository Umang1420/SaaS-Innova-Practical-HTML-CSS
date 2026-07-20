async function load(file) {
    const response = await fetch(file);
    mydisapper(await response.json());  
    
}

load("https://jsonplaceholder.typicode.com/users");

function mydisapper(text){
    let text1 = ""
    for(let i=0; i<text.length; i++){
        text1 += `<tr>
    <td>${text[i].name}</td>
    <td>${text[i].email}</td>
    <td>${text[i].phone}</td>
    <td>${text[i].id}</td>
    </tr>`
    }
    document.getElementById("tablerow").innerHTML = text1;
    
}

let data = [];
(
  async function() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        data = [...json]
      })
  }

)();
let list = setTimeout(() => {
 JSON.stringify(data);
}, 500)



let ine = document.getElementById("in");
let sbtn = document.getElementById("srch");
srch.addEventListener("click",search);


function search(text){
    let input = ine.value.trim().toLowerCase();
    console.log(input);
    console.log(list);
    let filteredList = 5;
    let text1 = ""
    for(let i = 0; i < filteredList.length; i++){
        text1 += `<tr>
        <td>${text[i].name}</td>
        <td>${text[i].email}</td>
        <td>${text[i].phone}</td>
        <td>${text[i].id}</td>
        </tr>`
    }
    document.getElementById("tablerow").innerHTML = text1;
    ine.value = "";
}
    // const query = input.value.trim().toLowerCase();
    // const filteredList = data.filter(item => {
    //     return (
    //         item.name.toLowerCase().includes(query) ||
    //         item.email.toLowerCase().includes(query) ||
    //         item.phone.includes(query) ||
    //         String(item.id).includes(query)
    //     );
    // });