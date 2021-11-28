// responsibility to determine which view of app should be renedered depending on what URL in browser is 
//works in tandem with NavBar
//listen for URL to change , when it does change evaluate each route , whichever matches will render

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { NewEmployeeForm } from "./Employees/NewEmployeeForm"
import { KandyKorner } from "./KandyKorner"
import { LocationsList } from "./Locations/LocationsList"
import { NavBar } from "./Nav/NavBar"
import { ProductsList } from "./Products/ProductList"


export const ApplicationViews = () => {
    return (
        <>
           

            <h1> Kandy Korner  </h1>
            
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/locations">
                <LocationsList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
                <Route exact path="/employees/create">
                    <NewEmployeeForm />
                </Route>

            <Route path="/products">
                <ProductsList />
            </Route>

        </>
    )
}



//**RECAP **//
//need react router  dom 3rd party
//need Link component to define anchor tags, this broadcasts message that URL has changed 
//Route component listens for that even ten displays the appropriate component