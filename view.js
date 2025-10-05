// view.js - Character Card Click Interaction
document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');
    let activeCard = null;

    // Function to close all cards
    function closeAllCards() {
        characterCards.forEach(card => {
            card.classList.remove('active');
        });
        activeCard = null;
    }

    // Function to open a specific card
    function openCard(card) {
        closeAllCards();
        card.classList.add('active');
        activeCard = card;
    }

    // Function to toggle card (open if closed, close if open)
    function toggleCard(card) {
        if (card.classList.contains('active')) {
            closeAllCards();
        } else {
            openCard(card);
        }
    }

    // Add click event listeners to each card
    characterCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent event bubbling
            e.stopPropagation();
            toggleCard(this);
        });
    });

    // Close all cards when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside any character card
        if (!e.target.closest('.character-card')) {
            closeAllCards();
        }
    });

    // Close cards when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllCards();
        }
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!activeCard) return;

        const currentIndex = Array.from(characterCards).indexOf(activeCard);
        let nextIndex;

        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                nextIndex = currentIndex > 0 ? currentIndex - 1 : characterCards.length - 1;
                openCard(characterCards[nextIndex]);
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextIndex = currentIndex < characterCards.length - 1 ? currentIndex + 1 : 0;
                openCard(characterCards[nextIndex]);
                break;
        }
    });

    // Optional: Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.character-card')) {
            touchStartX = e.changedTouches[0].screenX;
        }
    });

    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.character-card')) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }
    });

    function handleSwipe() {
        if (!activeCard) return;

        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            const currentIndex = Array.from(characterCards).indexOf(activeCard);
            let nextIndex;

            if (swipeDistance > 0) {
                // Swipe right - previous card
                nextIndex = currentIndex > 0 ? currentIndex - 1 : characterCards.length - 1;
            } else {
                // Swipe left - next card
                nextIndex = currentIndex < characterCards.length - 1 ? currentIndex + 1 : 0;
            }

            openCard(characterCards[nextIndex]);
        }
    }
});