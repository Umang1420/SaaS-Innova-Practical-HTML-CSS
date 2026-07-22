let questions = [{
    "id": "01",
    "question":"Q1- Capital of Australia?",
    "A":"London",
    "B":"Canberra",
    "C":"Los-Santos",
    "D":"Tokyo",
    "ans":"B"
},{
    "id": "02",
    "question":"Q2- Where was India’s first national Museum opened?",
    "A":"Delhi ",
    "B":"Hyderabad",
    "C":"Rajasthan",
    "D":"Mumbai",
    "ans":"D"
},{
    "id": "03",
    "question":"Q-3 When was Pravasi Bhartiya Divas held in Varanasi?",
    "A":"2017",
    "B":"2019",
    "C":"2018",
    "D":"2020",
    "ans":"B"
},{
    "id": "04",
    "question":"Q4- Vijay Singh (golf player) is from which country?",
    "A":"UK",
    "B":"INDIA",    
    "C":"USA",
    "D":"FIJI",
    "ans":"D"
},{
    "id": "05",
    "question":"Q5- What is the full form of DRDL?",
    "A":"Differential Research and Documentation Laboratory",
    "B":"Department of Research and Development Laboratory",
    "C":"Defense Research and Development Laboratory",
    "D":"None of the above",
    "ans":"B"
}
];
let correctcount = 0;
let wrongcount = 0;

let a = 0;
function index(){
    let selected = document.querySelector('input[name="quizOption"]:checked');
    if(selected){
        a++
    }else{
        alert("Please select any of them");
    }
}
function disable(){
    for(let i=0; i<quizForm.length; i++){
                quizForm[i].disabled = true;
            }
}
function check(){
        let selected = document.querySelector('input[name="quizOption"]:checked').value;
        if(selected === questions[a].ans){
            correctcount++;
            selected.disabled = "true";
            disable();
        }else{
            wrongcount++;
            disable();
        }
}
function st(){
    let form = document.getElementById("quizForm");
    form.onchange = EventTarget => check();
}
function dis(){
    let qu = ""
       if(a === questions.length){
        score();
       }else{
         qu += `<div class="question-box">
                    <div class="questions">
                        <p>${questions[a].question}</p><div style="font-size: 1.2rem;"><p>Question:${a+1}</p><p>Score:${correctcount}</p></div>
                    </div>
                    <div class="options">
                        <form id="quizForm">
                            
                            <input type="radio" id="a" name="quizOption" value="A" required>
                            <label for="a">${questions[a].A}</label><br>
                            
                            <input type="radio" id="b" name="quizOption" value="B">
                            <label for="b">${questions[a].B}</label><br>
                            
                            <input type="radio" id="c" name="quizOption" value="C">
                            <label for="c">${questions[a].C}</label><br>
                            
                            <input type="radio" id="d" name="quizOption" value="D">
                            <label for="d">${questions[a].D}</label>
                        </form>
                    </div>
                   <div class="btn"> 
                         
                    <button type="button" onclick="index();dis();" id="see">Submit</button>
                </div>
                </div>`
        
        document.getElementById("box").innerHTML = qu;
        st();
       }
        
}   

function score(){
    console.log(a)
    if(a === 5){
         document.getElementById("box").innerHTML =
         `<div class="question-box">
                    <h1 style="text-align: center;">Score Card</h1>
                    <div class="scores">
                        <div class="data">
                            <h2>Score: ${correctcount}</h2><br>
                            <h4>Wrong Answer: ${wrongcount}</h4>
                            <button style="background-color: white; font-size: 1.2rem;" onclick="location.reload();">Start Again</button>
                        </div>
                    </div>
                </div>`
    }
}