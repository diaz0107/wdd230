// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
const lastVisit = Number(window.localStorage.getItem("last-visit"));

// determine if this is the first visit or display the number of visits.
if (lastVisit !== 0) {
    
    const time = Date.now();


    let difference = time - lastVisit;

    let roundedDays = (difference/1000/60/60/24).toFixed(0);

    localStorage.setItem("last-visit", time);

    
	visitsDisplay.textContent = roundedDays;

} else {
	visitsDisplay.textContent = `This is your first visit!`;
    localStorage.setItem("last-visit",  Date.now());
}