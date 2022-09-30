import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookielist from './Cookielist'

const Cookiefetch = () => {
    const[cookiestate,cookiesetter]=useState([])

   
    useEffect(()=>{
 const interval=setInterval(()=>{
       fetch('https://63159b6c33e540a6d37fdf21.mockapi.io/fruit')
       .then((response)=>{
        if (response.ok) {
            return response.json()
            
        }
return false
       }).then((response)=>{
        cookiesetter(response)

       })
    },10)
    return()=>{
        clearInterval(interval)
    }
})
  return (
    <div>
      <Cookielist cookie={cookiestate}></Cookielist>
    </div>
  )
}

export default Cookiefetch
