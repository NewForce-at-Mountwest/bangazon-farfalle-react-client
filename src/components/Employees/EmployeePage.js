import React, { Component } from 'react'
import EmployeeCard from "./EmployeeCard"



export default class EmployeePage extends Component {
    render() {

        return (<div>
            <h1>Employees</h1>
            <button onClick={()=> this.props.history.push(`/employees/new`)}>Add New Employee</button>
            <div>{this.props.employees.map((employee)=> <EmployeeCard employee={employee} key={employee.id} {...this.props}/>)}
           </div>
           </div>
        )
    }
}