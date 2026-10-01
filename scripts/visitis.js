//local storage for last visit
const date_1 = new Date().toDateString();
const date_2 = new Date();

const days = (startDate, endDate) => {
  const difference = endDate.getTime() - startDate.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};
let lastvisit = localStorage.getItem("last-visit");

if (!lastvisit) {
  localStorage.setItem("last-visit", new Date().toDateString());
  document.querySelector(".visits").innerHTML =
    "Welcome, this is your first visit";
} else {
  const lastamount = days(new Date(lastvisit), new Date());
  if (lastamount === 0) {
    document.querySelector(".visits").innerHTML =
      "Welcome again, Last visited : Today";
  } else if (lastamount === 1) {
    document.querySelector(".visits").innerHTML =
      "Welcome again, Last visited : " + lastamount + " day ago";
  } else {
    document.querySelector(".visits").innerHTML =
      "Welcome again, Last visited : " + lastamount + " days ago";
  }
  localStorage.setItem("last-visit", new Date());
}
