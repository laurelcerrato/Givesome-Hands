import "./nav.js";
const url = 'data/companies.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data);  
}
getCompaniesData();


const displayCompanies = (data) => {
    const cards = document.querySelector('.categories');
    const categories = data.fundraisingSources;

    categories.forEach(category => {
        // Create the category section
        const categorySection = document.createElement("section");

        // Create the category title
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;

        // Create one list for all organizations in this category
        const list = document.createElement("ul");

        // Add each organization to the list
        category.organizations.forEach(organization => {
            const listElement = document.createElement("li");

            const name = document.createElement("a");
            name.setAttribute("href", organization.link);
            name.setAttribute("target", "_blank");
            name.setAttribute("rel", "noopener noreferrer");
            name.textContent = organization.name;

            listElement.appendChild(name);
            list.appendChild(listElement);
        });

        // Build the section
        categorySection.appendChild(categoryTitle);
        categorySection.appendChild(list);

        // Add the completed section to the page
        cards.appendChild(categorySection);
    });
};