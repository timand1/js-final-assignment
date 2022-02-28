/* Modul för att samla API kod på samma plats (API-key, fetch) */

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';

async function getAPI() {
    const URL = BASE_URL + '/keys'
    const response = await fetch(URL, {
        method: 'POST'
    });
    const data = await response.json();
    return data.key
}


async function getBodies() {
    const apiKey = await getAPI();
    const URL = BASE_URL + '/bodies';
    const response = await fetch(URL, {
        method: 'GET',
        headers: {'x-zocom': apiKey }
    })
    const data = await response.json();
    console.log(data.bodies)
    return data.bodies;
}

export { getBodies }