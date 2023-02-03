const btnEl = document.querySelector('button');

btnEl.addEventListener('click', ()=> {
    let bgColor = randomColor();
    document.body.style.backgroundColor = "#" + bgColor;
} )

function randomColor(){
    let chars = "1234567890abcdef";
    let colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.slice(randomNum,randomNum+1);
    }
    return colorCode;
}