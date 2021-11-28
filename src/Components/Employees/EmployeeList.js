import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const history = useHistory()

    //useEffect() When state changes it invokes a function. like an event listener. used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 


    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    setEmployee(data)
                })
        },
        []
    )

    // you can only return 1 element (one scope)
    return (
        <>
            <button onClick={() => history.push("/employees/create")}> Hire a New Employee </button>

            {
                employees.map(
                    (employeeObj) => {
                        return <p key={`employee--${employeeObj.id}`}>  {employeeObj.name} </p>
                    }
                )
            }
        </>
    )
}
