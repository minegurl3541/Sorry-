// SCRIPT.JS

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function nextScene(){

scenes[currentScene].classList.remove("active");

currentScene++;

if(currentScene >= scenes.length){
currentScene = scenes.length - 1;
}

scenes[currentScene].classList.add("active");

}

function openEnvelope(){

document.querySelector(".envelope").classList.add("open");

document.getElementById("letterBtn").classList.remove("hidden");

}

const texts = [
"I regret hurting you...",
"You deserve soft love ❤️",
"I still choose you ✨",
"Please forgive me 🥺"
];

const slides = document.querySelectorAll(".slide");

const typingText = document.getElementById("typingText");

let slideIndex = 0;

function slider(){

slides.forEach(slide=>{
slide.classList.remove("activeSlide");
});

slideIndex++;

if(slideIndex >= slides.length){
slideIndex = 0;
}

slides[slideIndex].classList.add("activeSlide");

typingText.innerHTML = texts[slideIndex];

}

setInterval(slider,3000);

const particles = document.getElementById("particles");

for(let i=0;i<35;i++){

const particle = document.createElement("div");

particle.classList.add("particle");

particle.style.left = Math.random()*100 + "vw";

particle.style.animationDuration = 5 + Math.random()*10 + "s";

particle.style.opacity = Math.random();

particle.style.width = 8 + Math.random()*12 + "px";

particle.style.height = particle.style.width;

particles.appendChild(particle);

}

const music = document.getElementById("bgMusic");

const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click",()=>{

if(music.paused){

music.play();

musicToggle.innerHTML = "🎵";

}else{

music.pause();

musicToggle.innerHTML = "🔇";

}

});

document.body.addEventListener("click",()=>{

music.play();

},{once:true});
