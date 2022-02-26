function getQuote(){
    const guote = fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(json => {document.getElementById("quote").innerHTML = json.quote})
}
// getQuote()

const student = {"name": "eva",
"data":[1, 2, 3]};

console.log(student.data[2])