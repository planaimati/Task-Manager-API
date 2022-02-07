//imports
import express from "express";
import { router as tasks } from "./routes/tasks";
import { connectDB } from "./db/connect";
import { config } from "dotenv";
import bodyParser from "body-parser";

//const bodyParser = require("body-parser");
const app = express();

config();
app.use(bodyParser.json());
app.use("/api/v1/tasks", tasks);
//app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
});

const port: number = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
