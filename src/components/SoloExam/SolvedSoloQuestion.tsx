import parameters from "../../global/parameters";
import * as S from "../../global/styles";
import * as T from "../../global/types";
import { nextChar } from "../../global/utils";
import { ExamManager } from "../Exam/Exam";

export const SolvedSoloQuestion = (question: T.Question) => {
  const QuestionTitle = (title: string) => {
    return (
      <S.QuestionTitle className="question_title">{title}</S.QuestionTitle>
    );
  };

  const SolvedQuestionChoices = (choices: string[]) => {
    var choiceIndex = "a";
    const isChoiceChecked = (value: string): boolean => {
      return question.choice === ExamManager.GetChoice(value);
    };
    const isChoiceCorrect = (value: string): boolean => {
      const choice = ExamManager.GetChoice(value);

      if (question.data.solution === "-") return false;
      if (question.choice === "-") return false;
      if (choice === question.data.solution) return true;
      return false;
    };
    const isChoiceWrong = (value: string): boolean => {
      const choice = ExamManager.GetChoice(value);

      if (question.data.solution === "-") return false;
      if (question.choice === "-" && question.data.solution === choice)
        return true;
      if (question.choice === choice && choice !== question.data.solution)
        return true;
      return false;
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
          >{`${prevChoiceIndex}) ${choice}`}</label>
        </>
      );
    });

    return (
      <S.SolvedQuestionChoices className="question_choices">
        {choicesGroup}
      </S.SolvedQuestionChoices>
    );
  };

  const SolvedQuestionExplanation = (explanation: string) => {
    return (
      <S.SolvedQuestionExplanation
        className={
          "question_explanation " + (explanation === "" ? "inactive" : "")
        }
      >
        <label htmlFor={question.id.toString()}>
          {"Explicación"}
          {parameters.svg.unfoldAccordion}
        </label>
        <input type="checkbox" id={question.id.toString()} name="accordion" />
        <div dangerouslySetInnerHTML={{ __html: explanation }} />
      </S.SolvedQuestionExplanation>
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
    <S.SolvedQuestion>
      {QuestionTitle(question.data.title)}
      {SolvedQuestionChoices(question.data.choices)}
      {SolvedQuestionExplanation(question.data.explanation)}
      {QuestionPanel()}
    </S.SolvedQuestion>
  );
};
