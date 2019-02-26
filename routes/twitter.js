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
    const url = `https://pro-web-api.herokuapp.com/twitter/handle/${
      req.params.handle
    }`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
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
    const url = `https://pro-web-api.herokuapp.com/twitter/handle/${
      req.params.handle
    }`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
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
    const url = `https://pro-web-api.herokuapp.com/twitter/handle/${
      req.params.handle
    }`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
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
};
