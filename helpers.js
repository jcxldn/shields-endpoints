// From shields.io - https://github.com/badges/shields/blob/master/lib/text-formatters.js
// Given a number, string with appropriate unit in the metric system, SI.
// Note: numbers beyond the peta- cannot be represented as integers in JS.
const metricPrefix = ["k", "M", "G", "T", "P", "E", "Z", "Y"];
const metricPower = metricPrefix.map((a, i) => Math.pow(1000, i + 1));
function metric(n) {
  for (let i = metricPrefix.length - 1; i >= 0; i--) {
    const limit = metricPower[i];
    if (n >= limit) {
      n = Math.round(n / limit);
      if (n < 1000) {
        return `${n}${metricPrefix[i]}`;
      } else {
        return `1${metricPrefix[i + 1]}`;
      }
    }
  }
  return `${n}`;
}

// Day helpers

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const workDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

function isDayToday(day) {
  const d = new Date();

  return day == days[d.getDay()] ? true : false;
}

function isWorkDayToday() {
  return workDays.includes(days[new Date().getDay()]);
}

// Capitalise first letter
function capitaliseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Export
module.exports = { metric, isDayToday, isWorkDayToday, days, capitaliseFirst };
