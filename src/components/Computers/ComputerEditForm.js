import React, { Component } from "react";
import "./Computer.css"
import ComputerAPI from "../../modules/ComputerAPI";

export default class computerEditForm extends Component {
  state = {
    make: "",
    purchaseDate: "",
    manufacturer: "",
    decomissionDate: "",
    computerId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingComputer = evt => {
    evt.preventDefault();
      const editedComputer = {
        id:  this.props.match.params.computerId,
        make: this.state.make,
        manufacturer: this.state.manufacturer,
        purchaseDate: this.state.purchaseDate,
        decomissionDate: this.state.decomissionDate
      };

      this.props
        .updateComputer(editedComputer)
        .then(() => this.props.history.push("/computers"));
    }

  componentDidMount() {
    ComputerAPI.getOne(this.props.match.params.computerId).then(computer => {
      this.setState({
        make: computer.make,
        manufacturer: computer.manufacturer,
        purchaseDate: computer.purchaseDate,
      });
    });
  }

  render() {

    return (
      <React.Fragment>
        <form className="computerForm">
          <div className="form-group">
            <label htmlFor="computerMake">Computer Make</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="make"
              value={this.state.make}
            />
          </div>
          <div className="form-group">
            <label htmlFor="purchaseDate">Purchase Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="purchaseDate"
              value={this.state.purchaseDate}
            />
          </div>

          <div className="form-group">
            <label htmlFor="manufacturer">Update manufacturer</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="manufacturer"
              value={this.state.manufacturer}
            />

          </div>
          <button
            type="submit"
            onClick={this.updateExistingComputer}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}