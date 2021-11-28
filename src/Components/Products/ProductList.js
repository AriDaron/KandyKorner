import React, { useEffect, useState } from "react"


export const ProductsList = () => {
    const [products, setProduct] = useState([])


    //useEffect() When state changes it invokes a function. like an event listener. used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 


    // ?_expand=is a query string parameter that allows you to group an object together and pull from the API 
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_sort=productTypeId&_expand=productType")
                .then(res => res.json())
                .then((data) => {
                    setProduct(data)
                })
        },
        []
    )

    // you can only return 1 element (one scope)
    return (
        <div>
        
        {
            products.map(
                (productObject)=> {
                    return <p key= {`product--${productObject.id}`}> {productObject.candyName} Candy Type: {productObject.productType.type} costs ${productObject.price} </p>
                }
            
                )
        }
        </div>
    )
}