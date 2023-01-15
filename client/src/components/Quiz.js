import React from "react";
import Questions from "./Questions";

export default function Quiz() {
  // Next Button event handler
  function onNext() {
    console.log("On");
  }
  // Prev button event handler
  function onPrev() {
    console.log("On");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Display Questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
