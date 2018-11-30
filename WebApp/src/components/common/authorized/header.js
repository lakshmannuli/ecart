import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" >E Cart</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link" >Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;