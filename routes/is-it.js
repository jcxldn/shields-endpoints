const { isDayToday, isWorkDayToday, days } = require("../helpers");

function isValidDay(day) {
  return days.includes(day);
}

module.exports = function(app) {
  app.get("/is-it/workday", (req, res) => {
    const yes = {
      schemaVersion: 1,
      label: `is it a workday`,
      message: "yes",
      color: "brightgreen"
    };

    const no = {
      schemaVersion: 1,
      label: `is it a workday`,
      message: "no",
      color: "yellow"
    };

    res.send(isWorkDayToday() ? yes : no);
  });

  app.get("/is-it/:day", (req, res) => {
    if (!isValidDay(req.params.day)) {
      res.send({
        schemaVersion: 1,
        label: `is it`,
        message: "invalid day",
        color: "red"
      });
      return;
    }
    if (isDayToday(req.params.day)) {
      res.send({
        schemaVersion: 1,
        label: `is it ${req.params.day}`,
        message: "yes",
        color: "brightgreen"
      });
      return;
    } else {
      res.send({
        schemaVersion: 1,
        label: `is it ${req.params.day}`,
        message: "no",
        color: "yellow"
      });
    }
  });
};
