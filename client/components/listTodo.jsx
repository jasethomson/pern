import React, {Fragment} from 'react';
import TodoListItem from './todoListItem';

export default class ListTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  getTodos() {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  deleteTodo(id) {
    let req = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`http://localhost:5000/todos/${id}`, req)
    .then(res => res.json())
    .then(status => {
      if(status === "success") {
        let todos = this.state.todos;
        todos = todos.filter(todo => todo.todo_id !== id);
        this.setState({ todos });
      } else {
        alert(status);
      }
    })
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map(todo => {
            return (
              <TodoListItem
                key={todo.todo_id}
                id={todo.todo_id}
                description={todo.description}
                deleteTodo={this.deleteTodo}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
