// Custom Kiss Cursor Logic 
let kissCursor = document.createElement('div');
kissCursor.classList.add('custom-kiss-cursor');
document.body.appendChild(kissCursor);

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    kissCursor.style.left = `${e.pageX}px`;
    kissCursor.style.top = `${e.pageY}px`;
});

// When hovering over certain elements, add the "kiss-cursor-active" class
document.querySelectorAll('.kiss-target').forEach(target => {
    target.addEventListener('mouseenter', () => {
        kissCursor.classList.add('kiss-cursor-active');  // Activate kiss cursor
    });
    target.addEventListener('mouseleave', () => {
        kissCursor.classList.remove('kiss-cursor-active');  // Deactivate kiss cursor
    });
});

// Example of trigger on click event (like blowing a kiss animation)
document.querySelector('.kiss-target').addEventListener('click', () => {
    // Trigger animation or effect here (e.g., heart animation or sound)
    const heart = document.createElement('span');
    heart.innerHTML = '💋';  // Create a kiss heart emoji effect
    heart.style.position = 'absolute';
    heart.style.left = `${kissCursor.style.left}`;
    heart.style.top = `${kissCursor.style.top}`;
    heart.style.fontSize = '2rem';
    document.body.appendChild(heart);

    // Animate the heart emoji
    heart.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.5)', opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Remove the heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 500);
});
