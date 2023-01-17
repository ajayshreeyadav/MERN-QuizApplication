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
