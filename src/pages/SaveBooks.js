import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../compnents/Jumbotron";
import { Container } from "../compnents/Grid";
import SavedResult from "../compnents/SavedResult";

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    // after component mounts, grab all books currently saved to database
    componentDidMount() {
        API.getBooks().then(
            res => this.setState({ savedBooks: res.data })
        ).catch(err => console.log(err))
    }

    //removing book
    handleDeleteButton = id => {
        API.deleteBook(id).then(
            res => this.componentDidMount()
        ).catch(err => console.log(err))
    }

    //render
    render() {
        return (
            <Container fluid className="container">
                <Jumbotron>
                    <Container>
                        <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                    </Container>
                </Jumbotron>
            </Container>
        )
    }
}

//export SaveBook component
export default SaveBook;