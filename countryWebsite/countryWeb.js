// function = country website theke j kono 6 ta country niye website e show korbo
// website like e 34 ta country object AudioScheduledSourceNode. tar moddho theke randomly 6 ta country nibo 
// country er flag show korbo er niche name currency population niye ekta div hobe jeta child hishebe append korbo 
function showCountries(){
    const countryWebSite = fetch("https://restcountries.com/v3.1/currency/euro")
    .then(response => response.json())
    .then(countries => getCountryInfo(countries) )

}
showCountries()

// step1:countries array theke randomly ekta country select korbo 
function getCountryInfo(countries){
    for(let i = 0; i < 6 ; i++){
        let index = Math.round(Math.random() * countries.length);
        let country = countries[index];
        console.log(country)
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("country")
        mainDiv.innerHTML = `<h1 class = "text-3xl text-center font-semibold">${country.name.official}</h1>
        <img class = "flagImg" src = ${country.flags.svg}>
        <p class = "font-semibold">Capital: ${country.capital[0]}</p>
        <p class = "font-semibold">Currencies: ${country.currencies.EUR.name}</p>
        <p class = "font-semibold">Population: ${country.population}</p>
        <p class = "font-semibold">Area: ${country.area}</P>
        <a type= "button" class = "bg-slate-800 text-white rounded p-2 m-2" href = "${country.maps.googleMaps}" target = "_blank">see location</a>
        `;
        document.getElementById("countries").appendChild(mainDiv);
    }
}