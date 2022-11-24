date = new Date(Date.now());
document.querySelector('#©').textContent = date.getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString();

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-UK',opciones2);

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

article = document.querySelector('#message');

weekday = date.getDay();

/* Banner */

if (weekday === 1 || weekday === 2){
    article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    article.setAttribute('class', 'banner-message');
}

let joint=document.querySelectorAll('.join-us');

joint.forEach(event);

function event(element){
    element.addEventListener("click",()=>{location.assign("https://diaz0107.github.io/wdd230/lesson08/joint.html");});
}
document.querySelector('.logo-footer').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});
document.querySelector('.logo').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});
document.querySelector('.header-title').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});

document.querySelector('.logo').alt = "Ottawa Chamber of Commerce, Logo";
document.querySelector('div .logo-footer').alt = "Ottawa Logo image, Logo";

