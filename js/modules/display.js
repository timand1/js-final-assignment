/* 
    Modul för att samla skapandet och displayandet av planeterna och deras information 
    samt att visa overlayen där informationen ska visas
*/

const wrapperElem = document.querySelector('.wrapper');
const overlayElem = document.querySelector('.overlay');
const planetOverlayButton = document.querySelector('.overlay-button');

const headerPlanetElem = document.querySelector('.planet-container--description h1');
const latinPlanetElem = document.querySelector('.planet-container--description h2');
const planetDescElem = document.querySelector('.planet-container--description p');

const planetCircumferenceElem = document.querySelector('.planet-subheader--circumference');
const planetDistanceElem = document.querySelector('.planet-subheader--distance');
const planetMaxTempElem = document.querySelector('.planet-subheader--max');
const planetMinTempElem = document.querySelector('.planet-subheader--min');
const planetMoonsElem = document.querySelector('.planet-subheader--moons');


function displayPlanet(planet) {
    planetOverlayButton.classList.add(planet.name);
    headerPlanetElem.innerHTML = planet.name.toUpperCase();
    latinPlanetElem.innerHTML = planet.latinName.toUpperCase();
    planetDescElem.innerHTML = planet.desc;

    planetCircumferenceElem.innerHTML = `${planet.circumference.toLocaleString()} km`;
    planetDistanceElem.innerHTML = `${planet.distance.toLocaleString()} km`;
    planetMaxTempElem.innerHTML = `${planet.temp.day} C`;
    planetMinTempElem.innerHTML = `${planet.temp.night} C`;

    if(planet.moons.length == 0) { 
        planetMoonsElem.innerHTML = '-';
    } else {    
        planetMoonsElem.innerHTML = planet.moons.join(', ');
    }
    
    overlayElem.classList.remove('hidden');
    wrapperElem.classList.add('hidden');
};

export { displayPlanet } 