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

function correct(){
    correctcount = correctcount+1; 
    console.log(correctcount);
    document.getElementById("cou").innerHTML = correctcount;
}



let a = 0;
function index(){
    a++
    console.log(a);
}
function dis(){
    let qu = ""
    let box = document.getElementById("box");
    
        qu += `<div class="question-box">
                    <div class="questions">
                        <p>${questions[a].question}</p><p id="cou">${a+1}</p>
                    </div>
                    <div class="options">
                        <form id="quizForm">
                            
                            <input type="radio" id="a" name="quizOption" value="A">
                            <label for="a">${questions[a].A}</label><br>
                            
                            <input type="radio" id="b" name="quizOption" value="B">
                            <label for="b">${questions[a].B}</label><br>
                            
                            <input type="radio" id="c" name="quizOption" value="C">
                            <label for="c">${questions[a].C}</label><br>
                            
                            <input type="radio" id="d" name="quizOption" value="D">
                            <label for="d">${questions[a].D}</label>
                        </form>
                    </div>
                   
                </div>`
        
        document.getElementById("box1").innerHTML = qu;
        
}
dis();

let see = document.getElementById("see");
see.addEventListener("click",dis);

function check(){
    let selected = document.querySelector('input[name="quizOption"]:checked');
   
        if(selected === questions[a].ans){
            console.log("done");
        }else{
            console.log("issue");
        }
}
