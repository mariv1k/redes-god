import { ChangeEvent, FC, useState } from "react";
import ReactTooltip from "react-tooltip";
import constants from "../global/constants";
import * as S from "../global/styles";
import * as T from "../global/types";
import { nextChar } from "../global/utils";
import { TestManager } from "./Test";
import Tooltip from "./Tooltip";

export const Question: FC<T.Question> = (question) => {
  const [selectedChoice, setSelectedChoice] = useState("-");
  const [tooltip, showTooltip] = useState(true);

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
          >{`${choice}`}</label>
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
      TestManager.SetChoice("-");
    };

    const ClearChoiceButton = () => {
      return (
        <>
          <S.Button
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
            data-tip
            data-for="clear_choice_button"
            className={selectedChoice === "-" ? "inactive" : ""}
            onClick={handleClearChoiceButton}
          >
            {constants.svg.clearChoice}
          </S.Button>
          {Tooltip("Desmarcar solución", "clear_choice_button")}
        </>
      );
    };
    const ReportChoiceButton = () => {
      return (
        <>
          <S.Button
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
            data-tip
            data-for="report_choice_button"
          >
            {constants.svg.reportQuestion}
          </S.Button>
          {Tooltip("Informar de un error", "report_choice_button")}
        </>
      );
    };

    return (
      <S.QuestionPanel className="question_panel">
        <ClearChoiceButton />
        <ReportChoiceButton />
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
