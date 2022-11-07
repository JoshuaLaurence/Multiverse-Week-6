const express = require('express');

const app = express();

app.get("/:greeting", (req, res) => {
    res.send(`${(req.params.greeting).toUpperCase()}!`)
})
// Add a GET handler that always responds successfully with the route in
// uppercase, i.e., GET /hello should respond with the text body: HELLO!

module.exports = app;
