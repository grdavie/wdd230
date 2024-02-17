const baseURL = "https://grdavie.github.io/wdd230/chamber/";
const membersURL = "https://grdavie.github.io/wdd230/chamber/data/members.json";
const spotlightCard = document.querySelector('#spotlight-card');

async function getSpotlight() {
    try {
        const response = await fetch(membersURL);
        
        if (response.ok) {
            const data = await response.json();
            //console.table(data.members) //for testing
            displaySpotlight(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getSpotlight();

function displaySpotlight(members) {
    // Clear existing cards from spotlightCard
    spotlightCard.innerHTML = '';

    // Filter members with membership level "Silver" or "Gold"
    const silverAndGoldMembers = members.filter(member =>
        member.membershipLvl === "Silver" || member.membershipLvl === "Gold"
    );

    // Shuffle the filtered array
    const shuffledMembers = shuffleArray(silverAndGoldMembers);

    // Take the first three elements
    const spotlightMembers = shuffledMembers.slice(0, 3);

    // Loop through spotlightMembers and create card elements
    spotlightMembers.forEach((member) => {
        // Create card elements
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let category = document.createElement('h3');
        let a = document.createElement('a');

        // Set attributes for logo img
        logo.setAttribute('src', `${baseURL}${member.logo}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '150');

        // Set attributes for anchor tag
        a.setAttribute('href', '#');
        a.setAttribute('title', `${member.name} logo with website link`);
        a.appendChild(logo);

        // Set text content for name and category
        name.textContent = `${member.name}`;
        category.textContent = `${member.category}`;

        // Append elements to card
        card.appendChild(a);
        card.appendChild(name);
        card.appendChild(category);

        // Append card to spotlightCard
        spotlightCard.appendChild(card);
        
    });
}

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
