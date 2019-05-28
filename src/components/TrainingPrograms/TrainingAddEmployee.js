//******************************************************************************//
// This Allows you to add another employee to the training program
//By Sydney Wait
//******************************************************************************//

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Training.css';
import TrainingAPIManager from "../../modules/TrainingAPIManager"

export default class TrainingAddEmployee extends Component {
	state = {
		employeeId: '',
		trainingProgramId: '',
        currentProgram: {employees: []}
	};

	componentDidMount() {
		let newState = [];

		const CurrentProgramId = parseInt(this.props.match.params.programId);
		newState.trainingProgramId = CurrentProgramId;
		TrainingAPIManager.getSingle(CurrentProgramId)
		.then((currentProgram)=> {
		newState.currentProgram = currentProgram
		        this.setState(newState)})    

	}

	// Update state whenever an input field is edited
	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleSubmit = (evt) => {
		const EmployeeTraining = {
			employeeId: parseInt(this.state.employeeId),
			trainingProgramId: this.state.trainingProgramId
		};
		this.props.AddEmployeeToTrainingProgram(EmployeeTraining);
		this.props.history.push("/training")
	};

	render() {
		return (
			<React.Fragment>
				<h1>Add Another Employee</h1>
				{this.state.currentProgram.employees.map((e)=>
                <li>
					{e.firstName} {e.lastName}
				</li>
                
                )}
				
				<div className="form-group">
					<label htmlFor="Employee" />
					<select
						defaultValue=""
						name="employeeId"
						id="employeeId"
						onChange={this.handleFieldChange}
						value={this.state.employeeId}
					>
						<option value="">Select an Employee</option>
						{this.props.employees.map((e) => (
							<option key={e.id} id={e.id} value={e.id}>
								{e.firstName} {e.lastName}
							</option>
						))}
					</select>
				</div>
				<button className ="btn btn-success"
				onClick = {this.handleSubmit}>Submit</button>

				<Link className="nav-link" to={`/training`}>
					Back to Training Page
				</Link>
			</React.Fragment>
		);
	}
}
