import React, { Component } from "react";
import API from "../utils/API";
import MainContent from "../components/MainContent";
import { Container } from "../components/Layout";
import SavedSearch from "../components/SavedSearch";

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
                <MainContent>
                    <Container>
                        <SavedSearch savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                    </Container>
                </MainContent>
            </Container>
        )
    }
}

//export SaveBook component
export default SaveBook;