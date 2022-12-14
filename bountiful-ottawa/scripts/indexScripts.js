
function init() {
    displayDrinks();
}

function displayDrinks() {
    var dis = document.getElementById("totalDrinksDisplay");
    var totalDrinks = JSON.parse(localStorage.getItem("totalDrinks"));
    console.log(totalDrinks);
    if (totalDrinks == null) {
        totalDrinks = 0;
    }
    dis.innerHTML = `<h3>Total Specail Drinks Created : ${totalDrinks}</h3> <br>
    Want a special drink just for you <a href="/fresh.html">click here</a>....
    `;

}

document.addEventListener('DOMContentLoaded', init);
