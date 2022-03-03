/* 
    Main js-fil där allt samlas och knapp-eventen ligger här och hämtar upp funktionerna från de andra modulerna
*/

import { getBodies } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";

const planetsElem = document.querySelector('.planets');
const wrapperElem = document.querySelector('.wrapper');
const overlayElem = document.querySelector('.overlay');
const planetInfoButton = document.querySelector('.overlay-button');

// Create all planet on pageload
createPlanets();

async function createPlanets() {
    const planets = await getBodies();  

    for(const planet of planets) {
        const planetButton = document.createElement('button');   
        planetsElem.appendChild(planetButton);
        planetButton.classList = `planet planet-${planet.name.toLowerCase()}`;

        // Make each planet clickable
        planetButton.addEventListener('click', async () => {
            displayPlanet(planet);
        })
    }
};

// Add click to planet in overlay to return to the startscreen
planetInfoButton.addEventListener('click', () => {
    planetInfoButton.classList = 'overlay-button planet-solen';
    overlayElem.classList.add('hidden');
    wrapperElem.classList.remove('hidden');
}); 