import "./nav.js";
import { getNonprofits } from "./api.js";
import { formatCause, displayNonprofit } from "./render.js";

const cause = new URLSearchParams(window.location.search).get("cause");
const results = document.querySelector("#fundraisings");
const count = document.querySelector("#count");
const loadMoreButton = document.querySelector("#load-more");

let page = 1;
let shown = 0;

async function loadPage() {
  loadMoreButton.disabled = true;

  try {
    const { nonprofits, pagination } = await getNonprofits(cause, page);

    nonprofits.forEach((nonprofit) => displayNonprofit(nonprofit, results));
    shown += nonprofits.length;
    count.textContent = `Showing ${shown} of ${pagination.total_results}`;

    if (page < pagination.pages) {
      page++;
      loadMoreButton.disabled = false;
    } else {
      loadMoreButton.hidden = true; // no more pages
    }
  } catch (error) {
    console.error(error);
    count.textContent = "Could not load nonprofits.";
    loadMoreButton.disabled = false; // let the user retry
  }
}

if (!cause) {
  results.textContent = "No cause selected.";
  loadMoreButton.hidden = true;
} else {
  document.querySelector("#cause-title").textContent = formatCause(cause);
  loadMoreButton.addEventListener("click", loadPage);
  loadPage(); // first page right away
}