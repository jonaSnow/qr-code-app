import React from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";

export default class Survey extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
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

  onTextChange = e => {
    const answer = e.target.value;
    this.setState(() => ( { answer } ));
  };

  onUpdateComment = e => {
    const comment = e.target.value;
    this.setState(() => ( { comment }));
  };
  
  render() {
    return (
      <div className="container-fluid">
        <h1 className="mx-auto">{this.state.title}</h1>
        <form 
          onSubmit={this.handleSubmit}
          style={{display: 'grid', gridGap: '1rem', justifyContent: 'center'}}>
          <div className="form-group">
          <label>User:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              defaultValue={this.state.user}
            />
              <QuestionAndAnswer
                key={this.state.question_id}
                question={this.state.question}
                value={this.state.answer}
                handleAnswerEvent={this.onTextChange.bind(this)} 
              />
            <label>Comment:</label>
            <textarea className="form-control" rows="2" onChange={this.onUpdateComment.bind(this)}></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
