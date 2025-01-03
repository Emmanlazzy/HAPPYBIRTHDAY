// Custom Cursor Logic
let cursor = document.querySelector('.custom-kiss-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('.surprise-btn, .btn').forEach(button => {
    button.addEventListener('mousedown', () => {
        cursor.classList.add('clicking');
    });
    button.addEventListener('mouseup', () => {
        cursor.classList.remove('clicking');
    });
});

// Unmute audio on page load and continue playing
window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.muted = false;  // Unmute audio
    audio.play();  // Ensure it keeps playing
});

// Modal logic for full image
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close-modal');

// Get all image elements inside the .image-wrapper
const images = document.querySelectorAll('.image-wrapper img');

// Add click event to all images
images.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'flex';  // Show the modal
        modalImg.src = e.target.src;  // Set the image source to the clicked image's source
        captionText.textContent = e.target.alt;  // Set caption to the image's alt text
    });
});

// Close the modal when the user clicks the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';  // Hide the modal
});

// Close the modal when clicking anywhere outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';  // Hide the modal if the user clicks outside the image
    }
});
