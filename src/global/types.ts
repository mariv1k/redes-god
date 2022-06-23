import { ReactElement } from "react";

export type QuestionData = {
  title: String;
  answers: String[];
  solution: String;
  lesson?: number;
};

export type CurrentQuestion = {
  id: number
  component: ReactElement,
  data: QuestionData,
  checked: string
}