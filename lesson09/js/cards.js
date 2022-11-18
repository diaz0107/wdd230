const reqtURL = 'https://diaz0107.github.io/wdd230/lesson09/data.json';

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildBusinessCards(info, type) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    card.setAttribute("class", "section");
    p.innerHTML = `${business.address}`;
    p2.innerHTML = `Membership: ${business.membership}`;
    a.innerHTML = `${business.site}`;
    a.setAttribute("href", `${business.site}`);

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${business.photo}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
      let h3 = document.createElement("h3");
      h3.innerHTML = `${business.name}`;
      card.append(h3);
    } else {
      let h2 = document.createElement("h2");
      h2.innerHTML = `${business.name}`;
      card.append(h2);
    }

    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);

    display.classList.add(type);
    display.append(card);
  });
}

async function getBusinesses(type) {
  let response = await fetch(reqtURL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
  
});
