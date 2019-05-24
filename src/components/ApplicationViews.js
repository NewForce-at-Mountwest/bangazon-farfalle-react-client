import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeePage from "./Employees/EmployeePage"
import ComputerPage from "./Computers/ComputerPage"
import DepartmentPage from "./Departments/DepartmentPage"
import TrainingPage from "./TrainingPrograms/TrainingPage"
import ComputerAPI from '../modules/ComputerAPI';
import ComputerForm from '../components/Computers/ComputerForm'
import ComputerEditForm from '../components/Computers/ComputerEditForm'
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


  componentDidMount() {
        const newState = {};
        EmployeeAPIManager.getAllEmployees()
        .then(response => (newState.employees = response))
        .then(ComputerAPI.getAll)
        .then(computers => (newState.computers = computers))
        .then(() => this.setState(newState))
      }
      addComputer = computerObject =>
      ComputerAPI.postComputer(computerObject)
        .then(() => ComputerAPI.getAll())
        .then(computers =>
          this.setState({
            computers: computers
          })
        );




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
            this.setState(newState);
        })

    }
    updateComputer = editedComputerObject => {
      return ComputerAPI.put(editedComputerObject)
        .then(() => ComputerAPI.getAll())
        .then(computers => {
          this.setState({
            computers: computers
          });
        });
    };

 render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <EmployeePage {...props} employees={this.state.employees} />
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <NewEmployeeForm employees = {this.state.employees} addNewEmployee={this.addNewEmployee} {...props}/>
                }} />
                <Route exact path="/computers" render={(props) => {
                    return <ComputerPage {...props}
                    updateComputer={this.updateComputer}
                    computers={this.state.computers} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)/edit" render={(props) => {
                    return <EmployeeEditForm employees={this.state.employees} {...props} editEmployee={this.editEmployee}/>
                }}/>
                <Route exact path="/computers/new" render={props => {
            return <ComputerForm {...props}
                addComputer={this.addComputer}
                computers={this.state.computers}/>
                }}/>
                 <Route exact path="/computers/:computerId(\d+)/edit" render={props => {
            return <ComputerEditForm {...props}
                updateComputer={this.updateComputer}
                computers={this.state.computers}/>
                }}/>
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