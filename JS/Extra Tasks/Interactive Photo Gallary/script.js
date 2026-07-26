let photos = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1035/400/300"
];

let gallery = document.getElementById("gallery");
let add = document.getElementById("add");
let url = document.getElementById("imgurl");

let modal = document.getElementById("modal");
let bigimg = document.getElementById("bigimg");
let close = document.getElementById("close");

display();

function display(){

    gallery.innerHTML="";

    for(let i=0;i<photos.length;i++){

        let card = document.createElement("div");
        card.className="card";

        let img=document.createElement("img");
        img.src=photos[i];

        img.addEventListener("click",function(){

            modal.style.display="flex";
            bigimg.src=photos[i];

        });

        let del=document.createElement("button");
        del.innerText="Delete";

        del.addEventListener("click",function(){

            photos.splice(i,1);
            display();

        });

        card.appendChild(img);
        card.appendChild(del);

        gallery.appendChild(card);

    }

}

add.addEventListener("click",function(){

    if(url.value.trim()==""){
        alert("Enter Image URL");
        return;
    }

    photos.push(url.value);
      console.log(photos)
    url.value="";

    display();

});

close.addEventListener("click",function(){

    modal.style.display="none";

});
