import React from 'react';

import Item from './Todo';

const TodoList = props => {
//   const sortedList = props.list.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.list.map(item => (
        <Item key={item.id} item={item} toggleId={props.toggleId} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
