const express = require("express");
const path = require("path");
const ejs = require("ejs")

const app = express();
const assetsFolder = path.join(__dirname, "assets")

// Serve static resources from the `assets` folder.
app.use(express.static(assetsFolder))
app.set("view engine", "ejs")

app.get("/time", (req, res) => {

  const date = new Date();
  const timeArray = [date.getHours(), date.getMinutes(), date.getSeconds()].map((a) => a < 10 ? "0" + a : a)
  const actualTime = timeArray.join(":")

  res.render("time.ejs", {
    theFullTime: date.toISOString(),
    theTime: actualTime
  })
})


// Add a GET handler that always responds successfully with the current time
// in a web page, using the following template:

/**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Time</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/script.js" defer></script>
  </head>
  <body>
    <time datetime="DATETIME">HH:MM:SS</time>
  </body>
</html>
*/

// Where:
//
// DATATIME is a valid global date and time string
// HH is current hour
// MM is current minutes
// SS is current seconds
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

module.exports = app;
