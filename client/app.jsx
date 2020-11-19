import React, { Fragment } from 'react';
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo";

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
          <ListTodo />
        </div>
      </Fragment>
    );
  }
}
