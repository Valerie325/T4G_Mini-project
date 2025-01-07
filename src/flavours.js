document.addEventListener("DOMContentLoaded", function () {
   
    let friend = "";

    while (!friend || friend.trim() === "") {
        friend = prompt("Please enter your name to continue:");
        if (!friend || friend.trim() === "") {
            alert("Name is required to proceed!");
        }
    }
    //Display a personalized welcome message
    alert(`Hi ${friend.trim()}, Welcome to Delicious Cupcakes. Feel free to choose from our wide range of cupcake flavours 😍`);
    });



       // JavaScript for Modal
       const viewDetailsIcons = document.querySelectorAll('.fa-eye');
       const modal = document.getElementById('details-modal');
       const closeModal = document.getElementById('close-modal');
   
       viewDetailsIcons.forEach(icon => {
         icon.addEventListener('click', function () {
           modal.style.display = 'flex';
         });
       });
   
       closeModal.addEventListener('click', function () {
         modal.style.display = 'none';
       });
   
       window.addEventListener('click', function (event) {
         if (event.target === modal) {
           modal.style.display = 'none';
         }
       });

