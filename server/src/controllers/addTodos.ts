import { Request, Response } from "express";
import { TodoInterface } from "../types/TodoInterface";
import { db } from "..";
import { v4 as uuidv4 } from "uuid";

export const addTodos = (req: Request, res: Response): void => {
  try {
    const { id, title, description } = req.body;
    if (id.length > 0) {
      db.todo.remove({ id: id });
      const updatedTodo: TodoInterface = {
        id: id,
        title: title,
        description: description,
      };
      db.todo.save([updatedTodo]);
      res.status(200).json(updatedTodo);
    } else {
      const todo: TodoInterface = {
        id: uuidv4(),
        title: title,
        description: description,
      };
      db.todo.save([todo]);
      res.status(200).json(todo);
    }
  } catch (error) {
    throw error;
  }
};
