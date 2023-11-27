let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function aboutsection(){
  window.location.href='about.html'
  
}
function contactsection(){
  window.location.href='contact.html';
}
function homesection(){
 window.location.href='index.html';
}
function allwatchesection(){
  window.location.href='product.html'
}
function read(){
  window.location.href='faqs.html'
}
function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  answer.classList.toggle("hidden");
}






