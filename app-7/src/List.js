import React from "react";
import Todo from "./Todo";

export default function List(props) {
  let displayList = props.list.map((value, index) => {
    return <Todo key={index} display={value} />;
  });
  return <div>{displayList}</div>;
}
