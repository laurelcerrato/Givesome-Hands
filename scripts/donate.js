import "./nav.js";
const url = "data/companies.json";
const causes = "data/causes.json";
const apiUrl = "https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_3223dc44a9639df5b8feec65a778f4e0";

async function getCompaniesData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  // data.nonprofits.forEach(profit => {
  //   console.log(profit.nonprofitTags.title);
  // });
  
  displayCauses(causes);
}
getCompaniesData();

async function displayCauses(){
  const response = await fetch(causes);
  const data = await response.json();
  console.log(data);
  // const cards = document.querySelector(".categories");
  // // const categories = data.fundraisingSources;
  //  data.forEach((cause) => {
  //   console.log(cause);
  //   return cause;
  // });

  // categories.forEach((category) => {
  //   // Create the category section
  //   const categorySection = document.createElement("section");

  //   // Create the category title
  //   const categoryTitle = document.createElement("h2");
  //   categoryTitle.textContent = category.category;

  //   // Create one list for all organizations in this category
  //   const list = document.createElement("ul");

  //   // Add each organization to the list
  //   category.organizations.forEach((organization) => {
  //     const listElement = document.createElement("li");

  //     const name = document.createElement("a");
  //     name.setAttribute("href", organization.link);
  //     name.setAttribute("target", "_blank");
  //     name.setAttribute("rel", "noopener noreferrer");
  //     name.textContent = organization.name;

  //     listElement.appendChild(name);
  //     list.appendChild(listElement);
  //   });

  //   // Build the section
  //   categorySection.appendChild(categoryTitle);
  //   categorySection.appendChild(list);

  //   // Add the completed section to the page
  //   cards.appendChild(categorySection);
  // });
};
