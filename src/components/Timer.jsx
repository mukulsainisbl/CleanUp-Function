import React, { useState,useEffect } from 'react'

const Timer = () => {

    const [Timer, SetTimer] = useState(10)


   useEffect(() => {
 let intervalID =    setInterval(() => {
       SetTimer(prevValue =>{
        if(prevValue <= 1){
            clearInterval(intervalID)
        }
        return prevValue - 1
       })
        
     }, 1000);
   
     return () => {
        alert("Clean Function  Up is Called")
     clearInterval(intervalID)
     }


   }, [])
   
    

  return (

    <div>
        <h2>Timer</h2>
        <h3>{Timer}</h3>
    </div>

  


  )
}

export default Timer