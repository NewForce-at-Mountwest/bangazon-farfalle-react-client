import {react, Component} from "react";
import { METHODS } from "http";
import { pathToFileURL } from "url";

    const EmployeeAPIManager = {
        getAllEmployees: function(){
            return fetch(`https://localhost:5001/api/employee/`)
            .then(r=>r.json())
        }
        ,

        getSingleEmployee: function(employeeId){
            return fetch(`https://localhost:5001/api/employee/${employeeId}`)
            .then(r=>r.json())
        },

        postNewEmployee: function(employeeObject){
            return fetch(`https://localhost:5001/api/employee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeObject)
            })

            .then(r => r.json())
        },

        updateEmployee: function(employeeObject){
            return fetch(`https://localhost:5001/api/employee/${employeeObject.Id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeObject)
            })
            .then(r=>r.json())
        }
        }







export default EmployeeAPIManager;