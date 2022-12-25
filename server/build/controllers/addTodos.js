"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodos = void 0;
const __1 = require("..");
const uuid_1 = require("uuid");
const addTodos = (req, res) => {
    try {
        const { id, title, description } = req.body;
        if (id.length > 0) {
            __1.db.todo.remove({ id: id });
            const updatedTodo = {
                id: id,
                title: title,
                description: description,
            };
            __1.db.todo.save([updatedTodo]);
            res.status(200).json(updatedTodo);
        }
        else {
            const todo = {
                id: (0, uuid_1.v4)(),
                title: title,
                description: description,
            };
            __1.db.todo.save([todo]);
            res.status(200).json(todo);
        }
    }
    catch (error) {
        throw error;
    }
};
exports.addTodos = addTodos;
