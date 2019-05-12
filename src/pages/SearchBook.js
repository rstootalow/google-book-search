import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../compnents/Jumbotron";
import { Container, Row, COl } from "../compnents/Grid";
import SearchForm from "../compnents/SearchFrom";
import SearchResult from "../compnents/SearchResult";

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take user input for book search
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.getGoogleSearchBooks(this.state.search).then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            } else {
                let results = res.data.items
                results = results.map(result => {
                    //store book information in newly created object
                    result = {
                        key: result.id,
                        id = result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                //reset state of books array to new array of searched for objects(books)
                this.setState({ books: results, error: ""})
            }
        }).catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks).then(
            this.setState({ message: alert("Book has been saved!")}).catch(
                err => console.log(err)
            )
        )
    }

    //render
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Find Your Favorite Books through the Google API!</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }
}

//export SearchBooks
export default SearchBooks