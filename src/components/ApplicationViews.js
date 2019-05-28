import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import EmployeePage from './Employees/EmployeePage';
import ComputerPage from './Computers/ComputerPage';
import DepartmentPage from './Departments/DepartmentPage';
import TrainingPage from './TrainingPrograms/TrainingPage';
import TrainingAPIManager from '../modules/TrainingAPIManager';
import TrainingNew from './TrainingPrograms/TrainingNew';
import TrainingAddEmployee from './TrainingPrograms/TrainingAddEmployee';
import TrainingEditForm from './TrainingPrograms/TrainingEditForm';
import EmployeeAPIManager from '../modules/EmployeeAPIManger';
import EmployeeEditForm from './Employees/EmployeeEditForm';
import NewEmployeeForm from './Employees/NewEmployeeForm';
import ComputerAPI from '../modules/ComputerAPI';
import ComputerForm from '../components/Computers/ComputerForm'
import ComputerEditForm from '../components/Computers/ComputerEditForm'


class ApplicationViews extends Component {
	state = {
		employees: [],
		computers: [],
		departments: [],
		programs: []
	};



  componentDidMount() {
        const newState = {};
        EmployeeAPIManager.getAllEmployees()
        .then(response => (newState.employees = response))
        .then(ComputerAPI.getAll)
        .then(computers => (newState.computers = computers))
		.then(TrainingAPIManager.getAll)
		.then((programs) => 
			{
			 newState.programs = programs
			 this.setState(newState)
			 })
			
			}
      



	//  This method adds a new training program and then  updates state

	AddTrainingProgram = (NewProgram) => {
		TrainingAPIManager.postProgram(NewProgram)
			.then(() => TrainingAPIManager.getAll())
			.then((programs) => this.setState({ programs: programs }));
	};


	EditTrainingProgram = (editedProgram) => {
		TrainingAPIManager.putProgram(editedProgram)
		.then(()=>TrainingAPIManager.getAll())
		.then((programs) => this.setState({programs:programs}))
	};

	AddEmployeeToTrainingProgram = (employeeTraining) => {
		TrainingAPIManager.postEmployeeToTraining(employeeTraining)
			.then(() => TrainingAPIManager.getAll())
			.then((programs) => this.setState({ programs: programs }));
	};

	addNewEmployee = (employeeObject) => {
		const newState = {};
		EmployeeAPIManager.postNewEmployee(employeeObject)
			.then(() => EmployeeAPIManager.getAllEmployees())
			.then((response) => {
				newState.employees = response;
				this.setState(newState);
			});
	};
	
	editEmployee = (employeeObject) => {
		const newState = {};
		EmployeeAPIManager.updateEmployee(employeeObject)
			.then(() => EmployeeAPIManager.getAllEmployees())
			.then((response) => {
				newState.employees = response;
				this.setState(newState);
			});
	};

	 updateComputer = editedComputerObject => {
      return ComputerAPI.put(editedComputerObject)
        .then(() => ComputerAPI.getAll())
        .then(computers => {
          this.setState({
            computers: computers
          });
        });
    };
	addComputer = computerObject =>
      ComputerAPI.postComputer(computerObject)
        .then(() => ComputerAPI.getAll())
        .then(computers =>
          this.setState({
            computers: computers
          })
        );

	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={(props) => {
						return <EmployeePage {...props} employees={this.state.employees} />;
					}}
				/>
				<Route
					exact
					path="/employees/new"
					render={(props) => {
						return (
							<NewEmployeeForm
								employees={this.state.employees}
								addNewEmployee={this.addNewEmployee}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/employees/:employeeId(\d+)/edit"
					render={(props) => {
						return (
							<EmployeeEditForm
								employees={this.state.employees}
								{...props}
								editEmployee={this.editEmployee}
							/>
						);
					}}
				/>

				<Route exact path="/computers" render={(props) => {
                    return <ComputerPage {...props}
                    updateComputer={this.updateComputer}
                    computers={this.state.computers} />
                }} />
				   <Route exact path="/computers/new" render={props => {
            			return <ComputerForm {...props}
							addComputer={this.addComputer}
							computers={this.state.computers}/>
                }}/>
                 <Route exact path="/computers/:computerId(\d+)/edit" render={props => {
						return <ComputerEditForm {...props}
							updateComputer={this.updateComputer}
							computers={this.state.computers}/>
                }}/>
				<Route
					path="/departments"
					render={(props) => {
						return <DepartmentPage departments={this.state.departments} />;
					}}
				/>
				<Route
					exact
					path="/training"
					render={(props) => {
						return <TrainingPage {...props} programs={this.state.programs} />;
					}}
				/>
				<Route
					 exact path="/training/new"
					render={(props) => {
						return (
							<TrainingNew
								{...props}
								programs={this.state.programs}
								AddTrainingProgram={this.AddTrainingProgram}
							/>
						);
					}}
				/>
				<Route
					exact path="/training/:programId(\d+)"
					render={(props) => {
						return (
							<TrainingAddEmployee
								{...props}
								programs={this.state.programs}
								employees={this.state.employees}
								AddEmployeeToTrainingProgram={this.AddEmployeeToTrainingProgram}
							/>
						);
					}}
				/>
					<Route
					exact path="/training/:programId(\d+)/edit"
					render={(props) => {
						return (
							<TrainingEditForm
								{...props}
								programs={this.state.programs}
								EditTrainingProgram={this.EditTrainingProgram}
							/>
						);
					}}
				/>
			</React.Fragment>
		);
	}

   

}
export default ApplicationViews;
