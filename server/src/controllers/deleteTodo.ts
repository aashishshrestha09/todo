import { Request, Response } from "express";
import { db } from "..";

export const deleteTodo = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const deletedTodo = db.todo.remove({ id: id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    throw error;
  }
};
