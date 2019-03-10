const request = require("request");
const { metric } = require("../helpers");

function notFound(res) {
  res.send({
    schemaVersion: 1,
    label: `views`,
    message: "video not found",
    color: "red"
  });
}

module.exports = function(app) {
  app.get("/youtube/views/:videoId", (req, res) => {
    const url = `https://api.prouser123.me/youtube/video/${req.params.videoId}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `views`,
          message: metric(json.views),
          color: "blue"
        });
      }
    });
  });

  app.get("/youtube/likes/:videoId", (req, res) => {
    const url = `https://api.prouser123.me/youtube/video/${req.params.videoId}`;
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

  app.get("/youtube/dislikes/:videoId", (req, res) => {
    const url = `https://api.prouser123.me/youtube/video/${req.params.videoId}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `dislikes`,
          message: metric(json.dislikes),
          color: "blue"
        });
      }
    });
  });

  app.get("/youtube/comments/:videoId", (req, res) => {
    const url = `https://api.prouser123.me/youtube/video/${req.params.videoId}`;
    request(url, function(error, response, body) {
      const json = JSON.parse(body);
      if (response.statusCode != 200) {
        notFound(res);
      } else {
        res.send({
          schemaVersion: 1,
          label: `comments`,
          message: metric(json.comments),
          color: "blue"
        });
      }
    });
  });
};
