// 

 // JavaScript for Wishlist Toggle
 const wishlistIcon = document.getElementById('wishlist-icon');
 wishlistIcon.addEventListener('click', function () {
   if (wishlistIcon.classList.contains('wishlist-added')) {
     wishlistIcon.classList.remove('wishlist-added');
     wishlistIcon.title = 'Add to Wishlist';
     alert('Removed from wishlist!');
   } else {
     wishlistIcon.classList.add('wishlist-added');
     wishlistIcon.title = 'Remove from Wishlist';
     alert('Added to wishlist!');
   }
 });

 // JavaScript for Modal
 const viewDetails = document.getElementById('view-details');
 const modal = document.getElementById('details-modal');
 const closeModal = document.getElementById('close-modal');

 viewDetails.addEventListener('click', function () {
   modal.style.display = 'flex';
 });
