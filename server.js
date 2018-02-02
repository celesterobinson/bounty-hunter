const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

mongoose.connect("mongodb://localhost/bounty", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
})

//middlewarea
app.use(bodyParser.json());
app.use("/bounty", require("./routes/bounty"));

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});