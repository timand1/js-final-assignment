import { getBodies } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";

const planetsElem = document.querySelectorAll('.planet');

for(let i = 0; i < planetsElem.length; i++) {
    planetsElem[i].addEventListener('click', async () => {
        const planets = await getBodies();
        displayPlanet(i, planets)
    })
};
