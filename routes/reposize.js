const request = require("request");
const { createRequestOptions } = require("../helpers");

module.exports = function(app) {
  app.get("/reposize/:owner/:repo", (req, res) => {
    const url = `https://api.prouser123.me/reposize/${req.params.owner}/${req.params.repo}`;
    request(createRequestOptions(url), function(error, response, body) {
      res.send({
        schemaVersion: 1,
        label: "repo size",
        message: JSON.parse(body).size,
        color: "blue"
      });
    });
  });
};
