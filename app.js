/**
 * Plesk (and similar hosts) often default the Node startup file to app.js.
 * This project is Next.js — the real server is started via next().prepare().
 */
"use strict";

const http = require("http");
const { parse } = require("url");
const next = require("next");

const hostname = process.env.HOST || "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`Ready on http://${hostname}:${port}`);
    });
});
