import React from "react";

const Answer = props => {
  return (
    <div>
      <input
        className="form-control"
        type="number"
        id={props.id}
        placeholder="Answer"
        onChange={props.handleAnswerEvent}
        value={props.value}
      />
    </div>
  );
};

export default Answer;
