import React from "react";

const QuestionAndAnswer = props => {
  return (
    <div className="formGroup" style={{padding: '1rem 0'}}>
      <label>{props.question}</label>
      <input
        className="form-control"
        type="number"
        placeholder="Answer"
        autoFocus
        onChange={props.handleAnswerEvent}
        value={props.answer}
      />
    </div>
  );
};

export default QuestionAndAnswer;
