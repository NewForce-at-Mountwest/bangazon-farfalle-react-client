//******************************************************************************//
// This Allows you to edit the training program information
//By Sydney Wait
//******************************************************************************//

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Training.css"
import TrainingAPIManager from "../../modules/TrainingAPIManager"




export default class TrainingEditForm extends Component {

    state={
        id: null,
        name:"",
        startDate:"",
        endDate:"",
        maxAttendees:""
                
    }

    	componentDidMount() {
		let newState = [];

		const CurrentProgramId = parseInt(this.props.match.params.programId);
		newState.trainingProgramId = CurrentProgramId;
		TrainingAPIManager.getSingle(CurrentProgramId)
		.then((currentProgram)=> {
            newState={
            id: currentProgram.id,
		    name: currentProgram.name,
            startDate: currentProgram.startDate.split("T")[0],
            endDate: currentProgram.endDate.split("T")[0],
            maxAttendees: currentProgram.maxAttendees
            }
		        this.setState(newState)})    

	}

      // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleSubmit = evt =>{
    const TrainingObject ={
    id: this.state.id,
    name: this.state.name,
    startDate:this.state.startDate,
    endDate: this.state.endDate,
    maxAttendees: this.state.maxAttendees

    }
    this.props.EditTrainingProgram(TrainingObject);
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
                            value={this.state.name}
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
                            value={this.state.startDate}
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
                            value={this.state.endDate}
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
                            value={this.state.maxAttendees}
                            placeholder="Max Attendees"
                        />
                    </div>
                            <button className ="btn btn-success"
                            onClick={this.handleSubmit}>Submit</button>

       
            
                                                    
                                                    
                                                    
            <Link className="nav-link" to={`/training`}>Back to Training Page</Link>

        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}