document.addEventListener("DOMContentLoaded", () => {
    const deliveryForm = document.getElementById("deliveryForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    deliveryForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        confirmationMessage.classList.remove("hidden");
        deliveryForm.classList.add("hidden");
    });
});