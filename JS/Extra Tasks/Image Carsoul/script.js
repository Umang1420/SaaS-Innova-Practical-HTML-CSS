let pre = document.getElementById("pr");
let nx = document.getElementById("nx");
nx.addEventListener("click",next);
let imindex = 0;
let images = [  "/JS/Extra Tasks/Image Carsoul/assets/img1.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img2.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img3.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img4.jpg",
                "/JS/Extra Tasks/Image Carsoul/assets/img5.jpg"];


function next(){
    document.getElementById("images").innerHTML = `<img src="${images[imindex]}" alt="img1">`;
}

function done(){
      if(imindex == 5){
    imindex = 0;
    }
}

setInterval(function () {
    imindex++;
    next();
    done();
}, 5000);

next();

