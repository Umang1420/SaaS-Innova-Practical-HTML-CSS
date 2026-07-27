let songs = [
   {
    "songname" : "Khat",
    "image" : "https://pagalnew.com/coverimages/Khat-Navjot-Ahuja-500-500.jpg",
    "url" : "songs/song1.mp3"
   },
   {
    "songname" : "Jo bhi Main",
    "image" : "https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg",
    "url" : "songs/song2.mp3"
   },
   {
    "songname" : "Millionaire",
    "image" : "https://c.saavncdn.com/173/GLORY-Hindi-2024-20250117161048-500x500.jpg",
    "url" : "songs/song3.mp3"
   },
   {
    "songname" : "Boom Shaka",
    "image" : "https://cover.djpunjab.is/59401/300x700/boom-shaka-krsna.webp",
    "url" : "songs/song4.mp3"
   },
   {
    "songname" : "Gehra Hua",
    "image" : "https://pagalnew.com/coverimages/gehra-hua-dhurandhar-500-500.jpg",
    "url" : "songs/song5.mp3"
   }
];
let index = 0;


function songlist(){
      let snames = "";
      for(let i=0; i<songs.length; i++){
         snames  += `<li id=${i}>${songs[i].songname}</li>`
      }
      document.getElementById("songlist").innerHTML = snames;

}
songlist();

document.getElementById("songlist").addEventListener("click", function(event) {
    
    if (event.target && event.target.nodeName === "LI") {
  
         index = event.target.id;
    
    }
    show();
});


function show(){

    document.getElementById("img").innerHTML = `<img src='${songs[index].image}'>`
    
    document.getElementById("audio").innerHTML =
                `<audio id="audio" controls>
                  <source id="src" src=${songs[index].url} type="audio/mp3">          
                 </audio>`      
}
                    


let next = document.getElementById("next").addEventListener("click",function() {
    index++;
    console.log(index)
    show();
     if(index == songs.length-1){
        index = -1;
    }
});
let pre = document.getElementById("pre").addEventListener("click",function() {
    index--;
    
    show();
    console.log(index)
});


show(); 