export function openModal(content) {
  const modal = document.querySelector("#modal");
  const modalDetails = document.querySelector("#modal-details");

  modalDetails.innerHTML = content;
  modal.classList.remove("hidden");
}

export function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("hidden");
}

export function setupModal() {
  const closeBtn = document.querySelector("#close-modal");

  closeBtn.addEventListener("click", closeModal);
}
