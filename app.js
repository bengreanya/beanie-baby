/* Imports */
// getTypes is get Astrosign
import { getBabies, getTypes } from './fetch-utils.js';
import { renderBabies, renderAstro } from './render-utils.js';
/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const searchForm = document.getElementById('search-form');
const astroSelect = document.getElementById('type-select');

/* State */
let babies = [];
let astros = [];

/* Events */
// display all babies on page load
window.addEventListener('load', async () => {
    const astroSigns = await getTypes();
    astros = astroSigns.data;
    const babyResponse = await getBabies();
    babies = babyResponse.data;
    /* Display Functions */
    displayBabies();
    displayAstroOptions();
});
// we put getBabies but could be getType
async function findBabies(astroSign) {
    const response = await getBabies(astroSign);
    babies = response.data;
    displayBabies();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBabies(formData.get('astroSign'));
});
// (don't forget to call any display functions you want to run on page load!)
function displayBabies() {
    babyList.innerHTML = '';
    for (let baby of babies) {
        const babyEL = renderBabies(baby);
        babyList.append(babyEL);
    }
}

function displayAstroOptions() {
    for (let astro of astros) {
        const option = renderAstro(astro);
        astroSelect.append(option);
    }
}
