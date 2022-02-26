function showPersonToBrowser(){
    const onePerson = fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(array => {console.log("first element of array:", array.results)
        const person = array.results[0];
        console.log("person:" , person)
        addPersonInfo(person)
        document.getElementById("person").style.display = "block";});
}


function addPersonInfo(person){
    document.getElementById("photo").setAttribute("src", `${person.picture.large}`);
    document.getElementById("name").innerHTML = `${person.name.title} ${person.name.first} ${person.name.last}`;
    document.getElementById("profile").innerHTML = `<p>Phone:${person.phone}</p>
    <p>Email:${person.email}</p>
    <p>Age:${person.dob.age}</p>
    <p>location:${person.location.state}, ${person.location.country}</P>`

}