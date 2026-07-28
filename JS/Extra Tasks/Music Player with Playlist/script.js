let songs = [
    {
        "id": 1,
        "songname": "Khat",
        "image": "https://pagalnew.com/coverimages/Khat-Navjot-Ahuja-500-500.jpg",
        "url": "songs/song1.mp3"
    },
    {
        "id": 2,
        "songname": "Jo bhi Main",
        "image": "https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg",
        "url": "songs/song2.mp3"
    },
    {
        "id": 3,
        "songname": "Millionaire",
        "image": "https://c.saavncdn.com/173/GLORY-Hindi-2024-20250117161048-500x500.jpg",
        "url": "songs/song3.mp3"
    },
    {
        "id": 4,
        "songname": "Boom Shaka",
        "image": "https://cover.djpunjab.is/59401/300x700/boom-shaka-krsna.webp",
        "url": "songs/song4.mp3"
    },
    {
        "id": 5,
        "songname": "Gehra Hua",
        "image": "https://pagalnew.com/coverimages/gehra-hua-dhurandhar-500-500.jpg",
        "url": "songs/song5.mp3"
    }
];

let index = 0;
let Playlist = [];
let currentListType = "songs"; 
let isShuffleOn = false;

const audio = document.getElementById("audioElement");
const statusText = document.getElementById("status-text");


let createBtn = document.getElementById("create");
if (createBtn) {
    createBtn.addEventListener("click", addsongs);
}


function songlist() {
    let snames = "";
    for (let i = 0; i < songs.length; i++) {
        snames += `<li id="${i}">${songs[i].songname}</li>`;
    }
    document.getElementById("songlist").innerHTML = snames;
}

function loadSong(songObj) {
    if (!songObj) return;
    document.getElementById("img").innerHTML = `<img src='${songObj.image}' alt='${songObj.songname}'>`;
    audio.src = songObj.url;
}

function getCurrentList() {
    return currentListType === "songs" ? songs : Playlist;
}


audio.onplay = function() {
    let activeList = getCurrentList();
    if (activeList[index]) {
        statusText.innerText = "Playing: " + activeList[index].songname;
    }
};

audio.onpause = function() {
    statusText.innerText = "Paused";
};

audio.onended = function() {
    playNextSong();
};

function playNextSong() {
    let activeList = getCurrentList();
    if (activeList.length === 0) return;

    if (isShuffleOn && activeList.length > 1) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * activeList.length);
        } while (randomIndex === index);
        index = randomIndex;
    } else {
        index = (index + 1) % activeList.length;
    }

    loadSong(activeList[index]);
    audio.play();
}

function playPrevSong() {
    let activeList = getCurrentList();
    if (activeList.length === 0) return;

    if (isShuffleOn && activeList.length > 1) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * activeList.length);
        } while (randomIndex === index);
        index = randomIndex;
    } else {
        index = (index - 1 + activeList.length) % activeList.length;
    }

    loadSong(activeList[index]);
    audio.play();
}


document.getElementById("playBtn").addEventListener("click", () => {
    if (audio.src) audio.play();
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    audio.pause();
});

document.getElementById("stopBtn").addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    statusText.innerText = "Stopped";
});

document.getElementById("nextBtn").addEventListener("click", playNextSong);
document.getElementById("prevBtn").addEventListener("click", playPrevSong);


const shuffleBtn = document.getElementById("shuffleBtn");
shuffleBtn.addEventListener("click", () => {
    isShuffleOn = !isShuffleOn;
    if (isShuffleOn) {
        shuffleBtn.classList.add("active-shuffle");
        statusText.innerText = "Shuffle Mode Enabled";
    } else {
        shuffleBtn.classList.remove("active-shuffle");
        statusText.innerText = "Shuffle Mode Disabled";
    }
});

songlist();
loadSong(songs[index]);


document.getElementById("songlist").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        currentListType = "songs";
        index = Number(event.target.id);
        loadSong(songs[index]);
        audio.play();
    }
});


function addsongs() {
    document.getElementById("input").innerHTML = `
        <div>
            <input type="text" id="userinput" placeholder="Enter Song Name">
            <button class="add" onclick="add();" id="add">Add in Your Playlist</button>
            <button class="add" onclick="showplaylist();" id="done">Show playlist</button>
        </div>`;
}

function add() {
    let userinput = document.getElementById("userinput");
    let result = userinput.value.trim();

    if (result === "") {
        alert("Please enter a song name");
        return;
    }

    let isAlready = Playlist.some(s => s.songname.toLowerCase() === result.toLowerCase());
    if (isAlready) {
        alert(`${result} is already in your Playlist`);
        userinput.value = "";
        return;
    }

    let found = songs.find(s => s.songname.toLowerCase() === result.toLowerCase());
    if (found) {
        Playlist.push({ ...found });
        alert(`${found.songname} added!`);
    } else {
        alert(`No song available named ${result}`);
    }

    userinput.value = "";
}

function showplaylist() {
    document.getElementById("input").innerHTML = `<div class="songlist" id="playlistsongs"></div>`;
    document.getElementById("hedder").innerHTML = `
        <h2>Playlist</h2>
        <i class="fa-solid fa-plus" onclick="addsongs();" style="background-color: rgb(247, 214, 171); padding: 2px; cursor: pointer;"></i>
    `;

    let snames = "";
    if (Playlist.length === 0) {
        snames = `There are no songs in your Playlist<br><br>
        <button id="create" onclick="addsongs();">Add Songs</button>`;
    } else {
        for (let i = 0; i < Playlist.length; i++) {
            snames += `
                <li data-index="${i}">
                    <span class="p-name">${Playlist[i].songname}</span> 
                    <i class="fa-solid fa-trash-can delete-btn" data-index="${i}"></i>
                </li>`;
        }
    }

    let playlistDiv = document.getElementById("playlistsongs");
    playlistDiv.innerHTML = snames;


    playlistDiv.onclick = function(event) {
        if (event.target.classList.contains("delete-btn")) {
            let delIndex = Number(event.target.getAttribute("data-index"));
            Playlist.splice(delIndex, 1);
            
   
            if (currentListType === "playlist" && index === delIndex) {
                audio.pause();
                audio.src = "";
                statusText.innerText = "Select a song";
            } else if (currentListType === "playlist" && index > delIndex) {
                index--;
            }
            
            showplaylist();
            return;
        }

        if (event.target.classList.contains("p-name") || event.target.nodeName === "LI") {
            let targetLi = event.target.closest("li");
            currentListType = "playlist";
            index = Number(targetLi.getAttribute("data-index"));
            loadSong(Playlist[index]);
            audio.play();
        }
    };
}