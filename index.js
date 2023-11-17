//Practica 1
let msg = "Hola mundo"

console.log(msg)

 document.addEventListener("DOMContentLoaded", init)

 function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.jjson")
 }

function loadData(url) {
    let json 
    fetch(url)
        .then(response => json = response.json())

    console.log(json)
}

function loadData (url) {
    fetch(url)
        .then(response => response.json())
        .then(data => pintaMishobbies(data))

}

function pintaMishobbies(json) {
    console.log(json)
}