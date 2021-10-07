import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function lineThrough(item) {
    setIsDone((preValue) => !preValue);
  }

  let items = props.items;
  return (
    <div onClick={lineThrough}>
      <ul>
        {items.map((todoItem) => (
          <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {todoItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItem;
