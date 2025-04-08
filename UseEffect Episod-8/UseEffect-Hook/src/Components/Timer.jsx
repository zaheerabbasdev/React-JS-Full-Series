import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, SetSeconds] = useState(0);

    // it will run on the first render

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("setinterval executed");
        SetSeconds(prevSeconds => prevSeconds + 1);
        
      }, 1000);
    
      return () => {
        console.log("time is stoped");
        clearInterval(intervalId);
      }
    }, [])
    
  return (
    <div>
    <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default Timer