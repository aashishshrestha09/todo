"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = void 0;
const __1 = require("..");
const deleteTodo = (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = __1.db.todo.remove({ id: id });
        res.status(200).json(deletedTodo);
    }
    catch (error) {
        throw error;
    }
};
exports.deleteTodo = deleteTodo;
