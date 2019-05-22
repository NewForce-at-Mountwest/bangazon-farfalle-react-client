import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import EmployeePage from './Employees/EmployeePage';
import ComputerPage from './Computers/ComputerPage';
import DepartmentPage from './Departments/DepartmentPage';
import TrainingPage from './TrainingPrograms/TrainingPage';
import TrainingAPIManager from '../modules/TrainingAPIManager';
import TrainingNew from './TrainingPrograms/TrainingNew'
import TrainingAddEmployee from './TrainingPrograms/TrainingAddEmployee'



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


 //Write method to handle adding a training program to the database


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
					exact path="/training"
					render={(props) => {
						return <TrainingPage {...props} programs={this.state.programs} />;
					}}
				/>
                <Route
					path="/training/new"
					render={(props) => {
						return <TrainingNew {...props} programs={this.state.programs}
                         />;
					}}
				/>
                <Route
					path="/training/:programId(\d+)"
					render={(props) => {
						return <TrainingAddEmployee {...props} programs={this.state.programs}
                        employees={this.state.employees} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
