import { Router } from "express";
import { getTodos } from "./getTodos";
import { addTodos } from "./addTodos";
import { deleteTodo } from "./deleteTodo";

export const router: Router = Router();

router.get("/todos", getTodos);
router.post("/add-todo", addTodos);
router.delete("/delete-todo/:id", deleteTodo);
