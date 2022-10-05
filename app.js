const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");

app.use(cors)
app.use(express.json())




const foodItemsRoute = require('./Routes/foodItems.route')

app.use('/api/v1/foodItems', foodItemsRoute)























app.get("/", (req, res) => res.send("Hello World! welcome to cooking bird server"));
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;