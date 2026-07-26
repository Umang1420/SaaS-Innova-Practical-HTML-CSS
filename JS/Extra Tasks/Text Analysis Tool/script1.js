let textInput = document.getElementById("textInput");
let analyzeBtn = document.getElementById("analyzeBtn");

let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");
let avgLength = document.getElementById("avgLength");
let commonWords = document.getElementById("commonWords");
let frequencyTable = document.getElementById("frequencyTable");

analyzeBtn.addEventListener("click", analyzeText);

function analyzeText(){

    let text = textInput.value;

    if(text.trim()==""){
        alert("Please Enter Some Text");
        return;
    }

    let totalchar = text.length;

    let cleanText = text.toLowerCase().replace(/[^a-z0-9\s]/g,"");

    let words = cleanText.split(/\s+/);

    let finalWords = [];

    for(let i=0;i<words.length;i++){
        if(words[i]!=""){
            finalWords.push(words[i]);
        }
    }

    let totalWords = finalWords.length;

    let totalLength = 0;

    for(let i=0;i<finalWords.length;i++){
        totalLength = totalLength + finalWords[i].length;
    }

    let average = 0;

    if(totalWords>0){
        average = (totalLength/totalWords).toFixed(2);
    }

    let freq = {};

    for(let i=0;i<finalWords.length;i++){

        let word = finalWords[i];

        if(freq[word]){
            freq[word]++;
        }
        else{
            freq[word]=1;
        }

    }

    let arr = Object.entries(freq);

    arr.sort(function(a,b){
        return b[1]-a[1];
    });

    charCount.innerHTML = totalchar;
    wordCount.innerHTML = totalWords;
    avgLength.innerHTML = average;

    displayCommon(arr);
    displayFrequency(arr);

}

function displayCommon(arr){

    commonWords.innerHTML="";

    let limit = 5;

    if(arr.length<5){
        limit = arr.length;
    }

    for(let i=0;i<limit;i++){

        commonWords.innerHTML += "<li>"+arr[i][0]+" - "+arr[i][1]+" time(s)</li>";

    }

    if(arr.length==0){
        commonWords.innerHTML="<li>No Words Found</li>";
    }

}

function displayFrequency(arr){

    frequencyTable.innerHTML="";

    for(let i=0;i<arr.length;i++){

        frequencyTable.innerHTML +=
        "<div class='freq-row'><span>"+arr[i][0]+"</span><span>"+arr[i][1]+"</span></div>";

    }

}