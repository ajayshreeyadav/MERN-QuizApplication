import { Router } from 'express';
const router = Router();

//import controllers
import * as controller from '../controllers/controller.js';

// Questions Route API
// router.get('/questions', controller.getQuestions);
// router.post('/questions', controller.insertQuestions);

router
  .route('/questions')
  .get(controller.getQuestions) // GET request
  .post(controller.insertQuestions) // POST request
  .delete(controller.dropQuestions); // DELETE request

router
  .route('/result')
  .get(controller.getResult) // GET request
  .post(controller.insertResult) // POST request
  .delete(controller.dropResult); // DELETE request

export default router;
