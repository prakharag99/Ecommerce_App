import express from "express";
import { addTodos, getAllTodos, toggleTodoDone, updateTodo ,deleteTodo} from "../Controller/todo-controller.js";

const router = express.Router();

router.post("/todos", addTodos);
router.get("/todos", getAllTodos);
router.get("/todos/:id", toggleTodoDone);
router.put("/todos/:id", updateTodo)
router.delete("/todos/:id", deleteTodo);

export default router;
