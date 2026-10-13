const API_KEY = "pk_live_3223dc44a9639df5b8feec65a778f4e0"; // your pk_live_ key
const BASE_URL = "https://partners.every.org/v0.2";
const ApiUrl = "https://api.globalgiving.org/api/public/projectservice/themes?api_key=b373aff4-bd12-4b7e-8b2b-ba4c3ea572cb"

const PAGE_SIZE = 24;

export async function getNonprofits(cause, page = 1) {
  const response = await fetch(
    `${BASE_URL}/browse/${cause}?apiKey=${API_KEY}&take=${PAGE_SIZE}&page=${page}`
  );
  if (!response.ok) throw new Error(`Error ${response.status}`);
  const data = await response.json();

  return {
    nonprofits: data.nonprofits ?? [],
    pagination: data.pagination,
  };
}