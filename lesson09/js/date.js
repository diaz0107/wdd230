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

document.querySelector('.logo-footer').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});
document.querySelector('.logo').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});
document.querySelector('.header-title').addEventListener('click',() => {location.assign('https://diaz0107.github.io/wdd230/lesson06/index.html');});

document.querySelector('.logo').alt = "Ottawa Chamber of Commerce, Logo";
document.querySelector('div .logo-footer').alt = "Ottawa Logo image, Logo";