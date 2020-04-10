import React from "react";
import QuestionsAndAnswersList from "./QuestionsAndAnswersList";
import User from "./User";
import UserComments from "./UserComments";

export default class Survey extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Poster 1",
      id: 1,
      qr_id: "332434%fgd",
      user: "test@test.com",
      comment: "",
      questionaire: [
        {
          question_id: 1,
          question: "Why?",
          answer: "",
        },
        {
          question_id: 2,
          question: "Who?",
          answer: "",
        },
        {
          question_id: 3,
          question: "How?",
          answer: "",
        },
        {
          question_id: 4,
          question: "When?",
          answer: "",
        },
        {
          question_id: 5,
          question: "What?",
          answer: "",
        },
        {
          question_id: 6,
          question: "Where?",
          answer: "",
        },
        {
          question_id: 7,
          question: "Why is that?",
          answer: "",
        },
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  onAnswerChange = (e) => {
    const value = e.target.value;
    const id = parseInt(e.target.id);

    const elementsIndex = this.state.questionaire.findIndex(
      (element) => element.question_id === id
    );

    let newArray = [...this.state.questionaire];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      answer: value,
    };

    this.setState({
      questionaire: newArray,
    });
  };

  onTextChange = (e) => {
    // Uses "[]" and name attribute to set state value
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mx-auto">{this.state.title}</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "grid", gridGap: "1rem", justifyContent: "center" }}
        >
          <div className="form-group">
            <User 
              onChange={this.onTextChange} 
              value={this.state.user} 
            />
            <QuestionsAndAnswersList
              QuestAndAnswList={this.state.questionaire}
              handleAnswerEvent={this.onAnswerChange}
            />
            <UserComments
              onChange={this.onTextChange}
              value={this.state.comment}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
