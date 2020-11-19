import React, {Fragment} from 'react';
import TodoListItem from './todoListItem';

export default class ListTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  getTodos() {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      this.state.todos.map(todo => {
        return (
          <TodoListItem
            key={todo.todo_id}
            id={todo.todo_id}
            description={todo.description}
          />
        );
      })
    );
  }
}
