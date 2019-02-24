module.exports = function(app) {

  app.get("/debug/routes", (req, res) => {
      let routes = [];
      app._router.stack.forEach(function(r) {
          if (r.route && r.route.path && !r.route.path.endsWith('/formatted')) {
              routes.push(r.route.path);
            }
        });
        res.send(routes);
    });

    app.get("/debug/datetime", (req, res) => {
        res.send(new Date().toLocaleString());
      });
};
