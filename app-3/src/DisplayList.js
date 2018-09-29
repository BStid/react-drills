import React from "react";

export default function DisplayList(props) {
  console.log(props.list);
  let displayList = props.list
    .filter(value => {
      return value.toLowerCase().includes(props.input);
    })
    .map((value, index) => {
      return (
        <h1 key={index} className="itemInBox">
          {value}
        </h1>
      );
    });
  return <div>{displayList}</div>;
}
