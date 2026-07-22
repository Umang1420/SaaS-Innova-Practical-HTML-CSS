let pre = document.getElementById("pr");
let nx = document.getElementById("nx");
nx.addEventListener("click",next);
pre.addEventListener("click",pr);
let imindex = 0;
let images = [ "/JS/Extra Tasks/Image Carsoul/assets/img1.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img2.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img3.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img4.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img5.jpg"];

function show(){
    document.getElementById("images").innerHTML = `<img src="${images[imindex]}" alt="umang">`;
}
function next(){
    imindex++;
    if(imindex == images.length){
        imindex=0;
    }
    show();
    reset();
}

function pr(){
    if(imindex == 0){
        imindex = images.length - 1;
    }else{
        imindex--;
    }
    show();
    reset();
}
let timer = setInterval(function () {next()}, 4000);

function reset(){
    clearInterval(timer);
    timer = setInterval(function () {next()}, 4000);
}

show();
