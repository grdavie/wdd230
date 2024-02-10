const baseURL = "https://grdavie.github.io/wdd230/";
const linksURL = "https://grdavie.github.io/wdd230/data/links.json";

async function getLinks () {

    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.weeks) //for testing
}

getLinks();
