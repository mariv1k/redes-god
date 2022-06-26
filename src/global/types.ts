export interface QuestionData {
  id: number
  title: string;
  choices: string[];
  solution: string;
  explanation: string;
};

export interface Question {
  id: number;
  data: QuestionData,
  choice: string  
}