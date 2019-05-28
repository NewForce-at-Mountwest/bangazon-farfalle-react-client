//******************************************************************************//
// This Allows you to create a new training program
//By Sydney Wait
//******************************************************************************//

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Training.css"



export default class TrainingNew extends Component {

    state={
        Name:"",
        StartDate:"",
        EndDate:"",
        MaxAttendees:""
                
    }

      // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleSubmit = evt =>{
    const TrainingObject ={
    name: this.state.name,
    startDate:this.state.startDate,
    endDate: this.state.endDate,
    maxAttendees: this.state.maxAttendees

    }
    this.props.AddTrainingProgram(TrainingObject);
    this.props.history.push("/training")
    }   

    
    
    
    render() {
        
        return (
        <React.Fragment>


        <h1>Training Programs</h1>

                    <div className="form-group">
                        <label htmlFor="Name">Program Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Program Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="StartDate">Start Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="startDate"
                            placeholder="Start Date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="EndDate">End Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="endDate"
                            placeholder="End Date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="MaxAttendees">Max Attendees</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="maxAttendees"
                            placeholder="Max Attendees"
                        />
                    </div>
                            <button className ="btn btn-success"
                            onClick={this.handleSubmit}>Add Program</button>

       
            
                                                    
                                                    
                                                    
            <Link className="nav-link" to={`/training`}>Back to Training Page</Link>

        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}