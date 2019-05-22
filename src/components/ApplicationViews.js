import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import EmployeePage from './Employees/EmployeePage';
import ComputerPage from './Computers/ComputerPage';
import DepartmentPage from './Departments/DepartmentPage';
import TrainingPage from './TrainingPrograms/TrainingPage';
import TrainingAPIManager from '../modules/TrainingAPIManager';

class ApplicationViews extends Component {
	state = {
		employees: [],
		computers: [],
		departments: [],
		programs: []
	};

	componentDidMount() {
		const newState = {};
		TrainingAPIManager.getAll()
			.then((programs) => (newState.programs = programs))
			.then(() => this.setState(newState));
	}

	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={(props) => {
						return <EmployeePage employees={this.state.employees} />;
					}}
				/>
				<Route
					path="/computers"
					render={(props) => {
						return <ComputerPage computers={this.state.computers} />;
					}}
				/>
				<Route
					path="/departments"
					render={(props) => {
						return <DepartmentPage departments={this.state.departments} />;
					}}
				/>
				<Route
					path="/training"
					render={(props) => {
						return <TrainingPage programs={this.state.programs} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
