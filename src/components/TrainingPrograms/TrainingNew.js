import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Training.css"
import Moment from 'react-moment';



export default class TrainingNew extends Component {

    state={
        
        
    }
    

    
    
    
    render() {
        
        return (
        <React.Fragment>


        <h1>Training Programs</h1>
        <button>Add Program</button>
       
            
                                                    
                                                    
                                                    
            <Link className="nav-link" to={`/training`}>Back to Training Page</Link>

        


        </React.Fragment>
        )
        
        
        
            
           
        
    }
}