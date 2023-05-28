import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import db from "./db/db.js";
import taskRouter from "./routes/tasks.js";



const app = express();


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



app.use('/tasks', taskRouter);

app.get("/", (req, res) => {
    res.send("Hello World edited");
});

app.listen(5000, (req, res) => {
    console.log("Server started at http://localhost:5000");
});