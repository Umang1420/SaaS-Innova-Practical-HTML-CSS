const recipes = [];
const ing = [];
const time= [];

function addf(){
    let addre=document.getElementById("addre");
    let addin= document.getElementById("addin");
    let addti = document.getElementById("addti");
    let result= addre.value.trim();
    let result1 = addin.value.trim();
    let result2 = addti.value.trim()
    
    if(result && result1 && result2 !== ""){
        
        recipes.push(result);
        ing.push(result1);
        time.push(result2);
        

        addre.value= "";
        addin.value="";
        addti.value="";
    }else{
        alert('fill the details')
    }
}

function show(){
console.log(recipes);
console.log(ing);
console.log(time);
document.getElementById("show").textContent = recipes.join(", ");
document.getElementById("show1").textContent = ing.join(", ");
document.getElementById("show11").textContent = time.join(", ");
}

function next(){
    if(recipes && ing && time !== []){
        
    }   
}




function showe(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}
