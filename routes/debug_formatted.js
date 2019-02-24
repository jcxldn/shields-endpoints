const request = require("request");

function getDataURL(req) {
  return (
    req.protocol +
    "://" +
    req.get("host") +
    req.originalUrl.replace("/formatted", "")
  );
}

module.exports = function(app) {
  app.get("/debug/routes/formatted", (req, res) => {
    request(getDataURL(req), function(error, response, body) {
      res.send({
        schemaVersion: 1,
        label: `routes`,
        message: JSON.parse(body).length.toString(),
        color: "blue"
      });
    });
  });

  app.get("/debug/datetime/formatted", (req, res) => {
    request(getDataURL(req), function(error, response, body) {
      res.send({
        schemaVersion: 1,
        label: `date & time`,
        message: body,
        color: "blue"
      });
    });
  });

  app.get("/debug/useragent/formatted", (req, res) => {
    res.send({
      schemaVersion: 1,
      label: `user agent`,
      message: req.get("User-Agent"),
      color: "blue"
    });
  });
};
