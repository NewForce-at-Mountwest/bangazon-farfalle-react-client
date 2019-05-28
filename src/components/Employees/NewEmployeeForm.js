//******************************************************************************//
// This allows you to enter a new employee
//By Sable Bowen
//******************************************************************************//

import React, {Component} from "react";



class NewEmployeeForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        departmentId: "",
        isSupervisor: false
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    addEmployee = (evt) => {
        evt.preventDefault();
        const employeeObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            departmentId: this.state.departmentId,
            isSuperVisor: this.state.isSupervisor
        }
        console.log(employeeObject);
        this.props.addNewEmployee(employeeObject);
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
            <form>
                <div className="form-group">
                    <label >First Name</label>
                    <input  className="form-control" onChange={this.handleFieldChange} id="firstName"  placeholder="First Name"/>
                </div>
                <div className="form-group">
                    <label >Last Name</label>
                    <input className="form-control" onChange={this.handleFieldChange} id="lastName"  placeholder="Last Name"/>
                </div>
                <div className="form-group">
                    <label >Department Id</label>
                    <input  className="form-control" onChange={this.handleFieldChange} id="departmentId" placeholder="Department Id"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="isSupervisor"/>
                    <label className="form-check-label" onChange={this.handleFieldChange} >Supervisor</label>
                </div>
                </form>
                <button type="submit" className="btn btn-primary" onClick= {this.addEmployee}>Submit</button>
                </div>
        )
    }






}

export default NewEmployeeForm;