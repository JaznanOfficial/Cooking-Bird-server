const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");

app.use(cors())
app.use(express.json())




const foodItemsRoute = require('./Routes/foodItems.route')
const usersRoute = require('./Routes/users.route')
const addressesRoute = require('./Routes/addresses.route')
const ordersRoute = require('./Routes/orders.route')

app.use('/api/v1/foodItems', foodItemsRoute)
app.use('/api/v1/users',usersRoute)
app.use('/api/v1/addresses',addressesRoute)
app.use('/api/v1/orders',ordersRoute)





















app.get("/", (req, res) => {
    try {
        res.send("Welcome to cooking bird server")
    } catch (error) {
       console.log(error.message) 
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;