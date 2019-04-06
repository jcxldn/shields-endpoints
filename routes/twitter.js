const request = require("request");
const { metric } = require("../helpers");

function notFound(res) {
  res.send({
    schemaVersion: 1,
    label: `twitter`,
    message: "user not found",
    color: "red"
  });
}

module.exports = function(app) {
  app.get("/twitter/followers/:handle", (req, res) => {
    const url = `https://api.prouser123.me/twitter/handle/${req.params.handle}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (json.code != undefined) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `followers`,
          message: metric(json.followers),
          color: "blue"
        });
      }
    });
  });

  app.get("/twitter/following/:handle", (req, res) => {
    const url = `https://api.prouser123.me/twitter/handle/${req.params.handle}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (json.code != undefined) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `following`,
          message: metric(json.following),
          color: "blue"
        });
      }
    });
  });

  app.get("/twitter/likes/:handle", (req, res) => {
    const url = `https://api.prouser123.me/twitter/handle/${req.params.handle}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (json.code != undefined) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `likes`,
          message: metric(json.likes),
          color: "blue"
        });
      }
    });
  });

  app.get("/twitter/tweets/:handle", (req, res) => {
    const url = `https://api.prouser123.me/twitter/handle/${req.params.handle}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (json.code != undefined) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `tweets`,
          message: metric(json.tweets),
          color: "blue"
        });
      }
    });
  });

  app.get("/twitter/verified/:handle", (req, res) => {
    const url = `https://api.prouser123.me/twitter/handle/${req.params.handle}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (json.code != undefined) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `verified`,
          message: json.verified ? "yes" : "no",
          color: json.verified ? "brightgreen" : "red"
        });
      }
    });
  });
};
