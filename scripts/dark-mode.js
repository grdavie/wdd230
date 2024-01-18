const darkBtn = document.querySelector('#darkBtn');
const main = document.querySelector('main');
const body = document.body;

darkBtn.addEventListener('click', () => {
	body.classList.toggle('dark');
    main.classList.toggle('dark');
	darkBtn.classList.toggle('dark');
});