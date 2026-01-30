document.addEventListener("DOMContentLoaded", () => {
    // Set hidden timestamp
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toLocaleString();
    }

    // Modal Control Logic
    const modalButtons = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).showModal();
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });
});