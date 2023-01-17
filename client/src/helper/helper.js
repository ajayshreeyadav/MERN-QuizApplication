import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPointsNumber(result, answers, points) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => points)
    .reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints; // get 50% marks at least to passed
}

// Check User Route

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}
