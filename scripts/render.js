export function formatCause(cause) {
  return cause[0].toUpperCase() + cause.slice(1).replaceAll("-", " ");
}

export function displayNonprofit(nonprofit, container) {
  const card = document.createElement("section");
  card.classList.add("nonprofit");

  if (nonprofit.logoUrl) {
    const logo = document.createElement("img");
    logo.src = nonprofit.logoUrl;
    logo.alt = `${nonprofit.name} logo`;
    logo.loading = "lazy";
    card.appendChild(logo);
  }

  const title = document.createElement("h3");
  title.textContent = nonprofit.name;

  const description = document.createElement("p");
  description.textContent = nonprofit.description ?? "";

  const link = document.createElement("a");
  link.href = nonprofit.profileUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Donate";

  card.append(title, description, link);
  container.appendChild(card);
}