const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");

app.get("/", (req, res) => res.send("Hello World! welcome to cooking bird server"));
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;