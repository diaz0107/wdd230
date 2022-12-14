
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
    dis.innerHTML = `<h3>Total Special Drinks Created : ${totalDrinks}</h3> <br>
    Want a special drink just for you <a href="https://diaz0107.github.io/wdd230/ottawa/fresh.html">click here</a>....
    `;

}

document.addEventListener('DOMContentLoaded', init);
