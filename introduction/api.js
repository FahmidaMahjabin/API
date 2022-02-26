const shop = {
    name: "rosh",
    loaction: "Jonson road",
    items: {
        ladies: {
            bag: ["red bag", "velbet bag"]
        },
        gents: {watch: ["raymond", "times", "all time"]}

    }
};
// console.log(shop);
const stringfied = JSON.stringify(shop);
console.log(stringfied)
const object = JSON.parse(stringfied);
// console.log(object)

fetch('https://reqres.in/api/users')
  .then(response =>{
      const jsonOfResponse = response.json();
      console.log("json fprmat of response", jsonOfResponse);
      return jsonOfResponse;})
  .then(data => console.log('data:',data))

console.log(fetch('https://reqres.in/api/users'))

function loadUsers(){
    const jsonResponse = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    console.log("json format of response:", jsonResponse);
    jsonResponse.then(listOfData => {
        for(let data of listOfData ){
            const li = document.createElement("li");
            li.innerHTML = data.name;
            document.getElementById("users").appendChild(li);
        };
    });
}
    
function addNameToList(listofData){
    for(let data of listofData ){
        const li = document.createElement("li");
        li.innerHTML = data.name;
        document.getElementById("users").appendChild(li)
    }

}
