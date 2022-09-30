import React, { useEffect, useState } from 'react'
import Audiolist from './Audiolist'
const Audiofetch = () => {
    const [audiostate,audiosetter]=useState([])

    useEffect(()=>{
        const interval=setInterval(()=>{
fetch('https://63159b6c33e540a6d37fdf21.mockapi.io/product')
.then((response)=>{
    if (response.ok) {
        return response.json()
    }
return false
}).then((response)=>{
    audiosetter(response)
})
        },1000)     
        return()=>{
            clearInterval(interval)
        }

    })
  return (
    <div>
      <Audiolist audio={audiostate}></Audiolist>
    </div>
  )
}

export default Audiofetch
