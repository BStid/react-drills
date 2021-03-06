import React from "react";

export default function List(props) {
  let displayList = props.list.map((value, index) => {
    return <h3 key={index}>{value}</h3>;
  });
  return <div>{displayList}</div>;
}
