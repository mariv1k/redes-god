import * as S from "../global/styles";
import * as T from "../global/types";
import { FC } from "react";
import { nextChar } from "../global/utils";

export const SolvedQuestion: FC<T.Question> = (question) => {
  const QuestionTitle: FC<string> = (title) => {
    return (
      <S.SolvedQuestionTitle className="question_title">
        {title}
      </S.SolvedQuestionTitle>
    );
  };

  const QuestionChoices: FC<string[]> = (choices) => {
    var choiceIndex = "a";
    const isChoiceChecked = (value: string): boolean => {
      return question.choice === value;
    };
    const isChoiceCorrect = (value: string): boolean => {
      return (
        question.choice !== "-" &&
        question.choice === question.data.solution &&
        value.includes(question.data.solution) &&
        question.data.solution !== ""
      );
    };
    const isChoiceWrong = (value: string): boolean => {
      const choice = value.match(new RegExp(/[a-z]+/))![0];

      if (question.data.solution === "") return false;
      if (question.choice === "-" && question.data.solution === choice) return true;
      if (
        question.choice !== "-" &&
        question.choice === choice &&
        choice === question.data.solution
      )
        return true;
      return false;
    };
    const choicesGroup = choices.map((choice) => {
      const id = question.id.toString() + choiceIndex;
      choiceIndex = nextChar(choiceIndex);

      return (
        <>
          <input
            type="radio"
            name={id}
            id={id}
            value={id}
            checked={isChoiceChecked(id)}
          ></input>
          <label
            className={
              (isChoiceChecked(id) ? "activeChoice" : "") +
              " " +
              (isChoiceCorrect(id) ? "correctChoice" : "") +
              " " +
              (isChoiceWrong(id) ? "wrongChoice" : "")
            }
            htmlFor={id}
          >{`${choice}`}</label>
        </>
      );
    });

    return (
      <S.SolvedQuestionChoices className="question_choices">
        {choicesGroup}
      </S.SolvedQuestionChoices>
    );
  };

  const QuestionNumber: FC<number> = (num) => {
    return (
      <S.SolvedQuestionNumber className="question_number">
        {num}
      </S.SolvedQuestionNumber>
    );
  };

  const QuestionExplanation: FC<string> = (solution) => {
    return (
      <S.QuestionExplanation className="question_explanation">
        <label htmlFor={question.id.toString()}>
          Explicación<span>&#x3e;</span>
        </label>
        <input type="checkbox" id={question.id.toString()} name="accordion" />
        <div>
          <p>{solution}</p>
        </div>
      </S.QuestionExplanation>
    );
  };

  return (
    <S.SolvedQuestion>
      {QuestionNumber(question.id)}
      {QuestionTitle(question.data.title)}
      {QuestionChoices(question.data.choices)}
      {QuestionExplanation(question.data.explanation)}
    </S.SolvedQuestion>
  );
};
