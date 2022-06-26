export interface QuestionData {
  id: number
  title: string;
  choices: string[];
  solution: Choice
  explanation: string;
};

export interface Question {
  id: number;
  data: QuestionData,
  choice: Choice
}

export type Choice = "a" | "b" | "c" | "d" | "-";