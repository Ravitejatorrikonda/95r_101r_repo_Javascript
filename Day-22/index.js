/**
 * 
 * 
 * Weather app:-
 * ---------------
 * 
 * 
 * 
 */


function showWeather() {
    let input = document.getElementById("input")
    getWeather(input.value);
}


async function getWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1b32c3b37fmsh869396a329e31bbp12c15djsn426915319b0e',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        showData(result.main.temp)
    } catch (error) {
        console.error(error);
    }


}

function showData(temp) {
    let main = document.getElementById("main")
    main.innerHTML = `
 <h3>Temparature : ${temp}</h3>
 `
}