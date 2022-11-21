import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Note from "./db.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get("/api/v1/notes/sync", async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/v1/notes/new", async (req, res) => {
  const dbNotes = req.body;
  try {
    const note = await Note.create(dbNotes);
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/v1/notes/delete", async (req, res) => {
  const id = req.body;
  try {
    const note = await Note.findOneAndDelete({ _id: id });
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
