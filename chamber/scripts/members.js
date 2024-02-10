const baseURL = "https://grdavie.github.io/wdd230/chamber/";
const membersURL = "https://grdavie.github.io/wdd230/chamber/data/members.json";
const membersCard = document.querySelector('#members-cards');

async function getMembers () {

    try {
        const response = await fetch(membersURL);
        
        if (response.ok) {
            const data = await response.json();
            //console.table(data.members) //for testing
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}

getMembers();

function displayMembers (members) {
    members.forEach((member) => {
        //elements to add to members-cards
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let contact = document.createElement('div');
        contact.id = "contact-div";
        let phone = document.createElement('span');
        let email = document.createElement('span');
        email.id = "member-email";
        let website = document.createElement('a');
        website.id = "web-link";
        let category = document.createElement('h3');
        let a = document.createElement('a');

        //logo img
        logo.setAttribute('src', `${baseURL}${member.logo}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '80')

        a.setAttribute('href', '#');
        a.appendChild(logo);

        //text content
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        email.textContent = ` | ${member.email}`;
        website.setAttribute('href', '#');
        website.textContent = `${member.url}`;
        category.textContent = `${member.category}`;

        //append
        contact.appendChild(phone);
        contact.appendChild(email);

        //append to card
        card.appendChild(a);
        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);


        //append to div
        membersCard.appendChild(card);

    });
}

//Layout View
//use membersCards instead of display

const listBtn = document.querySelector('#listBtn');
const gridBtn = document.querySelector('#gridBtn');


gridBtn.addEventListener("click", () => {;
    membersCard.classList.remove("list-view");
});

listBtn.addEventListener("click", showList);

function showList () {
    membersCard.classList.add("list-view");;
}