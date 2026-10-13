// import "./nav.js";
// const causes = "data/causes.json";


// const ApiUrl = "https://api.globalgiving.org/api/public/projectservice/themes?api_key=b373aff4-bd12-4b7e-8b2b-ba4c3ea572cb"

// // async function GetTheme() {
// //     const response = await fetch(ApiUrl);
// //     const themes = response.json();
   
// // }
// //GetTheme();
// async function getFundraisings(cause) {
//   //const selectedCause = document.querySelector(".cause").value.toLowerCase();

//   const apiUrl = `https://partners.every.org/v0.2/browse/${cause}?apiKey=pk_live_3223dc44a9639df5b8feec65a778f4e0`;
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   data.nonprofits.forEach((profit) => {
//     displayNonprofit(profit);
//   });
// }
// displayCauses(causes);



// async function displayCauses() {
//   const response = await fetch(causes);
//   const causesData = await response.json();
//   const cards = document.querySelector(".categories");
//   causesData.forEach((cause) => {
//     const categorySection = document.createElement("section");
//     categorySection.onclick = () => getFundraisings(cause);
//     categorySection.classList.add("category");
//     const categoryTitle = document.createElement("h2"); 
//     categoryTitle.textContent = cause[0].toUpperCase() + cause.slice(1) ;
//     categorySection.appendChild(categoryTitle);
//     cards.appendChild(categorySection);
  
//   });
// }

// ;

// function displayNonprofit(nonprofit) {
//   const card = document.createElement("section");
//   card.classList.add("nonprofit");

//   if (nonprofit.logoUrl) {
//     const logo = document.createElement("img");
//     logo.src = nonprofit.logoUrl;
//     logo.alt = `${nonprofit.name} logo`;
//     logo.loading = "lazy";
//     card.appendChild(logo);
//   }

//   const title = document.createElement("h3");
//   title.textContent = nonprofit.name;

//   const description = document.createElement("p");
//   description.textContent = nonprofit.description ?? "";

//   const link = document.createElement("a");
//   link.href = nonprofit.profileUrl;
//   link.target = "_blank";
//   link.rel = "noopener noreferrer";
//   link.textContent = "Donate";

//   card.append(title, description, link);
//   document.querySelector("#fundraisings").appendChild(card);
// }
import "./nav.js";
import { formatCause } from "./render.js";

const causesFile = "data/causes.json";

async function displayCauses() {
  const response = await fetch(causesFile);
  const causes = await response.json();
  const cards = document.querySelector(".categories");

  causes.forEach((cause) => {
    const categorySection = document.createElement("section");
    categorySection.classList.add("category");
    categorySection.onclick = () => {
      window.location.href = `nonprofits.html?cause=${cause}`;
    };

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = formatCause(cause);

    categorySection.appendChild(categoryTitle);
    cards.appendChild(categorySection);
  });
}

displayCauses();