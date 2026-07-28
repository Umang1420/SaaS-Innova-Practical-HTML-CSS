let songs = [
   {
    "id": 1,
    "songname" : "Khat",
    "image" : "https://pagalnew.com/coverimages/Khat-Navjot-Ahuja-500-500.jpg",
    "url" : "songs/song1.mp3"
   },
   {
     "id": 2,
    "songname" : "Jo bhi Main",
    "image" : "https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg",
    "url" : "songs/song2.mp3"
   },
   {
     "id": 3,
    "songname" : "Millionaire",
    "image" : "https://c.saavncdn.com/173/GLORY-Hindi-2024-20250117161048-500x500.jpg",
    "url" : "songs/song3.mp3"
   },
   {
     "id": 4,
    "songname" : "Boom Shaka",
    "image" : "https://cover.djpunjab.is/59401/300x700/boom-shaka-krsna.webp",
    "url" : "songs/song4.mp3"
   },
   {
     "id": 5,
    "songname" : "Gehra Hua",
    "image" : "https://pagalnew.com/coverimages/gehra-hua-dhurandhar-500-500.jpg",
    "url" : "songs/song5.mp3"
   }
];
let index = 0;
let Playlist = [];
document.getElementById("create").addEventListener("click",addsongs);

function songlist(){
      let snames = "";
      for(let i=0; i<songs.length; i++){
         snames  += `<li id=${i}>${songs[i].songname}</li>`
      }
      document.getElementById("songlist").innerHTML = snames;

}
function show(){

    document.getElementById("img").innerHTML = `<img src='${songs[index].image}'>`
    
    document.getElementById("audio").innerHTML =
                `<audio id="audio" controls>
                  <source id="src" src=${songs[index].url} type="audio/mp3">          
                 </audio>`      
}
show(); 
function showplaylistsong(){

    document.getElementById("img").innerHTML = `<img src='${Playlist[index].image}'>`
    
    document.getElementById("audio").innerHTML =
                `<audio id="audio" controls>
                  <source id="src" src=${Playlist[index].url} type="audio/mp3">          
                 </audio>`      
}
show();
songlist();

function showplaylist(){

    document.getElementById("input").innerHTML = `
    <div class="songlist" id="playlistsongs">

                        </div>`;
    document.getElementById("hedder").innerHTML= `
                        <div id="hedder">
                        <h2>Playlist</h2>
                          <i class="fa-solid fa-plus" onclick="addsongs();"style="background-color: rgb(247, 214, 171); padding: 2px"></i>
                    </div>`
    let snames = "";
     if(Playlist == ""){
        snames = `There are no song in your Play list<br><br>
        <button id="create" onclick="addsongs();">Add Songs</button>`
     }else{
         for(let i=0; i<Playlist.length; i++){
         snames  += `
                           <li id=${i}>${Playlist[i].songname} <i class="fa-solid fa-trash-can"></i></li> 
                           
                        `
      }
     }
      document.getElementById("playlistsongs").innerHTML = snames;
      document.getElementById("playlistsongs").addEventListener("click", function(event) {
    
        if (event.target && event.target.nodeName === "LI") {
    
            index = Playlist[index].id;
            event.target.style.border = "1px solid yellow";
        }
        showplaylistsong()
    });
    document.getElementById("playlistsongs").addEventListener("click", function(event) {
    
        if (event.target && event.target.nodeName === "I") {
    
            index = Playlist[index].id;
            function del(){
                Playlist.pop(playlist[index])
            }
        }
        showplaylistsong()
    });
}

document.getElementById("songlist").addEventListener("click", function(event) {
    
    if (event.target && event.target.nodeName === "LI") {
  
         index = event.target.id;
         event.target.style.border = "1px solid yellow";
    }
    
    show();
});


function addsongs(){
    document.getElementById("input").innerHTML = `
                            <div>
                                <input type="text" id="userinput"  placeholder="Enter Song Name">
                                <button class="add" onclick="add();" id="add">Add in Your Playlist</button>
                                <button class="add" onclick="showplaylist();" id="done">Show playlist</button>
                            </div>`
}

function add(){
   let  userinput = document.getElementById("userinput");
   let result = userinput.value.trim();
   let mark1 = true;
   for(let i=0; i<Playlist.length; i++){
    if(result === Playlist[i].songname){
        alert(`${result} is alredy in your Playlist`)
        mark1 =  false;
    }
   }
   if(mark1 === true){
    let mark = false;
   for(let j=0; j<songs.length; j++){
    if(result === songs[j].songname){
        Playlist.push({"id":songs[j].id,"songname":songs[j].songname,"image":songs[j].image,"url":songs[j].url}
        )
         console.log(Playlist);
         mark = true;
    }
    }
    if(mark == false){
            alert(`No song Available named ${result}`);
         }
    }
    userinput.value = "";
}

