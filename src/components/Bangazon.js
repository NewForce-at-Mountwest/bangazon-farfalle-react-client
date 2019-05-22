    
import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"

import "./Bangazon.css"
import './nav/NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"


class Bangazon extends Component {
    render() {
        return (
            <React.Fragment>
                <Route render={history => (
                    <NavBar { ...history } />
                )} />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Bangazon;