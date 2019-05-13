import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark text-center">
            <a className="navbar" href="/">
                <h2 className="text-secondary text-center">Google Book Search</h2>
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-warning text-white">Search Button</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-danger text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

//export Nav component
export default Nav;