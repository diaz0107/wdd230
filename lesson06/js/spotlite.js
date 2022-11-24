const URL = "https://diaz0107.github.io/wdd230/lesson06/data.json";

const display = document.querySelector(".aside");

function buildBusinessCards(info) {
  let data = info.businesses.filter((p) => p.membership == "Gold");
  for (let i = 0; i <= 2; i++) {
    
    data.splice(Math.floor(Math.random() * data.length), 1);
  };
  let num = 1;
  data.forEach((business) => {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    let p = document.createElement("p");

    card.setAttribute("class", `section spot${num}`);
    h2.innerHTML = `${business.name}`;

    h3.innerHTML = `${business.motto}`;
    a.innerHTML = `${business.site}`;
    p.innerHTML = `${business.phone}`;

    a.setAttribute("href", `${business.site}`);
    img.setAttribute("src", `${business.photo}`);
    img.setAttribute("alt", `${business.name}`);

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(h3);
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
  } else {
    throw Error(response.statusText);
  }
}

getBusinesses();