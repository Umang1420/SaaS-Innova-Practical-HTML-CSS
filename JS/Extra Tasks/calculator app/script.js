let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("di");
let fnum = document.getElementById("in1");
let snum = document.getElementById("in2");  
let clr = document.getElementById("clr");
add.addEventListener("click",adde);
sub.addEventListener("click",sube);
mul.addEventListener("click",mule);
div.addEventListener("click",dive);
clr.addEventListener("click",cl);

function adde(){
    let first = Number(fnum.value.trim());
    let secound = Number(snum.value.trim());
    let result = first + secound ;
    document.getElementById("result").innerHTML = result;
}
function sube(){
    let first = Number(fnum.value.trim());
    let secound = Number(snum.value.trim());
    let result = first - secound ;
    document.getElementById("result").innerHTML = result;
}
function mule(){
    let first = Number(fnum.value.trim());
    let secound = Number(snum.value.trim());
    let result = first * secound ;
    document.getElementById("result").innerHTML = result;
}
function dive(){
    let first = Number(fnum.value.trim());
    let secound = Number(snum.value.trim());
    let result = first / secound ;
    document.getElementById("result").innerHTML = result;
}

function cl(){
   location.reload();
}