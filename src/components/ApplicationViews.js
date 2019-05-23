import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeePage from "./Employees/EmployeePage"
import ComputerPage from "./Computers/ComputerPage"
import DepartmentPage from "./Departments/DepartmentPage"
import TrainingPage from "./TrainingPrograms/TrainingPage"
import ComputerAPI from '../modules/ComputerAPI';
import ComputerForm from '../components/Computers/ComputerForm'
import ComputerEditForm from '../components/Computers/ComputerEditForm'
class ApplicationViews extends Component {

  state = {
        employees:[] ,
        computers: [],
        departments: [],
        training: []
    }

    componentDidMount() {
        const newState = {};
        ComputerAPI.getAll()
          .then(computers => (newState.computers = computers))
          .then(() => this.setState(newState));
      }
      addComputer = computerObject =>
      ComputerAPI.postComputer(computerObject)
        .then(() => ComputerAPI.getAll())
        .then(computers =>
          this.setState({
            computers: computers
          })
        );

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
                    return <EmployeePage employees={this.state.employees} />
                }} />
                <Route exact path="/computers" render={(props) => {
                    return <ComputerPage {...props}
                    updateComputer={this.updateComputer}
                    computers={this.state.computers} />
                }} />
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