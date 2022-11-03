// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let lastVisits = Number(window.localStorage.getItem("lastdate-ls"));

// determine if this is the first visit or display the number of visits.

if (lastVisits !== 0) {
    const time=date.now();
    localStorage.setItem("lastdate-ls", numVisits);
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value


