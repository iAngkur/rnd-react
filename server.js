// server.js
import { createServer } from "http";
import { parse } from "url";
import { createRequestHandler } from "@remix-run/express"; // Not needed — just showing correct path
import jsonServer from "json-server";

// Create server
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Make sure db.json exists!
const middlewares = jsonServer.defaults();

// 👉 Manual CORS middleware (using ESM-style)
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

// Use default middlewares (gzip, static, etc.)
server.use(middlewares);

// Serve static files? Optional
// server.use(jsonServer.static('public'));

// Set up router
server.use(router);

// Start listening
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
  console.log(`📚 Data from db.json`);
  console.log(`🎯 Try visiting http://localhost:${PORT}/todos`);
});

export default server;
