//https://expressjs.com/en/starter/static-files.html

"use strict";
const express = require('express');
const app = express();
const port = 3000
app.use(express.static('SCOPE'));


app.listen(port, function() {
    console.log(`starting server at http://localhost:${port}`);
    console.log(`To view our city go to http://localhost:${port}/SCOPE.html in your favorite web browser. (Chrome preferred)`);
});