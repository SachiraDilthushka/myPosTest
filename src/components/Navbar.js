import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand" >MyPos</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Invoice</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/product" className="nav-link">Product</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/reports" className="nav-link">Reports</Link>
                        </li>
                    </ul>

                </div>

            </nav>
        )
    }
}
