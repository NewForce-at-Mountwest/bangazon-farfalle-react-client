import React, { Component } from 'react'
import "./Training.css"
import Moment from 'react-moment';



export default class TrainingPage extends Component {

    state={

    }
    

    
    
    
    render() {
        
        return (
        <React.Fragment>


        <h1>Training Programs</h1>
        <button className="btn btn-success"
        onClick={() => {this.props.history.push("/training/new")}
        }>
        Add Program
        </button>
       <div className="program-container">
                    {this.props.programs.map(program =>
                    <React.Fragment>
                        
                    <div key={program.id} className="card">
                    
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src="https://assets.zabbix.com/img/training-big.svg" className= "icon--training" />
                                {program.name}{"\n"}
                                (<Moment format="MM/DD/YY">{program.startDate}</Moment> to {"\n"} 
                                <Moment format="MM/DD/YY">{program.endDate}</Moment>)

                                <ul className="employee-training-List">
                                    
                                    {program.employees[0]!==null?program.employees.map(employee=>
                                    <li>{employee.firstName} {employee.lastName}</li>
                                    ):""}
                                </ul>
                                
                                <button className="btn btn-success"
                                onClick={()=>{this.props.history.push(`/training/${program.id}`)}}>Enroll Employee</button>
                                <span> {program.maxAttendees-program.employees.length} slots remaining</span>


                            </h5>
                        </div>
                    </div>
                    </React.Fragment>)

                    }</div>
        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}