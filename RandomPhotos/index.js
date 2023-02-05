const imageContainerE1 = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn")

generateImages();

function generateImages(){
    for (let index = 0; index < 8; index++) {
        const imageContainerE2 = document.createElement("img");
        const value = Math.floor(Math.random()*2000);
        imageContainerE2.src = "https://picsum.photos/200/300?random=" + value;
        imageContainerE1.appendChild(imageContainerE2);
    }
}

btnE1.addEventListener("click",()=>{
    generateImages();
});

