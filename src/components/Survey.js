import React from "react";
import Question from "./Question";
import Answer from "./Answer";

export default class Survey extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Poster 1",
      id: 1,
      qr_id: "332434%fgd",
      user: "test@test.com",
      comment: "",
      question_id: 1,
      question: "Why am I here?",
      answer: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  onAnswerChange = e => {
    const answer = e.target.value;
    this.setState(() => ({ answer }));
  };

  onTextChange = e => {
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
            <label>User:</label>
            <input
              className="form-control"
              name="Email"
              type="email"
              placeholder="Email"
              defaultValue={this.state.user}
              onChange={this.onTextChange}
            />
            <div className="formGroup" style={{ padding: "1rem 0" }}>
              <Question
                name={this.state.question_id}
                content={this.state.question}
              />
              <Answer
                name={this.state.question_id}
                value={this.state.answer}
                handleAnswerEvent={this.onAnswerChange}
              />
            </div>
            <label>Comment:</label>
            <textarea
              className="form-control"
              name="Comment"
              rows="2"
              onChange={this.onTextChange}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
