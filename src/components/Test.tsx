import { useEffect } from "react";
import questionsData from "../global/data";
import * as S from "../global/styles";
import * as T from "../global/types";
import { shuffle } from "../global/utils";
import { CheckSolutionsButton } from "./Button";
import { Question } from "./Question";
import { SolvedQuestion } from "./SolvedQuestion";

export class TestManager {
  private static _questions: T.Question[] = [];

  public static get questions(): T.Question[] {
    return this._questions;
  }

  public static GenerateQuestions(number?: number, force: boolean = false) {
    if (number && number > questionsData.length) return;
    if (!force && this._questions.length > 0) return;
    this._questions = [];
    shuffle(questionsData)
      .slice(0, number)
      .forEach((questionData, index) => {
        const question: T.Question = {
          id: index + 1,
          data: questionData,
          choice: "-",
        };
        this._questions.push(question);
      });
  }

  public static QuestionsGroup() {
    return <>{this._questions.map((question) => Question(question))}</>;
  }

  public static SolvedQuestionsGroup() {
    return <>{this._questions.map((question) => SolvedQuestion(question))}</>;
  }

  public static GetChoice(value: string) {
    return value.match(new RegExp(/[a-d-]+/))![0] as T.Choice
  }

  public static SetChoice(value: string): void {
    const id = parseInt(value.match(new RegExp(/\d+/))![0]);
    const choice = TestManager.GetChoice(value)

    for (var i = 0; i < this._questions.length; i++) {
      if (this._questions[i].id === id) {
        this._questions[i].choice = choice !== "-" ? choice : "-";
        return
      }
    }
  }
}

const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  TestManager.GenerateQuestions(10);

  return (
    <S.Test>
      {TestManager.QuestionsGroup()}
      <CheckSolutionsButton />
    </S.Test>
  );
};

export default Test;
