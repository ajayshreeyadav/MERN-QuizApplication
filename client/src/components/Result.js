import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Result.css";
import ResultTable from "./ResultTable";
import { attemptsNumber, earnPointsNumber, flagResult } from "../helper/helper";

// Import actions
import { resetAllAction } from "../redux/questionReducer";
import { resetResultAction } from "../redux/resultReducer";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(flag);
  });

  const totalPoints = queue.length * 5;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointsNumber(result, answers, 5);
  const flag = flagResult(totalPoints, earnPoints);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Ajay Shree</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points :</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result :</span>
          <span
            style={{
              color: `${flag ? "forestgreen" : "#ff2a66"}`,
              fontWeight: "bold",
            }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}
