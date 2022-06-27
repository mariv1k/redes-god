import { ChangeEvent, useState } from "react";
import * as S from "../../global/styles";
import { nextChar } from "../../global/utils";
import { ExamManager } from "../Exam/Exam";
import * as T from "../../global/types";
import { useNavigate } from "react-router-dom";

export const SoloQuestion = (question: T.Question) => {
  const [selectedChoice, setSelectedChoice] = useState("-");

  const QuestionTitle = (title: string) => {
    return (
      <S.QuestionTitle className="question_title">{title}</S.QuestionTitle>
    );
  };

  const QuestionChoices = (choices: string[]) => {
    var choiceIndex = "a";
    const navigate = useNavigate();
    const isChoiceChecked = (value: string): boolean => {
      return selectedChoice === value;
    };
    const handleChoiceClick = (e: ChangeEvent<HTMLInputElement>): void => {
      setSelectedChoice(e.currentTarget.value);
      ExamManager.SetChoice(e.currentTarget.value);
      navigate("/solved-solo-exam");
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
    /*const handleReportChoiceButton = (): void => {
      // TODO
    };*/

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
