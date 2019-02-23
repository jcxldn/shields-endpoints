module.exports = function(app) {

  app.get("/debug/routes", (req, res) => {
      let routes = [];
      app._router.stack.forEach(function(r) {
          if (r.route && r.route.path) {
              routes.push(r.route.path);
            }
        });
        res.send(routes);
    });
};
