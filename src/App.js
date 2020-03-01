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
    
  onAnswer1Change = e => {
    const answer1 = e.target.value;
    this.setState(() => ({ answer1 }));
  };

  onAnswer2Change = e => {
    const answer2 = e.target.value;
    this.setState(() => ({ answer2 }));
  };
  
  handleSubmit = e =>{
    e.preventDefault();
    const url ="https://jsonplaceholder.typicode.com/posts"
    const data = { answer1:this.state.answer1, answer2:this.state.answer2 }
    fetch(url, { method: "POST",
      body: JSON.stringify(data),
      headers:{ "Content-type": "application/json" } })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response)); 
    }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            {this.state.question1}
            <input
              type="text"
              placeholder="Answer"
              autoFocus
              onChange={this.onAnswer1Change}
            />
          </label>

          <label>
            {this.state.question2}
            <input
              type="text"
              placeholder="Answer"
              autoFocus
              onChange={this.onAnswer2Change}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
