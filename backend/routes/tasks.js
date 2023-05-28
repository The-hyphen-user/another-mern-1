import express from "express";
import db from "../db/db.js";

const router = express.Router();

//get all tasks
router.get('/', async (req, res) => {
    let collection = await db.collection("tasks");
    let result = await collection.find({}).toArray();
    console.log("result: ", result);
    res.send(result).status(200);
})

//create a task
router.post("/", async (req, res) => {
    let collection = await db.collection("tasks");
    let task = req.body;
    if(!task.title) {
        res.send("Title is required").status(400);
        return;
    }
    let duplicate = await collection.findOne({title: task.title});
    if(duplicate) {
        res.send("Task already exists").status(400);
        return;
    }
    task.date = new Date();
    let result = await collection.insertOne(task);
    console.log("result: ", result);
    res.send(result).status(204);
})

//delete a task
router.delete("/", async (req, res) => {
    let collection = await db.collection("tasks");
    let result = await collection.deleteOne({title: req.body.title});
    console.log("deteling task result: ", result);
    res.send(result).status(200);
})

//update a task
router.put("/", async (req, res) => {
    let collection = await db.collection("tasks");
    let oldTask = req.body.oldTask;
    let newTask = req.body.newTask;
    let duplicate = await collection.findOne({title: oldTask.title});
    if(!duplicate) {
        res.send("Task does not exist").status(400);
        return;
    }
    if (!oldTask.title || !newTask.title) {
        res.send("Title is required").status(400);
        return;
    }
    let result = await collection.updateOne({title: oldTask.title}, {$set: {title: newTask.title, task: newTask.task}});
    console.log("result: ", result);
    res.send(result).status(204);
})



router.get("/test", (req, res) => {
    res.send("Hello World from tasks");
})

export default router;

/*
    get all
    post
    update
    delete




 */