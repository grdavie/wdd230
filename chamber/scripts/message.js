function calculateDays(currentTime, lastVisit) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeDifference = currentTime - lastVisit;
    return Math.floor(timeDifference / msPerDay);
}

function displayMessage() {
    const message = document.getElementById('message');
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    //create an h2 element inside message
    const h2 = document.createElement('h2');

    if (!lastVisit) {
        h2.textContent = "Welcome! Let us know if you have any questions. "
    } else {
        const daysDifference = calculateDays(currentTime, lastVisit);

        if (daysDifference < 1) {
            h2.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysDifference === 1 ? '' : 's';
            h2.textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    //append h2 element to message
    message.appendChild(h2);

    localStorage.setItem('lastVisit', currentTime);
}

window.onload = displayMessage;