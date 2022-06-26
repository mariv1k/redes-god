import { ChangeEvent, FC, useState } from "react";
import constants from "../global/constants";
import * as S from "../global/styles";
import * as T from "../global/types";
import { nextChar } from "../global/utils";
import { TestManager } from "./Test";

export const Question: FC<T.Question> = (question) => {
  const [selectedChoice, setSelectedChoice] = useState("-");

  const QuestionNumber: FC<number> = (num) => {
    return (
      <S.QuestionNumber className="question_number">{num}. </S.QuestionNumber>
    );
  };

  const QuestionTitle: FC<string> = (title) => {
    return (
      <S.QuestionTitle className="question_title">
        {QuestionNumber(question.id)}
        {title}
      </S.QuestionTitle>
    );
  };

  const QuestionChoices: FC<string[]> = (choices) => {
    var choiceIndex = "a";
    const isChoiceChecked = (value: string): boolean => {
      return selectedChoice === value;
    };
    const handleChoiceClick = (e: ChangeEvent<HTMLInputElement>): void => {
      setSelectedChoice(e.currentTarget.value);
      TestManager.SetChoice(e.currentTarget.value);
    };
    const choicesGroup = choices.map((choice) => {
      const id = question.id.toString() + choiceIndex;
      const prevChoiceIndex = choiceIndex
      choiceIndex = nextChar(choiceIndex);

      return (
        <>
          <input
            type="radio"
            name={id}
            id={id}
            value={id}
            checked={isChoiceChecked(id)}
            onChange={handleChoiceClick}
          ></input>
          <label
            className={isChoiceChecked(id) ? "activeChoice" : ""}
            htmlFor={id}
          >{`${prevChoiceIndex}) ${choice}`}</label>
        </>
      );
    });

    return (
      <S.QuestionChoices className="question_choices">
        {choicesGroup}
      </S.QuestionChoices>
    );
  };

  const QuestionPanel = () => {
    const handleClearChoiceButton = (): void => {
      setSelectedChoice("-");
      TestManager.SetChoice(question.id + "-");
    };
    /*const handleReportChoiceButton = (): void => {
      // TODO
    };*/

    const ClearChoiceButton = () => {
      return (
        <>
          <S.Button
            data-tip
            data-for="clear_choice_button"
            className={selectedChoice === "-" ? "inactive" : ""}
            onClick={handleClearChoiceButton}
          >
            {constants.svg.clearChoice}
          </S.Button>
          
        </>
      );
    };
    /*const ReportChoiceButton = () => {
      return (
        <>
          <S.Button
            data-tip
            data-for="report_choice_button"
            onClick={handleReportChoiceButton}
          >
            {constants.svg.reportQuestion}
          </S.Button>
        </>
      );
    };*/

    return (
      <S.QuestionPanel className="question_panel">
        <ClearChoiceButton />
        {/*<ReportChoiceButton />*/}
      </S.QuestionPanel>
    );
  };

  return (
    <S.Question>
      {QuestionTitle(question.data.title)}
      {QuestionChoices(question.data.choices)}
      {QuestionPanel()}
    </S.Question>
  );
};
