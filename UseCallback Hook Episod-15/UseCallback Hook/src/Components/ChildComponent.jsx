import React from 'react'

const ChildComponent = React.memo(
     (props) => {
    console.log("Childe Component got re-rendered");
  return (
    <div>
       <button onClick={props.handleClick}>
        {props.buttonName}
       </button>
    </div>
  )
}
)


export default ChildComponent


// Wrap your component into React.memo() so your component not re-rendered and your component will re-rendered when the props changed.
// if you are sending a function to your component, then React.memo would not be able to save you from re-rendering.