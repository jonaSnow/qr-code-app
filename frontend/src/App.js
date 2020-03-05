import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state={ title: "Form 1",
    question1: "What is your name?",
    question2: "Are you a baby?",
    id: 1,
    answer1: "",
    answer2: "" };
    }
    
  onTextChange = e => {
    const answer1 = e.target.value;
    this.setState(() => ({ answer1 }));
  };
  
  handleSubmit = e =>{
    e.preventDefault();
    const url ="https://jsonplaceholder.typicode.com/posts"
    const data = { answer1:this.state.answer1 }
    fetch(url, { method: "POST",
      body: JSON.stringify(data),
      headers:{ "Content-type": "application/json" } })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response)); 
    }

  render() {
    return ( 
      <div className="container-fluid">
         <h1 className="mx-auto">{this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>{this.state.question1}</label>
            <input
              className="form-control" 
              type="text"
              placeholder="Answer"
              autoFocus
              onChange={this.onTextChange}/>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control"rows="2"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}

export default App;
