const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function isDayToday(day) {
  const d = new Date();

  return (day == days[d.getDay()])? true : false;
}

function isValidDay(day) {
  return (days.includes(day))
}

module.exports = function(app){
    
  app.get('/is-it/:day', (req, res) => {
    if (!isValidDay(req.params.day)) {
      res.send ({
        "schemaVersion": 1,
        "label": `is it`,
        "message": "invalid day",
        "color": "red"
      })
    }
    if (isDayToday(req.params.day)) {
      res.send ({
        "schemaVersion": 1,
        "label": `is it ${req.params.day}`,
        "message": "yes",
        "color": "brightgreen"
      })
      return
    } else {
      res.send ({
        "schemaVersion": 1,
        "label": `is it ${req.params.day}`,
        "message": "no",
        "color": "yellow"
      })
    }
  });
}