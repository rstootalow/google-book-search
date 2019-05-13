// DEPENDENCIES

//require express
const express = require("express");
//require mongoose
const mongoose = require("mongoose");
//require all of the routes
const routes = require("./routes");

//instantiate express
const app = express();
const PORT = process.env.PORT || 3000;

//middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static routes 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

//SET UP CONNECTION  TO MONGO
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch");

//START SERVER FOR API SEARCHING
app.listen(PORT, function() {
    console.log(`The Server is listening on PORT ${PORT}`);
});