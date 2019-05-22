import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Training.css"
import Moment from 'react-moment';



export default class TrainingPage extends Component {

    state={
        
    }
    

    
    
    
    render() {
        
        return (
        <React.Fragment>


        <h1>Training Programs</h1>
        <button>Add Program</button>
       <div className="program-container">
                    {this.props.programs.map(program =>
                    <div key={program.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src="https://assets.zabbix.com/img/training-big.svg" className= "icon--training" />
                                {program.name}{"\n"}
                                (<Moment format="MM/DD/YY">{program.startDate}</Moment> to {"\n"} 
                                <Moment format="MM/DD/YY">{program.endDate}</Moment>)

                                <ul className="employee-training-List">
                                    {program.employees.map(employee=>
                                    <li>{employee.firstName} {employee.lastName}</li>
                                    )}
                                </ul>
                                <button>Enroll Employee</button>
                                {/* <Link className="nav-link" to={`/employees/${program.id}`}>Details</Link> */}


                            </h5>
                        </div>
                    </div>
                    )

                    }</div>
        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}