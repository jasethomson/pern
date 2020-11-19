import React from 'react';

function TodoListItem(props) {
  return (
    <div id={props.id} className="todoItem">
      {props.description}
    </div>
  );
}
