function calculateDays(currentTime, lastVisit) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeDifference = currentTime - lastVisit;
    return Math.floor(timeDifference / msPerDay);
}

function displayMessage() {
    const message = document.getElementById('messageTxt');
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        message.textContent = "Welcome! Let us know if you have any questions. "
    } else {
        const daysDifference = calculateDays(currentTime, lastVisit);

        if (daysDifference < 1) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysDifference === 1 ? '' : 's';
            message.textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentTime);
}

window.onload = displayMessage;