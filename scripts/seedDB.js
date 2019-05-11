//require mongoose and necessary db models
const mongoose = require("mongoose");
const db = require("../models");

//connect mongoose 

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["George R.R. Martin"],
    description: "",
    image: "",
    link: "https://books.google.com/books?id=btpIkZ6X6egC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false",
    title: "A Game of Thrones",
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