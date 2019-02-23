const d = new Date();
    
const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

const hostname = window.location.hostname;

window.onload = function() {
    row1();
    row2();
    row3();
    debug_row1();
};

function row1() {
    const row1 = document.getElementById("row1");
    
    // Set badge source
    row1.childNodes[3].childNodes[0].src = `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${days[d.getDay()]}`;

    // Set display link (dynamic)
    row1.childNodes[1].childNodes[0].href = `./is-it/${days[d.getDay()]}`
    
    // Set display address (dynamic)
    row1.childNodes[1].childNodes[0].childNodes[0].innerHTML = `/is-it/${days[d.getDay()]}`
}

function row2() {
    const row2 = document.getElementById("row2");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Set badge source
    row2.childNodes[3].childNodes[0].src = `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${days[tomorrow.getDay()]}`;

    // Set display link (dynamic)
    row2.childNodes[1].childNodes[0].href = `./is-it/${days[tomorrow.getDay()]}`

    // Set display address (dynamic)
    row2.childNodes[1].childNodes[0].childNodes[0].innerHTML = `/is-it/${days[tomorrow.getDay()]}`
}

function row3() {
    const row3 = document.getElementById("row3");
    
    // Set badge source
    row3.childNodes[3].childNodes[0].src = `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2Finvalid`;
}

function debug_row1() {
    const row = document.getElementById("debug_row1");

    // Set badge source relative to hostname
    row.childNodes[3].childNodes[0].src = `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fdebug%2Froutes%2Fformatted`;
}