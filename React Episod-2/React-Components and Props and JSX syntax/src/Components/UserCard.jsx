import React from 'react'
import userImage from "../assets/image-2.jpg"; 
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.image} />
        <p id='user-desc'>{props.desc}</p>
        
    </div>
  )
}

export default UserCard