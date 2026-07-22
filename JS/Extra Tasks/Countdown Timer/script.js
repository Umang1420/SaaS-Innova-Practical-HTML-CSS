let start = document.getElementById("st");
let restart = document.getElementById("rt");
let ut = document.getElementById("in");
let tt = document.getElementById("timetype");
start.addEventListener("click",calc)

function calc(){
    utime = Number(ut.value.trim());
    let m = utime * 60;
    let h = utime * 60 * 60;
    if(tt.value=="sec"){
        console.log("hello");
        myinterval=setInterval(function () {
            var a = utime--;
            document.getElementById("ti").innerHTML = a}, 1000);
            setTimeout(console.log("hello"),utime);
    }else if(tt.value=="min"){
        setInterval(function () {
            let b = m--;
            document.getElementById("ti").innerHTML = b}, 1000);
    }else{   
        setInterval(function () {
            let e = h--;
            document.getElementById("ti").innerHTML = e}, 1000);
    }
}

