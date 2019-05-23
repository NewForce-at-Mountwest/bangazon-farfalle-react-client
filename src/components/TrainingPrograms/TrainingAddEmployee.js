import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Training.css';
import Moment from 'react-moment';

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
		const currentProgram = this.props.programs.find((program) => program.id = this.props.match.params.programId);
        newState.currentProgram=currentProgram
        this.setState(newState);

	}

	// Update state whenever an input field is edited
	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleSubmit = (evt) => {
		const EmployeeTraining = {
			employeeId: this.state.employeeId,
			trainingProgramId: this.state.trainingProgramId
		};
		this.props.AddEmployeeToTrainingProgram(EmployeeTraining);
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
						name="EmployeeId"
						id="EmployeeId"
						onChange={this.handleFieldChange}
						value={this.state.EmployeeId}
					>
						<option value="">Select an Employee</option>
						{this.props.employees.map((e) => (
							<option key={e.id} id={e.id} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
				<Link className="nav-link" to={`/training`}>
					Back to Training Page
				</Link>
			</React.Fragment>
		);
	}
}
