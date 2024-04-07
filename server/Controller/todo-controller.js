import Todo from "../models/Todo.js";

export const addTodos = async (req, res) => {
    try {
        if (req.body.text.trim() === '') {
            return res.status(400).json({ message: 'Todo text cannot be empty' });
        }
        const newTodo = await Todo.create({
            text: req.body.text,
            createdAt: Date.now(),
        });
        return res.status(200).json(newTodo);
    } catch (error) {
        console.error('Error adding new todo:', error);
        return res.status(500).json({ message: error.message });
    }
};

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        return res.status(200).json(todos);
    } catch (error) {
        console.error('Error getting all todos:', error);
        return res.status(500).json({ message: error.message });
    }
};

export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await Todo.findById(req.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done },
            { new: true }
        );
        return res.status(200).json(todo);
    } catch (error) {
        console.error('Error toggling todo:', error);
        return res.status(500).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        if (req.body.text.trim() === '') {
            return res.status(400).json({ message: 'Todo text cannot be empty' });
        }
        await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { text: req.body.text },
            { new: true }
        );
        const todo = await Todo.findById(req.params.id);
        return res.status(200).json(todo);
    } catch (error) {
        console.error('Error updating todo:', error);
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        return res.status(500).json({ message: error.message });
    }
}
