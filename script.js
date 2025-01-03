// Function to reveal the surprise message
function revealMessage() {
    const messageElement = document.getElementById('message');
    const surpriseIcon = document.getElementById('surprise-icon');
    const loading = document.getElementById('loading');
    const btn = document.querySelector('.surprise-btn');
    const btnIcon = btn.querySelector('.btn-icon');
    
    btnIcon.style.display = 'none';  // Hide the original icon

    // Show heart emoji and display loading spinner
    btn.innerHTML = '❤️';  // Show a heart emoji on the button
    loading.style.display = 'block';  // Show loading animation
    
    // Play the surprise sound
    const surpriseSound = document.getElementById('surprise-sound');
    surpriseSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });

    // Trigger confetti effect
    try {
        confetti();  // Ensure confetti library is working
    } catch (error) {
        console.error('Confetti error:', error);
    }

    // Simulate loading and then reveal the message and icon
    setTimeout(() => {
        console.log("Loading complete. Hiding the loading spinner and showing the surprise...");

        // Hide the loading spinner
        loading.style.display = 'none';

        // Show the surprise message and the icon
        messageElement.style.display = 'block';
        surpriseIcon.style.display = 'block';
    }, 1500); // 1.5 seconds delay (adjust as needed)
}

// Ensure that the button triggers the revealMessage function correctly
const surpriseBtn = document.querySelector('.surprise-btn');
surpriseBtn.addEventListener('click', revealMessage);
