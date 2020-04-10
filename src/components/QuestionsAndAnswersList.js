import React from 'react';
import uuid from "react-uuid";
import Question from './Question';
import Answer from './Answer';

const QuestionsAndAnswersList = props => {
    return (
        <div>
            {props.QuestAndAnswList.map((item) => (
            <div
              key={uuid()}
              className="formGroup"
              style={{ padding: "1rem 0" }}
            >
              <Question id={item.question_id} content={item.question} />
              <Answer
                id={item.question_id}
                handleAnswerEvent={props.handleAnswerEvent}
                value={item.answer}
              />
            </div>
          ))}
        </div>
    );
};

export default QuestionsAndAnswersList;