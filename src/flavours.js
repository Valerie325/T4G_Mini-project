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
