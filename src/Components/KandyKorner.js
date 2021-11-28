import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./Nav/NavBar";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
// import "./KandyKorner.css";



export const KandyKorner = () => {
   return <> 
        <Route
            render={() => {
                if (localStorage.getItem("kandy_customer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
};
