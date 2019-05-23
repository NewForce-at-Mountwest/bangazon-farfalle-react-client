import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeePage from "./Employees/EmployeePage"
import ComputerPage from "./Computers/ComputerPage"
import DepartmentPage from "./Departments/DepartmentPage"
import TrainingPage from "./TrainingPrograms/TrainingPage"
import EmployeeAPIManager from '../modules/EmployeeAPIManger';
import EmployeeEditForm from "./Employees/EmployeeEditForm";
import NewEmployeeForm from "./Employees/NewEmployeeForm";


class ApplicationViews extends Component {

  state = {
        employees:[] ,
        computers: [],
        departments: [],
        training: []
    }

    componentDidMount(){
        const newState = {};
        EmployeeAPIManager.getAllEmployees()
        .then(response => {
            newState.employees = response;
            this.setState(newState);
        })
    }



    addNewEmployee = (employeeObject)=> {
        const newState={};
        EmployeeAPIManager.postNewEmployee(employeeObject)
        .then(()=>
            EmployeeAPIManager.getAllEmployees()
        ).then(response=> {
            newState.employees = response
            this.setState(newState);
        })
    }


    editEmployee = (employeeObject) => {
        const newState = {};
        EmployeeAPIManager.updateEmployee(employeeObject)
        .then(()=> EmployeeAPIManager.getAllEmployees())
        .then(response => {
            newState.employees = response;
            this.setState = newState;
        })

    }



 render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <EmployeePage {...props} employees={this.state.employees} />
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <NewEmployeeForm employees = {this.state.employees} addNewEmployee={this.addNewEmployee} {...props}/>
                }} />
                <Route exact path="/employees/:employeeId(\d+)/edit" render={(props) => {
                    return <EmployeeEditForm employees={this.state.employees} {...props} editEmployee={this.editEmployee}/>
                }}/>
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