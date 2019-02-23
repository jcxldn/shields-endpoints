const request = require("request");

module.exports = function(app) {

  app.get("/debug/routes/formatted", (req, res) => {
    var dataURL = req.protocol + '://' + req.get('host') + req.originalUrl.replace("/formatted", "");
    request(dataURL, function(error, response, body) {
      res.send ({
        "schemaVersion": 1,
        "label": `debug: routes`,
        "message": JSON.parse(body).length.toString(),
        "color": "blue"
      })
    });
  });
};
