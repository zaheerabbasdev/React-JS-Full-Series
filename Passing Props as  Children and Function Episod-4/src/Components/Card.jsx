import React from 'react'

const Card = (props) => {
  return (
    <div>{props.name}
        <p>{props.children}</p>
    </div>

  )
}

export default Card