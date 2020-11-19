import React, { Fragment } from "react";

export default class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      const body = { description: this.state.description };
      let response = null;
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
      fetch('http://localhost:5000/todos', req)
        .then(res => res.json())
        .then(result => {
          response = result;
        })
    } catch (err){
      console.error(err.message);
    }

  }

  render() {
    return (
      <Fragment>
        <div>Input Todos</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.description} onChange={this.handleChange} />
          <input type="submit" value="Add" />
        </form>
      </Fragment>
    )
  }
}
