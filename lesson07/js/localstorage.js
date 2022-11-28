// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let lastVisits = Number(window.localStorage.getItem("lastdate-ls"));

// determine if this is the first visit or display the number of visits.

if (lastVisits !== 0) {
    const time=Date.now();
    let diff=time-lastVisits;
    let difference=(diff/1000/60/60/24);
    localStorage.setItem("lastdate-ls", time);
    visitsDisplay.textContent = difference.toFixed(0);
} else {
    visitsDisplay.textContent = `This is your first visit!`;
    localStorage.setItem("lastdate-ls",Date.now());
}


