/* Modul för att samla skapandet och displayandet av planeterna och dess information */

const overlayElem = document.querySelector('.overlay');
const wrapperElem = document.querySelector('.wrapper');

async function displayPlanet(i, planets) {
    const template = 
    `
    <section class="overlay--planets">    
        <img class="planet-image ${planets[i].name}" src="/assets/sun.svg">
        <img class="planet-image ${planets[i].name}" src="/assets/sun.svg">
        <img class="planet-image ${planets[i].name}" src="/assets/sun.svg">
        <p class="planet-back">Click on the planet to go back!</p>
    </section>
    <section class="overlay--text">
        <article class="planet-description">
            <h1>${planets[i].name.toUpperCase()}</h1>
            <h2>${planets[i].latinName.toUpperCase()}</h2>
            <p>${planets[i].desc}</p>
        </article>
        <article class="planet-info">
            <article class="planet-info--subtext">
                <span>
                    <h3 class="info-header">OMKRETS</h3>
                    <p>${planets[i].circumference} km</p>
                </span>
                <span>
                    <h3 class="info-header">KM FRÅN SOLEN</h3>            
                    <p>${planets[i].distance} km</p>
                </span>
            </article>
            <article class="planet-info--subtext">
                <span>
                    <h3 class="info-header">MAX TEMPERATUR</h3>
                    <p>${planets[i].temp.day} C</p>
                </span>
                <span>       
                    <h3 class="info-header">MIN TEMPERATUR</h3>
                    <p>${planets[i].temp.night} C</p>
                </span>
            </article>
        </article>
        <article class="planet-moons">
        <h3 class="info-header info-header">MÅNAR</h3>
        <p>${planets[i].moons.join(', ')}</p>
        </article>
    </section>`;

    // Clear the overlay on each planet-click
    while(overlayElem.firstChild) {
        overlayElem.removeChild(overlayElem.firstChild)
    }
    overlayElem.insertAdjacentHTML('beforeend', template);
    overlayElem.classList.toggle('hidden');
    wrapperElem.classList.toggle('hidden');

    const planetInfoElem = document.querySelector('.planet-image:first-child');
    planetInfoElem.addEventListener('click', () => {
        overlayElem.classList.toggle('hidden');
        wrapperElem.classList.toggle('hidden');
    })    
};


export { displayPlanet } 