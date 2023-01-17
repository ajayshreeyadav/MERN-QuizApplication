// Get all questions
export async function getQuestions(req, res) {
  res.json('Questions API get request');
}

// Insert all questions
export async function insertQuestions(req, res) {
  res.json('Questions API post request');
}

// Delete all questions
export async function dropQuestions(req, res) {
  res.json('Questions API delete request');
}

// Get all result
export async function getResult(req, res) {
  res.json('Result API get request');
}

// Insert all result
export async function insertResult(req, res) {
  res.json('Result API post request');
}

// Delete all result
export async function dropResult(req, res) {
  res.json('Result API delete request');
}
