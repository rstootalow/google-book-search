//require mongoose and necessary db models
const mongoose = require("mongoose");
const db = require("../models");

//connect mongoose 

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: [],
    description: "",
    image: "",
    link: "",
    title: "",
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed)).then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    //catch error if present
    .catch(err => {
        console.log(err);
        process.exit(1);
    });