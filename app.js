/* Imports */
import { getBabies, getAstro } from './fetch-utils.js';
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
    getBabies();

    const astroResponse = await getAstro();
    astro = astroResponse.data;
    /* Display Functions */
    // displayAstro();
});
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    getBabies(formData.get('astroSign'));
});
// (don't forget to call any display functions you want to run on page load!)
