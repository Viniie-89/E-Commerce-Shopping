const express = require("express");
const next = require("next");
const port = 3000 || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/shop", (req, res) => {
    app.render(req, res, "/Shop");
  });

  server.get("/about-us", (req, res) => {
    app.render(req, res, "/About");
  });
  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${3000}`);
  });
});
