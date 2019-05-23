import React, { Component } from "react";
import "./Computer.css";

export default class ComputerForm extends Component {
  state = {
    manufacturer: "",
    make: "",
    purchaseDate: "",
    decomissionDate: ""

  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewComputer = evt => {
    evt.preventDefault();

      const computer = {
        make: this.state.make,
        manufacturer: this.state.manufacturer,
        purchaseDate: this.state.purchaseDate
      };
      this.props
        .addComputer(computer)
        .then(() => this.props.history.push("/computers"));
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
              placeholder="make"
            />
          </div>
          <div className="form-group">
            <label htmlFor="manufacturer">Manufacturer</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="manufacturer"
              placeholder="manufacturer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="purchaseDate">When was it purchased?</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="purchaseDate"
              placeholder="purchaseDate"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewComputer}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}