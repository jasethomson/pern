import React from "react";

export default class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }
  render() {
    return (
      <div>Input Todos</div>
      // <form>
      //   <input type="text"/>
      //   <button>Add</button>
      // </form>
    )
  }
}
