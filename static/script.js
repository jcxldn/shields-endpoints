const d = new Date();

const hostname = window.location.hostname;

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

console.log("web client onload DateAndTime: " + d);

window.onload = function() {
  setup_is_it();
  setup_youtube();
  setup_debug();
};

class BaseRow {
  constructor(row) {
    this.row = row;
  }

  setBadgeSource(source) {
    this.row.childNodes[3].childNodes[0].src = source;
  }

  setDisplayLink(source) {
    this.row.childNodes[1].childNodes[0].href = source;
  }

  setDisplayAddress(source) {
    this.row.childNodes[1].childNodes[0].childNodes[0].innerHTML = source;
  }

  setDisplayDual(source) {
    this.setDisplayLink(source);
    this.setDisplayAddress(source);
  }
}

function setup_is_it() {
  let element = new BaseRow(document.getElementById("is_it_today"));
  element.setDisplayDual(`/is-it/${days[d.getDay()]}`);
  element.setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${
      days[d.getDay()]
    }`
  );

  tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  element = new BaseRow(document.getElementById("is_it_tomorrow"));
  element.setDisplayDual(`/is-it/${days[tomorrow.getDay()]}`);
  element.setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${
      days[tomorrow.getDay()]
    }`
  );

  new BaseRow(document.getElementById("is_it_invalid")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2Finvalid`
  );
}

function setup_youtube() {
  // Get row and set badge source relative to host
  new BaseRow(document.getElementById("youtube_views")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fviews%2FYbJOTdZBX1g`
  );
  new BaseRow(document.getElementById("youtube_likes")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Flikes%2FYbJOTdZBX1g`
  );
  new BaseRow(document.getElementById("youtube_dislikes")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fdislikes%2FYbJOTdZBX1g`
  );
  new BaseRow(document.getElementById("youtube_comments")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fcomments%2FYbJOTdZBX1g`
  );
  new BaseRow(document.getElementById("youtube_views_invalid")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fviews%2Finvalid`
  );
}

function setup_debug() {
  // Get row and set badge source relative to host
  new BaseRow(document.getElementById("debug_routes")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fdebug%2Froutes%2Fformatted`
  );
  new BaseRow(document.getElementById("debug_datetime")).setBadgeSource(
    `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fdebug%2Fdatetime%2Fformatted`
  );
  new BaseRow(document.getElementById("debug_useragent")).setBadgeSource(
    `https://img.shields.io/endpoint.svg?label=badge%20user%20agent&url=https%3A%2F%2F${hostname}%2Fdebug%2Fuseragent%2Fformatted`
  );
}
