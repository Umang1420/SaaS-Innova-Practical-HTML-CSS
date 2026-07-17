let body = document.getElementById("body");
let userninput = document.getElementById("inn");
let usereinput = document.getElementById("ine");
let userpinput = document.getElementById("inp");
let usercpinput = document.getElementById("incp");
let btn = document.getElementById("rbtn");
let check = document.getElementById("term");
let validcount = 0;
let l = document.getElementById("l");
let u = document.getElementById("u");
let n = document.getElementById("n");
let sp = document.getElementById("sp");
let sl = document.getElementById("sl");
check.addEventListener("change",enable)
userninput.addEventListener("keyup",inpt)
usereinput.addEventListener("keyup",ine)
userpinput.addEventListener("change",inp)
usercpinput.addEventListener("change",incp)
userninput.addEventListener("keydown",inpt)
usereinput.addEventListener("keydown",ine)
userpinput.addEventListener("change",inp)
usercpinput.addEventListener("change",incp)
body.addEventListener("change",sub);

userpinput.onfocus = function(){
    document.getElementById("message").style.display = "block";
}
userpinput.onblur = function(){
    document.getElementById("message").style.display = "none";
    if(sp.innerHTML&&l.innerHTML&&u.innerHTML&&sl.innerHTML&&sp.innerHTML === "valid ✅"){
        console.log(validcount);
    }
}
function inpt(){
    let username = userninput.value;
    let userregex = /^[a-zA-z][a-zA-z][a-zA-Z\s]+$/;
    let message = ""; 
    if(userregex.test(username)){
        message += `valid✔`
        document.getElementById("nv").innerHTML = message ;
        document.getElementById("stat").innerHTML = `<div class="msg"><p>No Validation Errors</p></div>`;
        validate();
    }else{
        message += `<div class="msg"><p>Error: Enter Valid Name</p></div>`
        document.getElementById("stat").innerHTML = message ;
        document.getElementById("nv").innerHTML = "" ;
    }

}
function ine(){
    let useremail = usereinput.value;
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let message = ""; 
    if(emailregex.test(useremail)){
        message += `valid✔`
        document.getElementById("ne").innerHTML = message ;
        document.getElementById("stat").innerHTML = `<div class="msg"><p>No Validation Errors</p></div>`;
        validate();
        console.log(validcount);
    }else{
        message += `<div class="msg"><p>Error: Enter Valid Email</p></div>`
        document.getElementById("stat").innerHTML = message ;
        document.getElementById("ne").innerHTML = "" ;
    } 
}   

function inp(){
    let message = "";
    if(sp.innerHTML&&l.innerHTML&&u.innerHTML&&sl.innerHTML&&sp.innerHTML === "valid ✅"){
        message += `valid✔`  
        document.getElementById("np").innerHTML = message ;
         document.getElementById("stat").innerHTML = `<div class="msg"><p>No Validation Errors</p></div>`;
        validate();
    }else{
        message += `<div class="msg"><p>Error: Enter Valid Password</p></div>`
        document.getElementById("stat").innerHTML = message ;
        document.getElementById("np").innerHTML = "" ;
    }
}

function incp(){
    let message = "";
    if(userpinput.value === usercpinput.value){
        message += `valid✔`  
        document.getElementById("npc").innerHTML = message;
         document.getElementById("stat").innerHTML = `<div class="msg"><p>No Validation Errors</p></div>`;
        validate();
    }else{
        message += `<div class="msg"><p>Password Mis-match</p></div>`
        document.getElementById("stat").innerHTML = message ;
        document.getElementById("npc").innerHTML = "" ;
    }
}

function sub(){
 if(validcount === 5){
        btn.disabled = false;
        }else{
            btn.disabled = true;
            console.log(validcount);
        }
}

 function enable(){
    if(check.checked){
            validate();
            console.log(validcount);
    }
 
    }
function validate(){
     validcount = validcount + 1;     
}

userpinput.onkeyup = function(){
    let lowerCaseLetters = /[a-z]/g;
     if(userpinput.value.match(lowerCaseLetters)) {  
        let message = ""; 
        message += `valid ✅`    
        l.innerHTML = message ;
    } else {
        let message = ""; 
        message += `Not-valid ❌`    
        l.innerHTML = message ;
    }
     let upper = /[A-Z]/g;
     if(userpinput.value.match(upper)) {  
        let message = ""; 
        message += `valid ✅`    
        u.innerHTML = message ;
    } else {
        let message = ""; 
        message += `Not-valid ❌`    
        u.innerHTML = message ;
    }
    let number = /[0-9]/g;
     if(userpinput.value.match(number)) {  
        let message = ""; 
        message += `valid ✅`    
        n.innerHTML = message ;
    } else {
        let message = ""; 
        message += `Not-valid ❌`    
        n.innerHTML = message ;
    }
      let length = /.{8,}/g;
     if(userpinput.value.match(length)) {  
        let message = ""; 
        message += `valid ✅`    
        sl.innerHTML = message ;
    } else {
        let message = ""; 
        message += `Not-valid ❌`    
       sl.innerHTML = message ;
    }
      let spch = /(?=.*[!@#$%^&*])/g;
     if(userpinput.value.match(spch)) {  
        let message = ""; 
        message += `valid ✅`    
        sp.innerHTML = message ;
    } else {
        let message = ""; 
        message += `Not-valid ❌`    
        sp.innerHTML = message ;
    }

    
}