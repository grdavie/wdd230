const textArea = document.getElementById('desc');
const maxCharacters = 500;
const charCountSpan = document.getElementById('count');

function limitCharacters() {
    let remainingCharacters = maxCharacters - textArea.value.length;

    if (remainingCharacters < 0) {
        textArea.value = textArea.value.substring(0, maxCharacters);
        remainingCharacters = 0;
    }

    charCountSpan.textContent = remainingCharacters;

    // Change the color to red when there are only 50 characters remaining
    charCountSpan.style.color = remainingCharacters <= 50 ? '#db2525' : '#555';
}

// Assuming you want to call this function on the 'input' event
textArea.addEventListener('input', limitCharacters);

//timestamp

// Get the current timestamp
const currentTimestamp = new Date().getTime();

// Find the hidden input field by its ID
const timestampInput = document.getElementById("timestamp");

// Set the value of the hidden input field to the current timestamp
timestampInput.value = currentTimestamp;