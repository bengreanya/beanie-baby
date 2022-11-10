/* Imports */
import { getBabies, getTypes } from './fetch-utils.js';
import { renderBabies, renderTypes } from './render-utils.js';
/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */
let babies = [];
let astro = [];

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
