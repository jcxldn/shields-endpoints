// /badge/* endpoint for redirecting to img.shields.io

module.exports = function(app) {
  app.get("/badge/:path*?", (req, res) => {
    // Add the first part of the URL
    let url = `https://img.shields.io/endpoint.svg?url=https%3A%2F%2F`;

    // Add the request host plus a forward slash (%2F)
    const host = req.headers.host + "%2F";
    url += host;

    // Add the path to the url
    url += encodeURIComponent(req.params.path + req.params[0]);

    // Set the url as a temp redirect
    res.writeHead(302, { Location: url });
    res.send();
  });
};
