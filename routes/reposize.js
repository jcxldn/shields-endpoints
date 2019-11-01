const reposize = require("reposize");
const { metric, createRequestOptions } = require("../helpers");

function notFound(res) {
  res.send({
    schemaVersion: 1,
    label: `twitter`,
    message: "user not found",
    color: "red"
  });
}

module.exports = function(app) {
  app.get("/reposize/:owner/:repo", (req, res) => {
    reposize.GetPrettyBytes(req.params.owner, req.params.repo).then(data => {
      res.send({
        schemaVersion: 1,
        label: "repo size",
        message: data,
        color: "blue"
      });
    });
  });
};
