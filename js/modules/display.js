/* 
    Modul för att samla skapandet och displayandet av planeterna och deras information 
    samt att visa overlayen där informationen ska visas
*/

const wrapperElem = document.querySelector('.wrapper');
const overlayElem = document.querySelector('.overlay');
const planetInfoButton = document.querySelector('.overlay-button');

const headerPlanetElem = document.querySelector('.planet-description h1');
const latinPlanetElem = document.querySelector('.planet-description h2');
const planetDescElem = document.querySelector('.planet-description p');

const planetCicumference = document.querySelector('.info-header--circumference');
const planetDistanceElem = document.querySelector('.info-header--distance');
const planetMaxTemp = document.querySelector('.info-header--max');
const planetMinTemp = document.querySelector('.info-header--min');
const planetMoonsElem = document.querySelector('.info-header--moons');


function displayPlanet(planet) {
    planetInfoButton.classList.add(planet.name);
    headerPlanetElem.innerHTML = planet.name.toUpperCase();
    latinPlanetElem.innerHTML = planet.latinName.toUpperCase();
    planetDescElem.innerHTML = planet.desc;

    planetCicumference.innerHTML = `${planet.circumference.toLocaleString()} km`;
    planetDistanceElem.innerHTML = `${planet.distance.toLocaleString()} km`;
    planetMaxTemp.innerHTML = `${planet.temp.day} C`;
    planetMinTemp.innerHTML = `${planet.temp.night} C`;
    if(planet.moons.length == 0) { 
        planetMoonsElem.innerHTML = '-';
    } else {    
        planetMoonsElem.innerHTML = planet.moons.join(', ');
    }
    overlayElem.classList.remove('hidden');
    wrapperElem.classList.add('hidden');
};

export { displayPlanet } 