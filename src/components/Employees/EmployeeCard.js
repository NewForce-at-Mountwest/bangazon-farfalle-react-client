import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"




class EmployeeCard extends Component {


    render() {

        return(
           <div>
               <div className="card" style={{width: "18rem"}}>
                <img src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" className="card-img-top" alt="Employee photo"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.employee.firstName}      {this.props.employee.lastName}</h5>
                    <h6 className="card-text">Department: {this.props.employee.departmentId}</h6>
                    <h6>{this.props.employee.isSuperVisor === true ? "Supervisor" : ""}</h6>
                    <h6>Currently Assigned Computer: {this.props.employee.currentComputer ?this.props.employee.currentComputer.id : "None"}</h6>
                    <p>{this.props.employee.currentComputer ?this.props.employee.currentComputer.make : ""}</p><p>{this.props.employee.currentComputer ?this.props.employee.currentComputer.manufacturer: ""}</p>
                    <button onClick={()=> this.props.history.push(`/employees/${this.props.employee.id}/edit`)}>Edit Employee</button>
                </div>

            </div>
           </div>
        )
    }
}

export default EmployeeCard;