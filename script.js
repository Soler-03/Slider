
let slideIndex;
let startSliderAct;

if(localStorage.getItem('curSlide')){
    slideIndex=Number(localStorage.getItem('curSlide'));
}else{
    slideIndex = 1;
}

if(localStorage.getItem('startSliderAct')){
    startSliderAct=Number(localStorage.getItem('startSliderAct'));
}else{
    startSliderAct=1;
}

setState();
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
    slideIndex = slides.length
  }
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
localStorage.setItem('curSlide', slideIndex);
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}


function myFunction() {
    plusSlide();
}

var gVar;

function changeText() {
    if (document.getElementById('pText').innerHTML == "Start") { 
        gVar = setInterval(myFunction, 3000);
        localStorage.setItem('startSliderAct', 0);
        document.getElementById('pText').innerHTML = "Stop";   
    } else {
        localStorage.setItem('startSliderAct', 1);
        document.getElementById('pText').innerHTML = "Start";
        clearInterval(gVar);
    }
}

function setState() {
    if (startSliderAct==0) { 
       gVar = setInterval(myFunction, 1100);
       document.getElementById('pText').innerHTML = "Stop";   
   }
   if(startSliderAct==1){
       document.getElementById('pText').innerHTML = "Start";
       clearInterval(gVar);
   }
}