const express = require("express");

const app = express();

// Form data is URL encoded
app.use(express.urlencoded({ extended: false }));

let data = {};

// Add a GET handler on the "/data" route that responds with the current `data`
// in an `application/json` response body.

app.get("/data", (req, res) => {
    res.send(data)
})

// Add a POST handler on the "/data" route that updates the current `data` from
// the request body.

app.post("/data", (req, res) => {
    console.log(req.body)
})

module.exports = app;
