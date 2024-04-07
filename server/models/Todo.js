import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo
