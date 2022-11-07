const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, 'public');
const assetsFolder = path.join(__dirname, 'assets');

app.use(express.static(assetsFolder))
app.use(express.static(publicFolder))
// Serve static web pages from the `public` folder, and resources from the
// `assets` folder.

app.listen(5001)

module.exports = app;
