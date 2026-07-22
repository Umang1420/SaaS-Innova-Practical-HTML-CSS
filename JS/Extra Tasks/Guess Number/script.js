let num =  Math.floor(Math.random()*100);
let input = document.getElementById("in");
let sub = document.getElementById("sub");
sub.addEventListener("click",check);



let count=0;

function check(){
    let ui = Number(input.value.trim());
    let u = input.value.trim();
    if(ui == ""){
        alert("Enter the Number");
        input.value = "";
    }else{
        ans();
    }
}

function ans(){
    let ui = Number(input.value.trim());
    if(ui === num){
        console.log("Correct");
        document.getElementById("input").innerHTML = `<p style="color: rgb(51, 207, 51);font-size:1.5rem;">You Guessed The Number SucessFully</p>
                                                        <button onclick="location.reload()">Play Again ⟳</button>`
    }else{
        if(ui < num){
            document.getElementById("h").innerHTML = "Hint: Too Low";
            console.log("Too Low");
            count++;
        }else if(ui > num){
             document.getElementById("h").innerHTML = "Hint: Too High";
            console.log("Too high");
            count++;
        }
    }
    
    input.value = "";  
    document.getElementById("a").innerHTML =`Attempts: ${count}`;

}