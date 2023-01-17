import Question from '../models/questionSchema.js';
import Results from '../models/resultSchema.js';
import questions, { answers } from '../database/data.js';
// Get all questions
export async function getQuestions(req, res) {
  try {
    const q = await Question.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// Insert all questions
export async function insertQuestions(req, res) {
  try {
    Question.insertMany(
      { questions: questions, answers: answers },
      function (err, data) {
        res.json({ Message: 'Data Saved Successfully..!' });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

// Delete all questions
export async function dropQuestions(req, res) {
  try {
    await Question.deleteMany();
    res.json({ Message: 'Questions Deleted Successfully..!' });
  } catch (error) {
    res.json({ error });
  }
}

// Get all result
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

// Insert all result
export async function insertResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error('Data Not Provided..!');
    Results.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ Message: 'Result Saved Successfully..!' });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

// Delete all result
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ Message: 'Result Deleted Successfully..!' });
  } catch (error) {
    res.json({ error });
  }
}
