import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

//App middleware
app.use(morgan("tiny")); // Optional
app.use(cors());
app.use(express.json());
config();

// Application port
const port = process.env.PORT || 8080;
// routes
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Listning to port No : ${port}`);
});
