import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
// Import connection file
import conncet from './database/conn.js';

const app = express();

//App middleware
app.use(morgan('tiny')); // Optional
app.use(cors());
app.use(express.json());
config();

// Application port
const port = process.env.PORT || 8080;

// routes
app.use('/api', router); // APIs

app.get('/', (req, res) => {
  try {
    res.json('Get Request');
  } catch (error) {
    res.json(error);
  }
});

// Start server only when we have a valid connection
conncet()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Listning to port No : ${port}`);
      });
    } catch (error) {
      console.log('Can not connect to the server');
    }
  })
  .catch(error => {
    console.log('Invalid Database Connection');
  });
