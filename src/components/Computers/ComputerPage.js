import React, { Component } from 'react'
import "./Computer.css"
import "bootstrap/dist/css/bootstrap.min.css"

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
            <section>
            <div key={singleComputer.id} className = "card card-body">
              <p>{singleComputer.make}</p>
              <p>{singleComputer.manufacturer}</p>
              <p>{singleComputer.purchaseDate}</p>
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