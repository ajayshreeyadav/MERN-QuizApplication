import React, { useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";

// Redux store import
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });

  // Next Button event handler
  function onNext() {
    console.log("On");
    if (trace < queue.length - 1) {
      // update the trace value by 1 using MoveNextAction
      dispatch(MoveNextQuestion());
    }
  }
  // Prev button event handler
  function onPrev() {
    console.log("On");
    if (trace > 0) {
      // update the trace value by 1 using MovePrevAction
      dispatch(MovePrevQuestion());
    }
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
