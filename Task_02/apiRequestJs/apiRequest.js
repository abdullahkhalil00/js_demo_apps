const button = document.getElementById('show')
let text = document.getElementById('button')
let name = document.getElementById('name');
let image = document.getElementById('personImage');
let email = document.getElementById('email');
let country = document.getElementById('country');

button.addEventListener('click', () => {
    console.log("Button Clicked")
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then(function (response) {
            text.style.display = 'none'
            console.log(response);
            image.src = response.results[0].picture.large;
            name.textContent = response.results[0].name.first;
            email.textContent = response.results[0].email;

            country.textContent = response.results[0].location.country;
        })
        .catch(function () {
            text.innerHTML = `<h1>API fetch failed</h1>`
            console.log("API fetch failed")
        })
})