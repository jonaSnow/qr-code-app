import React from "react";

const Question = props => {
  return (
    <div>
      <label id={props.id}>{props.content}</label>
    </div>
  );
};

export default Question;
