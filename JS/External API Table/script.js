let data = [];

async function load() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json();
    renderTable(data);
}
load();
function renderTable(list) {
    let rows = "";
    for (let i = 0; i < list.length; i++) {
        rows += `<tr>
            <td>${list[i].name}</td>
            <td>${list[i].email}</td>
            <td>${list[i].phone}</td>
            <td>${list[i].id}</td>
        </tr>`;
    }
    document.getElementById("tablerow").innerHTML = rows;
}

function search() {
    let query = document.getElementById("in").value.trim().toLowerCase();
    let filteredList = data.filter(item => item.name.toLowerCase().includes(query));
    renderTable(filteredList);
}
document.getElementById("srch").addEventListener("click", search);

