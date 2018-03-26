import React, { Component } from 'react';
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <main className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <nav className="blue">
                        <div class="nav-wrapper">
                            <a class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/Authors'>Authors</Link></li>
                                <li><Link to='/About'>About</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </main>
    )
}

export default App;