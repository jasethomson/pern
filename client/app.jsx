import React, { Fragment } from 'react';
import InputTodo from "./components/inputTodo";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder: null
    }
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <InputTodo />
        </div>
      </Fragment>
    );
  }
}
