/* Imports */
import { getBabies, getTypes } from './fetch-utils.js';
import { renderBabies, renderAstro } from './render-utils.js';
/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const searchForm = document.getElementById('search-form');
const astroSelect = document.getElementById('type-select');

/* State */
let babies = [];
let astro = [];

/* Events */
// display all babies on page load
window.addEventListener('load', async () => {
    const babyResponse = await getBabies();
    console.log(babyResponse);
    babies = babyResponse.data;
    /* Display Functions */
    displayBabies();
});
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    getBabies(formData.get('astroSign'));
});
// (don't forget to call any display functions you want to run on page load!)
function displayBabies() {
    babyList.innerHTML = '';
    for (let baby of babies) {
        const babyEL = renderBabies(baby);
        babyList.append(babyEL);
    }
}
