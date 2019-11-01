const reposize = require("reposize");

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
