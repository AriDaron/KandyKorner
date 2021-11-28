import React, { useEffect, useState } from "react"


export const CustomerList = () => {
    const [customers, setCustomer] = useState([])


    //useEffect() When state changes it invokes a function. like an event listener. used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 


    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )

    // you can only return 1 element (one scope)
    return (
        <div>
        
        {
            customers.map(
                (customerObject)=> {
                    return <p key= {`customer--${customerObject.id}`}> {customerObject.name} </p>
                }
            )
        }
        </div>
    )
}
