const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input");

let num1 = Math.ceil(Math.random()*1000);
let num2 = Math.ceil(Math.random()*100);
questionEl.innerHTML = `what is ${num1} Divided by ${num2}?`;

const correctAns = Math.floor(num1/num2);

let score = JSON.parse(localStorage.getItem("score"));
scoreEl.innerHTML = `Score: ${score}`


formEl.addEventListener("submit", ()=>{
    let userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}



