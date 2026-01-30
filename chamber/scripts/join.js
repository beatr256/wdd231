// timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// modal handling
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});
