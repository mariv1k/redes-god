import { ChangeEvent, useState } from "react";
import parameters from "../../global/parameters";
import * as S from "../../global/styles";
import * as T from "../../global/types";
import { nextChar } from "../../global/utils";
import { ExamManager } from "../Exam/Exam";

export const Question = (question: T.Question) => {
  const [selectedChoice, setSelectedChoice] = useState("-");

  const QuestionTitle = (title: string, num: number) => {
    return (
      <S.QuestionTitle className="question_title">
        {num}. {title}
      </S.QuestionTitle>
    );
  };

  const QuestionChoices = (choices: string[]) => {
    var choiceIndex = "a";
    const isChoiceChecked = (value: string): boolean => {
      return selectedChoice === value;
    };
    const handleChoiceClick = (e: ChangeEvent<HTMLInputElement>): void => {
      setSelectedChoice(e.currentTarget.value);
      ExamManager.SetChoice(e.currentTarget.value);
    };
    const choicesGroup = choices.map((choice) => {
      const id = question.id.toString() + choiceIndex;
      const prevChoiceIndex = choiceIndex;
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
      ExamManager.SetChoice(question.id + "-");
    };
    /*const handleReportChoiceButton = (): void => {
      // TODO
    };*/

    const ClearChoiceButton = () => {
      return (
        <>
          <S.Button2
            data-tip
            data-for="clear_choice_button"
            className={selectedChoice === "-" ? "inactive" : ""}
            onClick={handleClearChoiceButton}
          >
            {parameters.svg.clearChoice}
          </S.Button2>
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
      {QuestionTitle(question.data.title, question.id)}
      {QuestionChoices(question.data.choices)}
      {QuestionPanel()}
    </S.Question>
  );
};
