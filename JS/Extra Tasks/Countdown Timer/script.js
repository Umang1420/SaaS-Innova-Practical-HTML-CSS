let start = document.getElementById("st");
let restart = document.getElementById("rt");
let ut = document.getElementById("in");
let tt = document.getElementById("timetype");

let myinterval;

start.addEventListener("click", calc);

function calc(){

    clearInterval(myinterval);

    let utime = Number(ut.value.trim());

    let m = utime * 60;
    let h = utime * 60 * 60;
    if(utime !== ""){if(tt.value=="sec"){

        myinterval = setInterval(function(){

            document.getElementById("ti").innerHTML = utime;

            utime--;

            if(utime<0){

                clearInterval(myinterval);

                document.getElementById("ti").innerHTML = "Time Over";

            }
            if(utime<10){
                document.getElementById("ti").style.color = "red";
            }

        },1000);

    }
    else if(tt.value=="min"){

        myinterval = setInterval(function(){

            document.getElementById("ti").innerHTML = m;

            m--;

            if(m<0){

                clearInterval(myinterval);

                document.getElementById("ti").innerHTML = "Time Over";

            }
            if(m<10){
                document.getElementById("ti").style.color = "red";
            }

        },1000);

    }
    else{

        myinterval = setInterval(function(){

            document.getElementById("ti").innerHTML = h;

            h--;

            if(h<0){

                clearInterval(myinterval);

                document.getElementById("ti").innerHTML = "Time Over";

            }
            if(h<10){
                document.getElementById("ti").style.color = "red";
            }

        },1000);

    }

}else{
    alert(  "Enter THe time")
}}
