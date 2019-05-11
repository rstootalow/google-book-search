//import axios for routing purposes
import axios from "axios";

export default {
    // leverage google book search api
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    };

    //get all books
    getBooks: function() {
        return: axios.get("/api/books")
    },

    //get book with specific id
    getBook: function() {
        return axios.get("/api/books" + id);
    },

    //save book to database
    saveBook: function(savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    //delete books from database
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    }
}