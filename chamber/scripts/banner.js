const closeBtn = document.getElementById('closeBtn');
const banner = document.getElementById('banner');

// Define the allowed days as an array of day indexes (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const allowedDays = [1, 2, 3]; // Monday, Tuesday, and Wednesday

// Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const dayOfWeek = new Date().getDay();

// Check if the current day is included in the allowed days array
if (allowedDays.includes(dayOfWeek)) {
    // Check if the banner was previously closed and stored in local storage
    const bannerClosed = localStorage.getItem('bannerClosed');

    // If the banner was not previously closed, show the banner
    if (!bannerClosed) {
        banner.style.display = 'block';
    }
} else {
    // Hide the banner if the current day is not included in the allowed days
    banner.style.display = 'none';
}

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
    banner.style.display = 'none'; // Hide the banner when the close button is clicked
    localStorage.setItem('bannerClosed', true); // Store the state of the banner in local storage
});
