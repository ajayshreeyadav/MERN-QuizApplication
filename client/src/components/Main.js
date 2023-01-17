import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/resultReducer";

export default function Main() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>Your will be asked 10 Questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>You can review and change your answer before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          className="textbox"
          type="text"
          placeholder="Username"
        />
      </form>
      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
