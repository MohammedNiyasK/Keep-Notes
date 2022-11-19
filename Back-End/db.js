import mongoose from "mongoose";
const { Schema } = mongoose;
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.CONNCECTION_STRING)

const noteSchema = new Schema ({
    title : String,
    content : String
})

const Note = mongoose.model('Note' , noteSchema)

export default Note;

