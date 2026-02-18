import { getSkaters } from "./main.js";

const container = document.querySelector(".card-container");
const modal = document.querySelector("#modal");
const modalDetails = document.querySelector("#modal-details");
const closeModal = document.querySelector("#close-modal");

async function displaySkaters() {
  const skaters = await getSkaters();

  skaters.forEach(skater => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${skater.name}</h3>
      <p>Level: ${skater.level}</p>s
      <p>Favorite Trick: ${skater.favoriteTrick}</p>
      <p>Years Skating: ${skater.yearsSkating}</p>
      <button class="details-btn">More Info</button>
    `;

    card.querySelector(".details-btn").addEventListener("click", () => {
      modalDetails.innerHTML = `
        <h3>${skater.name}</h3>
        <p>Experience Level: ${skater.level}</p>
        <p>Favorite Trick: ${skater.favoriteTrick}</p>
        <p>Years Skating: ${skater.yearsSkating}</p>
      `;
      modal.classList.remove("hidden");
    });

    container.appendChild(card);
  });
}

displaySkaters();

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
