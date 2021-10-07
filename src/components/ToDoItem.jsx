import React from "react";

function ToDoItem(props) {
  let items = props.items;
  return (
    <div>
      <ul>
        {items.map((todoItem, id) => (
          <li
            key={id}
            onClick={() => {
              props.onChecked(id);
            }}
          >
            {todoItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItem;
