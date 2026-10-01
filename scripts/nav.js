const navbutton = document.querySelector("#ham-btn");
const navbar = document.querySelector("#nav-bar");
if (navbutton && navbar) {
  navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navbar.classList.toggle("show");
  });
}
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
// document.getElementById("lastModified").innerHTML = document.lastModified;
