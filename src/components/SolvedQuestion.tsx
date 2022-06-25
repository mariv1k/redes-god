import * as S from "../global/styles";
import * as T from "../global/types";
import { FC } from "react";
import { nextChar } from "../global/utils";

export const SolvedQuestion: FC<T.Question> = (question) => {
  const SolvedQuestionNumber: FC<number> = (num) => {
    return (
      <S.QuestionNumber className="question_number">{num}. </S.QuestionNumber>
    );
  };

  const SolvedQuestionTitle: FC<string> = (title) => {
    return (
      <S.QuestionTitle className="question_title">{SolvedQuestionNumber(question.id)}{title}</S.QuestionTitle>
    );
  };

  const SolvedQuestionChoices: FC<string[]> = (choices) => {
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

  const SolvedQuestionExplanation: FC<string> = (explanation) => {
    return (
      <S.QuestionExplanation className={"question_explanation " + (explanation === "" ? "inactive" : "")} >
        <label htmlFor={question.id.toString()}>
          Explicación<span>&#x3e;</span>
        </label>
        <input type="checkbox" id={question.id.toString()} name="accordion" />
        <div>
          <p>{explanation}</p>
        </div>
      </S.QuestionExplanation>
    );
  };

  return (
    <S.SolvedQuestion>
      {SolvedQuestionTitle(question.data.title)}
      {SolvedQuestionChoices(question.data.choices)}
      {SolvedQuestionExplanation(question.data.explanation)}
    </S.SolvedQuestion>
  );
};
