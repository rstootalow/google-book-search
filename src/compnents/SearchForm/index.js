import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
            <label className="BookSearchLabel"><h3>Search For Any Book</h3></label>
            <br></br>
            <input className="col-12 form-control"
                value={props.search}
                type="text"
                name="searchBook"
                placeholder="Enter Title of Any Book Here"
                onChange={props.handleInputChange}
            />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}

//export searchForm
export default SearchForm