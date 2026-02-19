import { getSkaters } from "./data.js";

/* ========== HAMBURGER MENU ========== */
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

/* ========== LOAD CARDS (HOME PAGE ONLY) ========== */
const container = document.querySelector("#item-container");

if (container) {
  getSkaters().then(data => {

    container.innerHTML = data.map(skater => `
      <div class="card">
        <h3>${skater.name}</h3>
        <p><strong>Level:</strong> ${skater.level}</p>
        <button class="view-btn"
          data-name="${skater.name}"
          data-level="${skater.level}"
          data-trick="${skater.favoriteTrick}"
          data-years="${skater.yearsSkating}">
          View Details
        </button>
      </div>
    `).join("");

    setupModal();
  });
}

/* ========== MODAL ========== */
function setupModal() {
  const modal = document.querySelector("#modal");
  const modalDetails = document.querySelector("#modal-details");
  const closeBtn = document.querySelector("#close-modal");

  document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {

      modalDetails.innerHTML = `
        <h3>${button.dataset.name}</h3>
        <p><strong>Skill Level:</strong> ${button.dataset.level}</p>
        <p><strong>Favorite Trick:</strong> ${button.dataset.trick}</p>
        <p><strong>Years Skating:</strong> ${button.dataset.years}</p>
      `;

      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

/* ========== LOCAL STORAGE VISIT COUNTER ========== */
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

const counter = document.querySelector("#visit-counter");
if (counter) {
  counter.textContent = `You have visited this page ${visits} time(s).`;
}

