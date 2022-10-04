import React from "react";
import './Message.css';

function Message(props) {
  return (
   <div>
      <h1 class='text'>
        Hello, {props.name}
      </h1>
   </div>
  );
}

export default Message;