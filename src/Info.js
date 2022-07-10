import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Info(props) {
  const { company, dates, duties, title } = props.data;

  const desc = duties.map((x) => (
    <div className="job-desc">
      {" "}
      <FaAngleDoubleRight />
      <p>{x}</p>
    </div>
  ));

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {desc}
      <button className="btn">more Info</button>
    </article>
  );
}
