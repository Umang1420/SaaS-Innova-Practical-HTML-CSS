let savedData = localStorage.getItem("recipes");
let recipeList = savedData ? JSON.parse(savedData) : [];

function addf(){
    let addre=document.getElementById("addre");
    let addin= document.getElementById("addin");
    let addti = document.getElementById("addti");
    let addca = document.getElementById("addca")
    let result= addre.value.trim();
    let result1 = addin.value.trim();
    let result2 = addti.value.trim();
    let result3 = addca.value.trim();
    
    if(result && result1 && result2 && result3 !== ""){
        
        recipeList.push({name:result,ingredients:result1,time:result2,catagory:result3});
        
        localStorage.setItem("recipes", JSON.stringify(recipeList));

        addre.value="";
        addin.value="";
        addti.value="";
        addca.value="";
    }else{
        alert('fill the details')
    }
}

function show(){
    let tableRows = "";

    for(let i = 0; i < recipeList.length; i++){
        tableRows += `<tr id="row-${i}">
            <td>${recipeList[i].name}</td>
            <td>${recipeList[i].ingredients}</td>
            <td>${recipeList[i].time}</td>
            <td>${recipeList[i].catagory}</td>
            <td>
                <button onclick="deleteRecipe(${i})">Delete</button>
                <button onclick="editRecipe(${i})">Edit</button>
            </td>
        </tr>`;
    }

    document.getElementById("recipeRows").innerHTML = tableRows;
}

function editRecipe(i){
    let row = document.getElementById(`row-${i}`);
    
    row.innerHTML = `
        <td><input type="text" id="edit-name-${i}" value="${recipeList[i].name}"></td>
        <td><input type="text" id="edit-ing-${i}" value="${recipeList[i].ingredients}"></td>
        <td><input type="text" id="edit-time-${i}" value="${recipeList[i].time}"></td>
        <td><input type="text" id="edit-cat-${i}" value="${recipeList[i].catagory}"></td>
        <td>
            <button onclick="saveRecipe(${i})">Save</button>
            <button onclick="show()">Cancel</button>
        </td>
    `;
}

function saveRecipe(i){
    let newName = document.getElementById(`edit-name-${i}`).value.trim();
    let newIngredients = document.getElementById(`edit-ing-${i}`).value.trim();
    let newTime = document.getElementById(`edit-time-${i}`).value.trim();
    let newCatagory = document.getElementById(`edit-cat-${i}`).value.trim();

    if(newName && newIngredients && newTime && newCatagory){
        recipeList[i] = {
            name: newName, 
            ingredients: newIngredients, 
            time: newTime, 
            catagory: newCatagory
        };
        localStorage.setItem("recipes", JSON.stringify(recipeList));
        show(); 
    } else {
        alert("Please fill all details before saving.");
    }
}

async function searchRecipes(){
    let searchTerm = await document.getElementById("searchBox").value.trim().toLowerCase();

    try{
    if(searchTerm !==""){
        let filteredList = recipeList.filter(function(recipe){
        return recipe.ingredients.toLowerCase().includes(searchTerm);
    });

    let tableRows = "";

    for(let i = 0; i < filteredList.length; i++){
        tableRows = tableRows + "<tr><td>" + filteredList[i].name + "</td><td>" + filteredList[i].ingredients + "</td><td>" + filteredList[i].time + "</td><td>" + filteredList[i].catagory + "</td><td>"+"<button onclick='deleteRecipe(" + i + ")'>Delete</button> " +
            "<button onclick='editRecipe(" + i + ")'>Edit</button>"+"</td></tr>";
    }

    document.getElementById("recipeRows").innerHTML = tableRows; 
    searchBox.value= "";
    }}catch{
        alert("Provide the Ingreidents To search recipe");
    } 
}

function deleteRecipe(i){
    recipeList.splice(i, 1);
    localStorage.setItem("recipes", JSON.stringify(recipeList));
    show();
}

function showe(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}