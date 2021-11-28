// this module is responsible for building nav bar to utilize reat router library we installed 

import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>   
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>   
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>   
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>   
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("kandy_customer")
                    }
                }>Logout!</Link>
            </li>
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Service Tickets</Link>   
            </li> */}
        </ul>
    )
}


//<Link creates an anchored tag
// to= is the href 