const URL = "https://diaz0107.github.io/wdd230/lesson06/data.json";

const display = document.querySelector(".aside");
let array = [];

function buildBusinessCards(info) {
  let data = info.businesses.filter((p) => p.membership == "Gold");
  for (let i = 0; i <= 2; i++) {
    array.push(Math.floor(Math.random() * data.length), 1);
  };
  let num = 1;
  data.forEach((business) => {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let a = document.createElement("a");
    let p = document.createElement("p");

    card.setAttribute("class", `section spot${num}`);
    h2.innerHTML = `${business.name}`;

    a.innerHTML = `${business.site}`;
    p.innerHTML = `${business.phone}`;

    a.setAttribute("href", `${business.site}`);
    img.setAttribute("src", `${business.photo}`);
    img.setAttribute("alt", `${business.name}`);

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(a);
    card.appendChild(p);

    display.appendChild(card);
    num += 1;
  });
}

async function getBusinesses() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data);
    display.lastChild.classList.add('spotlight3');
  } else {
    throw Error(response.statusText);
  }
}

getBusinesses();