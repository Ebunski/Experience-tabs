import React from "react";

export default function Button(props) {
  return (
    <button
      className={`job-btn ${props.current === props.index ? "active-btn" : ""}`} //////   note the code    ////  - checks if the index is the current index
      onClick={() => props.changeTab(props.index)}
    >
      {props.work}
    </button>
  );
}
