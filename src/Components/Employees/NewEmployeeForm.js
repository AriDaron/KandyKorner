import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";


export const NewEmployeeForm = () => {

    //create an initial state with useState() hook function
    const [employee, update] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: true,
        hourly: 0
    });
    const [locations, updateLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    updateLocations(data)
                })
        },
        []
    )


    const history = useHistory()
    // below is the object that we want to send to our API


    // below is the object that we want to send to our API
    const saveNewHire = (event) => {
        event.preventDefault()

        const newHire = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourly: employee.hourly,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)   //send body of the request can only send strings so must strigify 
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees") //push to browser history and take user to tickets
            })
    }

    return (
        <form className="newHireForm">
            <h2 className="newHireForm__title">New Hire Enrollment </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (evt) => {
                                const copy = { ...employee } //creates a copy of state 
                                copy.name = evt.target.value
                                update(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                        className="form-control"
                        placeholder="Select a Location"
                        onChange={
                            (evt) => {
                                const copy = { ...employee } //creates a copy of state 
                                copy.locationId = parseInt(evt.target.value)
                                update(copy) //make the copy the new state 
                            }
                        } >
                        <option value="0"> Select a location </option>
                        {
                            locations.map(
                                (locationObject) => {
                                    return <option value={locationObject.id}> {locationObject.name} </option>
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        onChange={
                            (evt) => {
                                const copy = { ...employee } //creates a copy of state 
                                copy.manager = evt.target.checked
                                update(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time Employee?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        onChange={
                            (evt) => {
                                const copy = { ...employee } //creates a copy of state 
                                copy.fullTime = evt.target.checked
                                update(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourly">Hourly Rate:$</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                        onChange={
                            (evt) => {
                                const copy = { ...employee } //creates a copy of state 
                                copy.hourly = evt.target.value
                                update(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>






            <button onClick={saveNewHire} className="btn btn-primary" >
                Complete Enrollment
            </button>
        </form>
    )
}
