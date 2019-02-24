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

console.log("onload.DateAndTime: " + d);

window.onload = function() {
  new table1();
  new debugTable();
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

class table1 {
  constructor() {
    this.constructor.row1();
    this.constructor.row2();
    this.constructor.row3();
    this.constructor.row4();
    this.constructor.row5();
    this.constructor.row6();
    this.constructor.row7();
  }

  static row1() {
    const base = new BaseRow(document.getElementById("row1"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${
        days[d.getDay()]
      }`
    );

    // Set display link & address (dynamic)
    base.setDisplayDual(`/is-it/${days[d.getDay()]}`);
  }

  static row2() {
    const base = new BaseRow(document.getElementById("row2"));

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2F${
        days[tomorrow.getDay()]
      }`
    );

    // Set display link & address (dynamic)
    base.setDisplayDual(`/is-it/${days[tomorrow.getDay()]}`);
  }

  static row3() {
    const base = new BaseRow(document.getElementById("row3"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fis-it%2Finvalid`
    );
  }

  static row4() {
    const base = new BaseRow(document.getElementById("row4"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fviews%2FYbJOTdZBX1g`
    );
  }

  static row5() {
    const base = new BaseRow(document.getElementById("row5"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Flikes%2FYbJOTdZBX1g`
    );
  }

  static row6() {
    const base = new BaseRow(document.getElementById("row6"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fdislikes%2FYbJOTdZBX1g`
    );
  }

  static row7() {
    const base = new BaseRow(document.getElementById("row7"));

    // Set badge source
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fyoutube%2Fcomments%2FYbJOTdZBX1g`
    );
  }
}

class debugTable {
  constructor() {
    this.constructor.row1();
    this.constructor.row2();
    this.constructor.row1();
  }

  static row1() {
    const base = new BaseRow(document.getElementById("debug_row1"));

    // Set badge source relative to hostname
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fdebug%2Froutes%2Fformatted`
    );
  }

  static row2() {
    const base = new BaseRow(document.getElementById("debug_row2"));

    // Set badge source relative to hostname
    base.setBadgeSource(
      `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2F${hostname}%2Fdebug%2Fdatetime%2Fformatted`
    );
  }
}
