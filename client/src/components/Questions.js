import React, { useState, useEffect } from "react";
import data from "../database/data";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);

  const question = data[3];

  useEffect(() => {
    console.log(data);
  });

  function onSelect() {
    //setChecked(true);
    console.log("On slecet change");
  }

  return (
    <div className="questions">
      <h2 className="text-light">
        {question.id}. {question.question}
      </h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              value={false}
              id={`q${i}-option`}
              onChange={onSelect}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
