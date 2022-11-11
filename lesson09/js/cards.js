const requestURL = 'https://diaz0107.github.io/wdd230/lesson09/data.json';

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

    card.setAttribute("id", "section");
    p.innerHTML = `${business.address}`;
    p2.innerHTML = `${business.phone}`;
    a.innerHTML = `${business.site}`;
    a.setAttribute("href", `${business.site}`);

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${business.photo}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
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

fetch(requestURL,
  {    
      //mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
  }).then(
      response=>{
          console.log(response);
          
      }
      );

function deleteItems() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("section").remove();
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getBusinesses("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getBusinesses("list");
  }
});
