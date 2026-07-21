let sub = document.getElementById("su");


let correctcount = 0;
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
// async function* genrator(array){
//     for(let question of array){
        
//         yield question;
//     }
// }

// let nextq = genrator(questions);

// async function  nextquestion() {
//     let result = await nextq.next();
 
        
    
//     if(!result.done){
//         document.getElementById("box").innerHTML =JSON.stringify(re);
//     }else{
//         console.log("no more values");
//     }
// }
//    let re = ""
//          re += `<div class="question-box">
//                      <div class="questions">
//                          <p>${result[i].question}</p><p id="cou">${correctcount}</p>                     </div>
//                      <div class="options">
//                          <form>
//                             <input type="radio" id="a" name="a" value="optionA">
//                             <label for="html">${result[i].A}</label><br>
//                             <input type="radio" id="b" name="a" value="optionB">
//                             <label for="css">${result[i].B}</label><br>
//                             <input type="radio" id="c" name="a" value="optionC">
//                             <label for="javascript">${result[i].C}</label><br>
//                             <input type="radio" id="d" name="a" value="optionD">
//                             <label for="javascript">${result[i].D}</label>
//                         </form>
//                     </div>
//                     <div class="btn">
//                         <button type="submit" id="su">Submit</button>
//                     </div>
//              </div>`

// function dis(){
//     let qu = ""
//     for(let i=0; i<questions.length; i++){
//         qu += `<div class="question-box">
//                     <div class="questions">
//                         <p>${questions[i].question}</p><p id="cou">${correctcount}</p>
//                     </div>
//                     <div class="options">
//                         <form>
//                             <input type="radio" id="a" name="a" value="optionA">
//                             <label for="html">${questions[i].A}</label><br>
//                             <input type="radio" id="b" name="a" value="optionB">
//                             <label for="css">${questions[i].B}</label><br>
//                             <input type="radio" id="c" name="a" value="optionC">
//                             <label for="javascript">${questions[i].C}</label><br>
//                             <input type="radio" id="d" name="a" value="optionD">
//                             <label for="javascript">${questions[i].D}</label>
//                         </form>
//                     </div>
//                     <div class="btn">
//                         <button type="submit" id="su">Submit</button>
//                     </div>
//                 </div>`
//     }
//     document.getElementById("box").innerHTML = qu;
// }

function correct(){
    correctcount = correctcount+1; 
    console.log(correctcount);
    document.getElementById("cou").innerHTML = correctcount;
}


let i = 0;
function dis(){
    let qu = ""
   
    for(i<questions.length; i++;)
        qu += `<div class="question-box">
                    <div class="questions">
                        <p>${questions[i].question}</p><p id="cou">${correctcount}</p>
                    </div>
                    <div class="options">
                        <form>
                            <input type="radio" id="a" name="a" value="optionA">
                            <label for="html">${questions[i].A}</label><br>
                            <input type="radio" id="b" name="a" value="optionB">
                            <label for="css">${questions[i].B}</label><br>
                            <input type="radio" id="c" name="a" value="optionC">
                            <label for="javascript">${questions[i].C}</label><br>
                            <input type="radio" id="d" name="a" value="optionD">
                            <label for="javascript">${questions[i].D}</label>
                        </form>
                    </div>
                    <div class="btn">
                        <button type="submit" id="see">Submit</button>
                    </div>
                </div>`
    document.getElementById("box").innerHTML = qu;
    i = i + 1;
    console.log(i);
}
dis();


