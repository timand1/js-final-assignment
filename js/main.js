import { getBodies } from "./modules/api.js";
import { displayPlanet, wrapperElem, overlayElem, planetInfoElem } from "./modules/display.js";

const planetsElem = document.querySelectorAll('.planet');

for(let planetIndex = 0; planetIndex < planetsElem.length; planetIndex++) {
    planetsElem[planetIndex].addEventListener('click', async () => {
        const planets = await getBodies();
        displayPlanet(planetIndex, planets)
    })
};

// Add click to planet in overlay to return to the startscreen
planetInfoElem.addEventListener('click', () => {
    planetInfoElem.classList = 'planet-image'
    overlayElem.classList.add('hidden');
    wrapperElem.classList.remove('hidden');
})  