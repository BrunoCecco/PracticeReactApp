import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // function to redirect page to 'about' page:
    // setTimeout(() => {props.history.push('/about')}, 2000);
    return(
        <nav className="nav-wrapper red darken">
            <div className="container">
                <a className="brand-logo">NEWSPAPER</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
// link tags prevent page from refreshing
// navlink tags allow for different styles in different active pages
export default withRouter(Navbar);