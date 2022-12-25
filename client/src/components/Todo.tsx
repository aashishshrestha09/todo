import { Delete, Build } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { TodoInfo } from "../types/types";
import { deleteTodo } from "../api";
import { Dispatch, SetStateAction } from "react";

const styles = {
  Icon: {
    marginLeft: "auto",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

export const Todo: React.FC<{
  setFormFields: Dispatch<SetStateAction<TodoInfo>>;
  todo: TodoInfo;
}> = ({ setFormFields, todo }) => {
  const delTodo = async (): Promise<void> => {
    await deleteTodo(todo.id);
  };

  const editTodo = (): void => {
    setFormFields(todo);
  };

  return (
    <Grid xs={12} item>
      <Paper elevation={2} style={styles.Paper}>
        <ul style={{ listStyle: "none" }}>
          <h3>{todo.title.toUpperCase()}</h3>
          <li>{todo.description}</li>
        </ul>
        <IconButton
          color="primary"
          aria-label="Edit"
          style={styles.Icon}
          onClick={editTodo}
        >
          <Build fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="Delete" onClick={delTodo}>
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
};
