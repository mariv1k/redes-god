export interface QuestionData {
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