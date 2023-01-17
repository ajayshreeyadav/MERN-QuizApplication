import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";
import { PushAnswer } from "../hooks/setResult";

// Import Redux store
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const { queue, trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });

  // Next Button event handler
  function onNext() {
    console.log("On");
    if (trace < queue.length - 1) {
      // update the trace value by 1 using MoveNextAction
      dispatch(MoveNextQuestion());

      // Insert a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
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

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  // finish exam after last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Display Questions */}
      <Questions onChecked={onChecked} />

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
