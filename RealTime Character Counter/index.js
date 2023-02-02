const totalEl = document.getElementById("total");
const reaminingEl = document.getElementById("remaining");
const textareaEl = document.getElementById("textarea");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalEl.innerHTML = textareaEl.value.length;
    reaminingEl.innerHTML = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}