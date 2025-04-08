import React from "react";
// we also destructurcing the props
const Button = (props) => {
  return (
    <div>
      <p>{props.children}</p>
      <button onClick={props.handleClick}>
      {props.text}
      </button>
    </div>
  );
};

export default Button;
