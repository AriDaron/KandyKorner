import React, { useEffect, useState } from "react"


export const LocationsList = () => {
    const [locations, setLocation] = useState([])


    //useEffect() When state changes it invokes a function. like an event listener. used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 


    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocation(data)
                })
        },
        []
    )

    // you can only return 1 element (one scope)
    return (
        <div>
        
        {
            locations.map(
                (locationObject)=> {
                    return <p key= {`location--${locationObject.id}`}> {locationObject.address} </p>
                }
            )
        }
        </div>
    )
}
