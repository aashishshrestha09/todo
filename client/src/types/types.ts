import { Dispatch, SetStateAction } from "react";

export interface TodoInfo {
  id: string;
  title: string;
  description: string;
}

export interface ChildPropsType {
  formFields: TodoInfo;
  setFormFields: Dispatch<SetStateAction<TodoInfo>>;
}
