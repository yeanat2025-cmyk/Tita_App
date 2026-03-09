let index = 0;

function slide(){

let slides = document.querySelector(".slides");

index++;

if(index >= 6){
index = 0;
}

slides.style.transform = "translateX(-" + index * 100 + "%)";

}

setInterval(slide,3000);
