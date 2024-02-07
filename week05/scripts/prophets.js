const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            //console.table(data.prophets); //temporary testing of data retreival
            displayProphets(data.prophets);
        } else {
            console.error(`Failed to fetch prophets: Status ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error(`An error occured while fetching the prophets list: ${error.message}`);
    }

}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //elements to add to div.cards
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        //build h2 content
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        //portrait
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //append
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}