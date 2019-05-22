    
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Bangazon from './components/Bangazon'

import './index.css'


ReactDOM.render(
    <Router>
        <Bangazon />
    </Router>
    , document.getElementById('root'))