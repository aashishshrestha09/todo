import { Request, Response } from "express";
import { db } from "..";
import { TodoInterface } from "../types/TodoInterface";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoInterface[] = await db.todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};
