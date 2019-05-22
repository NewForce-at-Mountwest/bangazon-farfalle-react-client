import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeePage from "./Employees/EmployeePage"
import ComputerPage from "./Computers/ComputerPage"
import DepartmentPage from "./Departments/DepartmentPage"
import TrainingPage from "./TrainingPrograms/TrainingPage"

class ApplicationViews extends Component {

  state = {
        employees:[] ,
        computers: [],
        departments: [],
        training: []
    }



 render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <EmployeePage employees={this.state.employees} />
                }} />
                <Route path="/computers" render={(props) => {
                    return <ComputerPage computers={this.state.computers} />
                }} />
                <Route path="/departments" render={(props) => {
                    return <DepartmentPage departments={this.state.departments} />
                }} />
                <Route path="/training" render={(props) => {
                    return <TrainingPage training={this.state.training} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews