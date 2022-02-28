// function = country website theke j kono 6 ta country niye website e show korbo
// website like e 34 ta country object AudioScheduledSourceNode. tar moddho theke randomly 6 ta country nibo 
// country er flag show korbo er niche name currency population niye ekta div hobe jeta child hishebe append korbo 
function showCountries(){
    const countryWebSite = fetch("https://restcountries.com/v3.1/currency/euro")
    .then(response => response.json())
    .then(countries =>{
        document.getElementById("loader").style.display = "none";
        getCountries(countries)

    })

}
showCountries()

// step1:countries array theke randomly ekta country select korbo 
function getCountries(countries){
    for(let i = 0; i < 6 ; i++){
        let index = Math.round(Math.random() * countries.length);
        let country = countries[index];
        console.log(country)
        const oneCountry = makeOneCountry(country);
        document.getElementById("countries").appendChild(oneCountry);
    }
}
// function get currency 
const getCurrency = country => {
    const currencies = country.currencies;
    for(let property in currencies){
        return currencies[property].name;
    }   
}
function makeOneCountry(country){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("country")
    mainDiv.innerHTML = `<h1 class = "text-3xl text-center font-semibold">${country.name.official}</h1>
    <img class = "flagImg" src = ${country.flags.svg}>
    <p class = "font-semibold">Capital: ${country.capital[0]}</p>
    <p class = "font-semibold">Currencies:${getCurrency(country)}</p>
    <p class = "font-semibold">Population: ${country.population}</p>
    <p class = "font-semibold">Area: ${country.area}</P>
    <a type= "button" class = "bg-slate-800 text-white rounded p-2 m-2" href = "${country.maps.googleMaps}" target = "_blank">see location</a>
    `;
    return mainDiv;

}

// function = search kore country show korbo browser e 
// step1:input e country name dibo 
// step2:input value url e last directory te add korbo 
// step3: oi url e fetch kore json e convert korbo 
// step4: same vabe shob info show korbo

function showSearchedCountry(){
    const countryName = document.getElementById("input").value ;
    console.log(countryName);
    const countryURL = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json());
    console.log(countryURL)
    countryURL.then(countries=> {
        // hide all countries
        document.getElementById("countries").style.display = "none";
        country = countries[0];
        console.log("searched one country:", country)
        const searchedCountry = makeOneCountry(country);
        console.log("innerHTML:", searchedCountry)
        document.getElementById("searchedCountry").appendChild(searchedCountry);
        document.getElementById("alert").style.display = "none";
        
    })
    .catch(error => {console.log("error:", error)
    document.getElementById("alert").style.display = "block"}

    )}
document.getElementById("input").addEventListener("change", function(){
    document.getElementById("searchedCountry").innerHTML = "";
})

