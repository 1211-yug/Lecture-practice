/* --- API --- */
// Dog API
// Corona API
// Movie API
// Cricket API

function getDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    const url1 = "https://dog.ceo/api/breeds/image/random";
    const url2 = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("dogResult").innerHTML = `
            <div class="card">
                <img src="${data.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult").innerHTML = "Something went wrong"
        })
    fetch(url1)
        .then(response => {
            return response.json();
        })
        .then(data1 => {
            console.log(data1);
            document.getElementById("dogResult1").innerHTML = `
            <div class="card">
                <img src="${data1.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult1").innerHTML = "Something went wrong"
        })
    fetch(url2)
        .then(response => {
            return response.json();
        })
        .then(data2 => {
            console.log(data2);
            document.getElementById("dogResult2").innerHTML = `
            <div class="card">
                <img src="${data2.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult2").innerHTML = "Something went wrong"
        })
}

function getMovie() {
    const url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";

    const random = url[Math.floor(Math.random() * url.length)]

    fetch(url, random)
        .then(response => {
            return response.json();
        })
        .then(random => {
            console.log(random);
            // document.getElementById("movieResult").innerHTML = `<div class="movieCard">
            //     <img src="${random.Poster}" alt=""/>
            //     <h3 class="mvtitle">${random.Title}</h3>
            //     <h4 class="year">${random.Year}</h4>
            //     <h5 class="time">${random.Runtime}</h5>
            // </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("movieResult").innerHTML = "Something went wrong"
        })
}