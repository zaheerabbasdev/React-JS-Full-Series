import React, { useState, useEffect } from 'react'

const ResizeWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //it will run on the first render

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      console.log("Event Listener Added");

      window.addEventListener("resize", handleResize);
    
      return () => {
        console.log("Event Listener Removed");
        window.removeEventListener("resize", handleResize);
      }
    }, [])
    
  return (
    <div>
        <h1>WindowWidth {windowWidth}px</h1>
    </div>
  )
}

export default ResizeWindow