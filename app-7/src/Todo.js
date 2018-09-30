import React from "react";

export default function Todo(props) {
  return (
    <div>
      <input
        type="text"
        onChange={e => props.handle(e.target.value)}
        placeholder="Add to List"
      />
      <button onClick={props.add}> Add New </button>
    </div>
  );
}
