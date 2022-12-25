import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChildPropsType } from "../types/types";
import React, { ChangeEvent } from "react";
import { addTodos } from "../api";

export const AddTodo: React.FC<ChildPropsType> = ({
  formFields,
  setFormFields,
}: ChildPropsType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSaveTodo = (): void => {
    addTodos(formFields);
    setFormFields({
      id: "",
      title: "",
      description: "",
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <TextField
        name="title"
        label="Title"
        id="margin-none"
        value={formFields.title}
        onChange={handleChange}
        style={{ margin: "0.5rem", width: 500 }}
      />
      <TextField
        name="description"
        label="Description"
        id="margin-dense"
        margin="dense"
        value={formFields.description}
        onChange={handleChange}
        style={{ width: 500 }}
      />
      <Button
        style={{ margin: "0.5rem", padding: "0.5rem" }}
        sx={{ width: 200, padding: 5 }}
        variant="contained"
        color="success"
        size="medium"
        disabled={
          formFields.description.length === 0 || formFields.title.length === 0
        }
        onClick={handleSaveTodo}
      >
        Add Todo
      </Button>
    </Box>
  );
};
