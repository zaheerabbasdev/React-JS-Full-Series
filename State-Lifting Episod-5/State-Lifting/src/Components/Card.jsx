import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=>{
            props.setName(e.target.value);
        }}/>
        <p>The Value of Name state variable inside a card:{props.title} {props.name}</p>
    </div>
  )
}

export default Card