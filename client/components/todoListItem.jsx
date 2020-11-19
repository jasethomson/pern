import React from 'react';

export default function TodoListItem(props) {
  return (
    <tr id={props.id} className="todoItem">
      <td>Incomplete</td>
      <td>{props.description}</td>
      <td><button onClick={() => props.deleteTodo(props.id)}>Delete</button></td>
    </tr>
  );
}
