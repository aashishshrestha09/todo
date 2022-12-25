import axios, { AxiosPromise } from "axios";
import { TodoInfo } from "./types/types";
const baseUrl: string = "http://localhost:3000";

export const getTodos = async (): Promise<TodoInfo[]> => {
  try {
    const dataList = await axios.get(`${baseUrl}/todos`);
    return dataList.data.todos;
  } catch (error) {
    throw Error;
  }
};

export const addTodos = async (formFields: TodoInfo): Promise<AxiosPromise> => {
  try {
    const saveTodo = await axios.post<TodoInfo>(
      `${baseUrl}/add-todo`,
      formFields
    );
    return saveTodo;
  } catch (error) {
    throw Error;
  }
};

export const deleteTodo = async (id: string): Promise<TodoInfo> => {
  try {
    const deleteTodo = await axios.delete<TodoInfo>(
      `${baseUrl}/delete-todo/${id}`
    );
    return deleteTodo.data;
  } catch (error) {
    throw Error;
  }
};
