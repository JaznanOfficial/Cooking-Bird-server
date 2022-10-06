const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");

app.use(cors())
app.use(express.json())




const foodItemsRoute = require('./Routes/foodItems.route')

app.use('/api/v1/foodItems', foodItemsRoute)























app.get("/", (req, res) => {
    try {
        res.send("Welcome to cooking bird server")
    } catch (error) {
       console.log(error.message) 
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;