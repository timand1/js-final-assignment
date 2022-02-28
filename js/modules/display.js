/* Modul för att samla skapandet och displayandet av planeterna och dess information */

const wrapperElem = document.querySelector('.wrapper');
const overlayElem = document.querySelector('.overlay');
const planetInfoElem = document.querySelector('.overlay--planets');

const headerPlanetElem = document.querySelector('.planet-description h1');
const latinPlanetElem = document.querySelector('.planet-description h2');
const planetDescElem = document.querySelector('.planet-description p');

const planetCicumference = document.querySelector('.info-header--circumference');
const planetDistanceElem = document.querySelector('.info-header--distance');
const planetMaxTemp = document.querySelector('.info-header--max');
const planetMinTemp = document.querySelector('.info-header--min');
const planetMoonsElem = document.querySelector('.info-header--moons');


async function displayPlanet(i, planets) {
    planetInfoElem.classList.add(planets[i].name);
    headerPlanetElem.innerHTML = planets[i].name.toUpperCase();
    latinPlanetElem.innerHTML = planets[i].latinName.toUpperCase();
    planetDescElem.innerHTML = planets[i].desc;
    planetCicumference.innerHTML = `${planets[i].circumference} km`;
    planetDistanceElem.innerHTML = `${planets[i].distance} km`;
    planetMaxTemp.innerHTML = `${planets[i].temp.day} C`;
    planetMinTemp.innerHTML = `${planets[i].temp.night} C`;
    planetMoonsElem.innerHTML = planets[i].moons.join(', ');

    overlayElem.classList.remove('hidden');
    wrapperElem.classList.add('hidden');

};
 


export { displayPlanet, wrapperElem, overlayElem, planetInfoElem } 