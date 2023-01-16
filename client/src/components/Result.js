import React from "react";
import { Link } from "react-router-dom";
import "../styles/Result.css";
import ResultTable from "./ResultTable";

export default function Result() {
  function onRestart() {
    console.log("On Restart");
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
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">10</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">8</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">40</span>
        </div>
        <div className="flex">
          <span>Quiz Result :</span>
          <span className="bold">Passed</span>
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
