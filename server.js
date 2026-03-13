const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const PORT = 3000;

// Watch public folder for changes and notify browser
const lrServer = livereload.createServer();
lrServer.watch(path.join(__dirname, "public"));

const app = express();

// Inject livereload script into HTML responses
app.use(connectLivereload());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
