let sub = document.getElementById("su");
let sta = document.getElementById("st");

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
async function* genrator(array){
    for(let question of array){
        
        yield question;
    }
}

let nextq = genrator(questions);

async function  nextquestion() {
    let result = await nextq.next();
 
        
    
    if(!result.done){
        document.getElementById("box").innerHTML =JSON.stringify(re);
    }else{
        console.log("no more values");
    }
}
   let re = ""
         re += `<div class="question-box">
                     <div class="questions">
                         <p>${result[i].question}</p><p id="cou">${correctcount}</p>                     </div>
                     <div class="options">
                         <form>
                            <input type="radio" id="a" name="a" value="optionA">
                            <label for="html">${result[i].A}</label><br>
                            <input type="radio" id="b" name="a" value="optionB">
                            <label for="css">${result[i].B}</label><br>
                            <input type="radio" id="c" name="a" value="optionC">
                            <label for="javascript">${result[i].C}</label><br>
                            <input type="radio" id="d" name="a" value="optionD">
                            <label for="javascript">${result[i].D}</label>
                        </form>
                    </div>
                    <div class="btn">
                        <button type="submit" id="su">Submit</button>
                    </div>
             </div>`

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
// Generator handling: nextq.next() returns an object { value, done }. Check result.done first; use result.value for the question. Do not treat result as an array or string.

// Separate HTML from result object: Build the markup into a dedicated string variable (e.g., html) instead of appending to result. Never mutate the {value, done} object by concatenation.

// Use the yielded question: Inside the single-item flow use result.value (the yielded question) rather than indexing questions[i]. That ensures you display the current question rather than reusing array indexing.

// Insert rendered HTML correctly: Assign the built HTML string to the container's innerHTML (e.g., document.getElementById("box").innerHTML = html). Do not use JSON.stringify(result).

// Avoid duplicate IDs and fix radio naming: When rendering per-question inputs, make radio name unique per question (so choices are mutually exclusive), and avoid repeated element IDs (or generate unique IDs). This prevents DOM selection conflicts and incorrect reads of selected answers.

// Wire submit/start properly: Use the start button to call the generator and render the first question. For submitting an answer, either add an event listener to the submit button after rendering (scoped to that question) or use event delegation. Ensure sub references the current button element after you render the markup.

// Answer checking and scoring: When handling submit, read the selected radio value, normalize it to the question's answer key (e.g., map values to "A"/"B"/"C"/"D"), compare with result.value.ans, update correctcount, and update the displayed score element (which must have a stable selector or be re-selected after render).

// Control flow for done state: After reading result.done, if true show final results; if false, render the next item on user action. Do not rely on array-length loops for generator-driven single-question rendering.

// Clean up unused variables: Remove or rebind unused DOM references (e.g., stale sub grabbed before rendering) and remove JSON.stringify usage or other debug artifacts.

// Test & iterate: Open the page in the browser, click start, submit answers step-by-step, verify scoring and that questions advance until done. Use console logs temporarily to confirm result.value and result.done.


sta.addEventListener("click",nextquestion);
function correct(){
    correctcount = correctcount+1; 
    console.log(correctcount);
    document.getElementById("cou").innerHTML = correctcount;
}

// async function* asknext(array){
//     for(let item of array){
        
//         yield item;
//     }
// }

// let items = ['apple','banana','mango'];
// let itemgen = asknext(items)

// async function getitem(){
//     let result = await itemgen.next();
//     if(!result.done){
//         console.log(result.value)
//     }else{
//         console.log("no More values");
//     }
// }
// sta.addEventListener("click",getitem);
