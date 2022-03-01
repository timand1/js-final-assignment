import { getBodies } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";

const planetsContainer = document.querySelector('.planets');
const wrapperElem = document.querySelector('.wrapper');
const overlayElem = document.querySelector('.overlay');
const planetInfoButton = document.querySelector('.overlay-button');

// Skapar upp alla planeter vid sidladdning
createPlanets();

async function createPlanets() {
    const planets = await getBodies();  

    for(const planet of planets) {
        const planetsElem = document.createElement('button');   
        planetsContainer.appendChild(planetsElem);
        planetsElem.classList = `planet planet-${planet.name.toLowerCase()}`;

        planetsElem.addEventListener('click', async () => {
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