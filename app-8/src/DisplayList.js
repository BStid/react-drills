import React from "react";

function DisplayList(props) {
  let displayList = props.list.map((value, index) => {
    return <img src={value.image} key={index} />;
  });
  return <div>{displayList}</div>;
}

export default DisplayList;
