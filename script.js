const start = document.querySelector(".foot");
const but1 = document.querySelector(".but1");
but1.addEventListener("click",toggle);
function toggle(){
    if (start.style.display==="none"){
        start.style.display="flex";
    }
    else{
        start.style.display="none";
    }
}
const cross = document.querySelector(".x");
cross.addEventListener("click",toggle);
const sports = {
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
        ],
    // more category...
};
function toggle2(){
    if (foot2.style.display==="none"){
        foot2.style.display="flex";
    }
    else{
        foot2.style.display="none";
    }
}
const foot2 = document.querySelector(".foot2");
const test1 = document.querySelector(".test1");
test1.addEventListener("click",()=>{
    toggle();
    toggle2();
    const options = document.querySelector(".options");
    let ques = document.querySelector(".ques");
    ques.innerText=sports.questions[0].question;
    for (let i of sports.questions[0].options){
        let cell = document.createElement("div");
        cell.innerText=i;
        options.appendChild(cell);
    }
});


