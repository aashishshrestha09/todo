"use strict";
// import { Request, Response } from "express";
// import { db } from "..";
// import { TodoInterface } from "../types/TodoInterface";
// export const updateTodo = (req: Request, res: Response) => {
//   try {
//     const { id, title, description } = req.body;
//     const todo: TodoInterface = {
//       id: id,
//       title: title,
//       description: description,
//     };
//     let options = {
//       multi: false,
//       upsert: false,
//     };
//     let updatedTodo = db.todo.update(todo, options);
//     res.status(200).json(updatedTodo);
//   } catch (error) {
//     throw error;
//   }
// };
