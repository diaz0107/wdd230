// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // create a var for the current year
    let fYear = new Date().getFullYear();
    // add current year to the html page
    document.querySelector('#currentYear').textContent = fYear;
 }, false); 
