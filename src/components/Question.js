import React from "react";

const Question = props => {
  return (
    <div>
      <label name={props.id}>{props.content}</label>
    </div>
  );
};

export default Question;
