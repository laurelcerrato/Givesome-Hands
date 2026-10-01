import "./nav.js";

const modal = document.getElementById("donation-reasons");
const openModalBtn = document.querySelector(".openModal");
const closeModalBtn = document.querySelector(".closeModal");
if (modal && openModalBtn && closeModalBtn) {
  openModalBtn.addEventListener("click", () => {
    modal.showModal();
  });
  closeModalBtn.addEventListener("click", () => {
    modal.close();
  });
}
