import React from "react";

const Answer = props => {
  return (
    <div>
      <input
        className="form-control"
        type="number"
        name={props.id}
        placeholder="Answer"
        autoFocus
        onChange={props.handleAnswerEvent}
        value={props.value}
      />
    </div>
  );
};

export default Answer;
