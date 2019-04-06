const request = require("request");
const { metric } = require("../helpers");

module.exports = function(app) {
  app.get("/special/subgap", (req, res) => {
    const baseURL = `https://api.prouser123.me/youtube/channel/username/`;

    request(baseURL + "pewdiepie", function(error, response, body) {
      const pewds = JSON.parse(body).subscribers;

      request(baseURL + "tseries", function(error, response, body) {
        const tseries = JSON.parse(body).subscribers;

        res.send({
          schemaVersion: 1,
          label: "sub gap",
          message: metric(pewds - tseries),
          color: "red",
          namedLogo: "youtube"
        });
      });
    });
  });

  app.get("/special/dogbomb1/lastratio", (req, res) => {
    const url = "https://api.prouser123.me/twitter/status/1114286592737210368";
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      res.send({
        schemaVersion: 1,
        label: `dogbomb1's last stand`,
        message:
          ((json.likes / json.user.followers) * 100).toString().split(".")[0] +
          "% like/follower ratio",
        color: "blue"
      });
    });
  });
};
