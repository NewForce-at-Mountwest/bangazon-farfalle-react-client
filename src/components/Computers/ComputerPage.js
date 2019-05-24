import React, { Component } from 'react'
import "./Computer.css"
import "bootstrap/dist/css/bootstrap.min.css"

//this is the list of computers, with buttons to edit a specific computer and an add new button

//connor fitzgerald

export default class ComputerPage extends Component {
    state = {
        employees:[] ,
        computers: [],
        departments: [],
        training: []
    }
    render() {

        return (
            <React.Fragment>
        <h1 className ="heading">Active computers</h1>
        <div className="computerButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/computers/new");
            }}
          >
            Add a computer
          </button>
        </div>
        {this.props.computers.map(singleComputer => {
          return (
            <section key={singleComputer.id} className = "computerSection">
            <div  className = "card card-body computerCard">
              <p>{singleComputer.make}</p>
              <p>{singleComputer.manufacturer}</p>
              <p>{singleComputer.purchaseDate.split("T")[0]}</p>
              <button className ="btn btn-success" onClick={() => {
              this.props.history.push(`/computers/${singleComputer.id}/edit`);
            }}>Edit</button>
            </div>
            </section>
          )})}
            </React.Fragment>






        )
    }
}