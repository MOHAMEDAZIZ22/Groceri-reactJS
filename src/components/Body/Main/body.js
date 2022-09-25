//  import React, { useEffect, useState } from "react";
//  import Productlist from "../productlist/productlist";

//   const Body = () => {
//     const [grocery, itemSetter] = useState([])

//     useEffect(()=>{
//         const intervalid=setInterval((response)=>{
//             fetch ("https://63159b6c33e540a6d37fdf21.mockapi.io/product")
//             .then((response)=>{
//                 if(response.ok){
//                     return response.json()

//                 }
//                 return false
//             }).then((response)=>{
//                 if(response){
//                     itemSetter(response)
//                 }
//             })

//         }, 1000)
//         return()=>{
//             clearInterval(intervalid)
//         }
//     })
//    return (

//      <div>
//         <Productlist newproduct={grocery}></Productlist>
//     </div>

//    )
//  }
//  export default Body;

import React, { useEffect, useState } from 'react'
import ProductList from '../productlist/productlist'

const Body = () => {
    const [itemsState, itemSetter] = useState([])

    useEffect(() => {
        const intervalId = setInterval((response) => {
            fetch("https://63159b6c33e540a6d37fdf21.mockapi.io/product")
                .then((response) => {
                    if (response.ok) {
                        return response.json()

                    }
                    return false
                }).then((response) => {
                    if (response) {
                        itemSetter(response)
                    }
                })
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    })
    return (
        <div>
            <ProductList itemMap={itemsState}></ProductList>
        </div>
    )
}
export default Body;

