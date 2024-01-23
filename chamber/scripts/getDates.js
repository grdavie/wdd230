//Add the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//Add last modified
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent =  `${lastModified}`;