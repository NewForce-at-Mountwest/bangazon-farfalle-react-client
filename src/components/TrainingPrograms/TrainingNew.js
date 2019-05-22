import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Training.css"
import Moment from 'react-moment';



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
    Name = this.state.Name,
    StartDate=this.state.StartDate,
    EndDate = this.state.EndDate,
    MaxAttendees=this.state.MaxAttendees

}
/// Add Training program to database using API POST in Application views

    }
    

    
    
    
    render() {
        
        return (
        <React.Fragment>


        <h1>Training Programs</h1>

         <form className="TrainingForm">
                    <div className="form-group">
                        <label htmlFor="Name">Program Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="Name"
                            placeholder="Program Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="StartDate">Start Date</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="StartDate"
                            placeholder="Start Date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="EndDate">End Date</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="EndDate"
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
                            id="MaxAttendees"
                            placeholder="Max Attendees"
                        />
                    </div>
                            <button>Add Program</button>

                    </form>
       
            
                                                    
                                                    
                                                    
            <Link className="nav-link" to={`/training`}>Back to Training Page</Link>

        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}