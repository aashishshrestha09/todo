import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { GetAllTodos } from "./components/GetAllTodos";
import { TodoInfo } from "./types/types";
import { getTodos } from "./api";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  useEffect(() => {
    fetchTodoAndSetTodos();
  }, [todos]);

  const fetchTodoAndSetTodos = async () => {
    const todoList = await getTodos();
    setTodos(todoList);
  };

  const [formFields, setFormFields] = useState<TodoInfo>({
    id: "",
    title: "",
    description: "",
  });

  return (
    <div className="App">
      <GetAllTodos
        formFields={formFields}
        setFormFields={setFormFields}
        todos={todos}
        setTodos={setTodos}
      />
      <AddTodo formFields={formFields} setFormFields={setFormFields} />
    </div>
  );
};

export default App;
