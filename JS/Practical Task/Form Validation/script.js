
let body = document.getElementById("body");

let nameInput = document.getElementById("inn");
let emailInput = document.getElementById("ine");
let passwordInput = document.getElementById("inp");
let confirmPasswordInput = document.getElementById("incp");

let registerBtn = document.getElementById("rbtn");
let termsCheckbox = document.getElementById("term");

let validcount = 0;

let lowerCase = document.getElementById("l");
let upperCase = document.getElementById("u");
let number = document.getElementById("n");
let specialChar = document.getElementById("sp");
let passwordLength = document.getElementById("sl");


termsCheckbox.addEventListener("change", enable);

nameInput.addEventListener("keyup", inpt);
nameInput.addEventListener("keydown", inpt);

emailInput.addEventListener("keyup", ine);
emailInput.addEventListener("keydown", ine);

passwordInput.addEventListener("change", inp);
confirmPasswordInput.addEventListener("change", incp);

body.addEventListener("change", sub);



passwordInput.onfocus = function () {

    document.getElementById("message").style.display = "block";

}

passwordInput.onblur = function () {

    document.getElementById("message").style.display = "none";

}



function success(statusId){

    document.getElementById(statusId).innerHTML = "valid✔";

    document.getElementById("stat").innerHTML =
    `<div class="msg"><p>No Validation Errors</p></div>`;

    validate();

}



function error(statusId,message){

    document.getElementById(statusId).innerHTML = "";

    document.getElementById("stat").innerHTML =
    `<div class="msg"><p>${message}</p></div>`;

}


function inpt(){

    let username = nameInput.value;

    let userregex = /^[a-zA-z][a-zA-z][a-zA-Z\s]+$/;

    if(userregex.test(username)){

        success("nv");

    }

    else{

        error("nv","Error: Enter Valid Name (min 3 Characters)");

    }

}


function ine(){

    let useremail = emailInput.value;

    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailregex.test(useremail)){

        success("ne");

    }

    else{

        error("ne","Error: Enter Valid Email");

    }

}


function inp(){

    if(

        specialChar.innerHTML &&
        lowerCase.innerHTML &&
        upperCase.innerHTML &&
        passwordLength.innerHTML &&
        specialChar.innerHTML === "valid ✅"

    ){

        success("np");

    }

    else{

        error("np","Error: Enter Valid Password");

    }

}


function incp(){

    if(passwordInput.value === confirmPasswordInput.value){

        success("npc");

    }

    else{

        error("npc","Password Mis-match");

    }

}
function sub(){

    if(validcount === 5){
        registerBtn.disabled = false;
    }else{
        registerBtn.disabled = true;
    }

}

function enable(){

    if(termsCheckbox.checked){
        validate();
    }

}

function validate(){

    validcount = 0;

    if(document.getElementById("nv").innerHTML !== "")
        validcount++;

    if(document.getElementById("ne").innerHTML !== "")
        validcount++;

    if(document.getElementById("np").innerHTML !== "")
        validcount++;

    if(document.getElementById("npc").innerHTML !== "")
        validcount++;

    if(termsCheckbox.checked)
        validcount++;

}

passwordInput.onkeyup = function(){

    let lowerCaseLetters = /[a-z]/g;

    if(passwordInput.value.match(lowerCaseLetters)){
        lowerCase.innerHTML = "valid ✅";
    }else{
        lowerCase.innerHTML = "Not-valid ❌";
    }

    let upperCaseLetters = /[A-Z]/g;

    if(passwordInput.value.match(upperCaseLetters)){
        upperCase.innerHTML = "valid ✅";
    }else{
        upperCase.innerHTML = "Not-valid ❌";
    }

    let numberRegex = /[0-9]/g;

    if(passwordInput.value.match(numberRegex)){
        number.innerHTML = "valid ✅";
    }else{
        number.innerHTML = "Not-valid ❌";
    }

    let lengthRegex = /.{8,}/g;

    if(passwordInput.value.match(lengthRegex)){
        passwordLength.innerHTML = "valid ✅";
    }else{
        passwordLength.innerHTML = "Not-valid ❌";
    }

    let specialCharacterRegex = /(?=.*[!@#$%^&*])/g;

    if(passwordInput.value.match(specialCharacterRegex)){
        specialChar.innerHTML = "valid ✅";
    }else{
        specialChar.innerHTML = "Not-valid ❌";
    }

}