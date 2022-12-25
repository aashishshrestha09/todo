import { TodoInfo } from "../types/types";
import Grid from "@mui/material/Grid";
import { Todo } from "./Todo";
import { Dispatch, SetStateAction } from "react";

export const GetAllTodos: React.FC<{
  formFields: TodoInfo;
  setFormFields: Dispatch<SetStateAction<TodoInfo>>;
  todos: TodoInfo[];
  setTodos: Dispatch<SetStateAction<TodoInfo[]>>;
}> = ({ setFormFields, todos }) => {
  return (
    <Grid container>
      {todos.length > 0 &&
        todos.map((todo: TodoInfo) => (
          <Todo key={todo.id} setFormFields={setFormFields} todo={todo} />
        ))}
    </Grid>
  );
};
