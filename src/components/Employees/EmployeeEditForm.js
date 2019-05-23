import React, {Component} from "react";
import EmployeeAPIManager from "../../modules/EmployeeAPIManger";

class EmployeeEditForm extends Component {

    state = {
        id: "",
        firstName: "",
        lastName: "",
        departmentId: "",
        isSupervisor: false
    }




    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

    updateEmployee = () => {
        const employeeObject = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            departmentId: this.state.departmentId,
            isSuperVisor: this.state.isSupervisor
        }

        this.props.editEmployee(employeeObject);
        this.props.history.push("/");
    }


    componentDidMount(){
        EmployeeAPIManager.getSingleEmployee(this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName,
                departmentId: employee.departmentId,
                isSupervisor: employee.isSupervisor
            })
        })
    }



    render(){
        return(
            <div>

                <div className="form-group">
                    <label >First Name</label>
                    <input  className="form-control" onChange={this.handleFieldChange} id="firstName"  placeholder="First Name" value={this.state.firstName}/>
                </div>
                <div className="form-group">
                    <label >Last Name</label>
                    <input className="form-control" onChange={this.handleFieldChange} id="lastName"  placeholder="Last Name" value={this.state.lastName}/>
                </div>
                <div className="form-group">
                    <label >Department Id</label>
                    <input  className="form-control" onChange={this.handleFieldChange} id="departmentId" placeholder="Department Id"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="isSupervisor"/>
                    <label className="form-check-label" onChange={this.handleFieldChange} >Supervisor</label>
                </div>

                <button type="submit" className="btn btn-primary" onClick= {this.updateEmployee}>Submit</button>
                </div>
        )
    }
}

export default EmployeeEditForm;







