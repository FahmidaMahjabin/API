const jsonData = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())

function loadPhotos(){
    
    jsonData.then(listOfData => addAPhoto(listOfData))
}

// function = addAPhoto
// step1:listofdata(1-5000) theke randomly ekta data select korbo 
// step2:oi index e jei data thakbe tar id ekta tag baniye show korbo 
// step2:oi index er image take img tag e show korbo 
// step3:oi index er title keo show korbo 
// step4:shob gulo ekta div er moddhe thakbe jeta kono ekta button e click korle body te add hobe 

function makeArandomNumber(){
    const number = Math.round(Math.random()*5000);
    return number
}
console.log(makeArandomNumber())

function addAPhoto(array){
    const aPhoto = array[Math.round(Math.random()* array.length)];
    console.log(aPhoto)
    const photoSection = document.createElement("div");
    photoSection.setAttribute("class", "col-4 bg-info g-4")
    photoSection.innerHTML = `<h2>${aPhoto.title}</h2>
    <img src = ${aPhoto.url} class = "img-fluid">`
    document.getElementById("container").appendChild(photoSection)

}
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));

const student = {name: "eva", 
roll: 30};
const stringified = JSON.stringify(student);
console.log(stringified);
// console.log(stringified.name)
const parsed = JSON.parse(stringified);
console.log(parsed)
