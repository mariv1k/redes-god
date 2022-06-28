import { useEffect } from "react";
import data from "../../global/data.json";
import * as S from "../../global/styles";
import * as T from "../../global/types";
import { shuffle } from "../../global/utils";
import { CheckSolutionsButton } from "../Button";
import { Question } from "./Question";
import { SoloQuestion } from "../SoloExam/SoloQuestion";
import { SolvedQuestion } from "./SolvedQuestion";
import { SolvedSoloQuestion } from "../SoloExam/SolvedSoloQuestion";

export class ExamManager {
  private static _currentQuestion = 0;
  private static _questions: T.Question[] = [];
  public static QuestionsPerTest = 35;

  public static get questions(): T.Question[] {
    return this._questions;
  }

  public static InitQuestions(number?: number, force: boolean = false): void {
    if (number && number > data.questionsData.length) return;
    if (!force && this._questions.length > 0) return;
    ExamManager._currentQuestion = 0;
    this._questions = [];
    shuffle(data.questionsData)
      .slice(0, number)
      .forEach((questionData, index) => {
        const question: T.Question = {
          id: index + 1,
          data: {
            id: questionData.id,
            title: questionData.title,
            choices: questionData.choices,
            solution: questionData.solution as T.Choice,
            explanation: questionData.explanation,
          },
          choice: "-",
        };
        this._questions.push(question);
      });
  }

  public static QuestionsGroup(amount = -1) {
    return (
      <>
        {this._questions
          .slice(0, amount === -1 ? undefined : amount)
          .map((question) => Question(question))}
      </>
    );
  }
  public static NextSoloQuestion() {
    return SoloQuestion(this._questions[ExamManager._currentQuestion]);
  }

  public static SolvedSoloQuestion() {
    const currQuestionId = ExamManager._currentQuestion;

    ExamManager._currentQuestion =
      ExamManager._currentQuestion + 1 >= ExamManager._questions.length
        ? 0
        : ExamManager._currentQuestion++;
    return SolvedSoloQuestion(this._questions[currQuestionId]);
  }

  public static SolvedQuestionGroup(amount = -1) {
    return (
      <>
        {this._questions
          .slice(0, amount === -1 ? undefined : amount)
          .map((question) => SolvedQuestion(question))}
      </>
    );
  }

  public static GetChoice(value: string) {
    return value.match(new RegExp(/[a-d-]+/))![0] as T.Choice;
  }

  public static SetChoice(value: string): void {
    const id = parseInt(value.match(new RegExp(/\d+/))![0]);
    const choice = ExamManager.GetChoice(value);

    for (var i = 0; i < this._questions.length; i++) {
      if (this._questions[i].id === id) {
        this._questions[i].choice = choice !== "-" ? choice : "-";
        return;
      }
    }
  }
}

const Exam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  ExamManager.InitQuestions(ExamManager.QuestionsPerTest);

  return (
    <S.Exam>
      {ExamManager.QuestionsGroup(ExamManager.QuestionsPerTest)}
      <CheckSolutionsButton />
    </S.Exam>
  );
};

export default Exam;
