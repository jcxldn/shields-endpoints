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
                label: 'sub gap',
                message: metric(pewds - tseries),
                color: "red",
                namedLogo: "youtube"
            });
        });
    });
  });
};
