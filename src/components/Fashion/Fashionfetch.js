import React, { useEffect, useState } from 'react'
import Fashionlist from './Fashionlist'

const Fashionfetch = () => {
    const [fashstate,fashsetter]=useState([])
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            fetch('https://63159b6c33e540a6d37fdf21.mockapi.io/product')
            .then((response)=>{
if (response.ok) {
    return response.json()
}
return false
}).then((response)=>{
  fashsetter(response)
})
        },1000)
        return()=>{
            clearInterval(interval)
        }
    })

  return (
    <div>
      <Fashionlist fashion={fashstate}></Fashionlist>
    </div>
  )
}

export default Fashionfetch
