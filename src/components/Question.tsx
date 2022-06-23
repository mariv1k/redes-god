import { ChangeEvent, ReactElement, useState } from "react";
import styled from "styled-components";
import colorData from "../global/color";
import questionsData from "../global/questions-data";
import { CurrentQuestion, QuestionData } from "../global/types";
import { nextChar } from "../global/utils";

export var currentQuestions: CurrentQuestion[] = [];

const RGQuestion = (data: QuestionData, id: number) => {
  var questionIdx = "a";
  const questionAnswers: ReactElement[] = [];
  const [selectedAnswer, setSelectedAnswer] = useState("0");
  const isAnswerChecked = (value: string): boolean => {
    return selectedAnswer === value;
  };
  const isAnyAnswerChecked = (): boolean => {
    return selectedAnswer !== "0";
  };

  const handleAnswerClick = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedAnswer(e.currentTarget.value);
    currentQuestions.forEach((currQuestion, index) => {
      if (currQuestion.id === id) {
        currentQuestions[index].checked = e.currentTarget.value;
        return;
      }
    });
  };

  data.answers.forEach((answer) => {
    const questionId = id.toString() + questionIdx;

    questionAnswers.push(
      <>
        <input
          type="radio"
          name={questionId}
          id={questionId}
          value={questionId}
          checked={isAnswerChecked(questionId)}
          onChange={handleAnswerClick}
        ></input>
        <label
          className={isAnswerChecked(questionId) ? "activeAnswer" : ""}
          htmlFor={questionId}
        >{`${answer}`}</label>
      </>
    );
    questionIdx = nextChar(questionIdx);
  });

  const handleRemoveAnswerClick = (): void => {
    setSelectedAnswer("0");
  };

  const handleReportAnswerClick = (): void => {
    alert("Reported");
  };

  const GRQuestionControls = () => {
    return (
      <>
        <QuestionButton
          className={
            isAnyAnswerChecked() ? "" : "inactiveQuestionControlButton"
          }
          onClick={handleRemoveAnswerClick}
        >
          <svg>
            <path d="M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.515 5 6.934V22l5.34-4.005C17.697 17.853 22 14.32 22 10c0-4.411-4.486-8-10-8zm3.707 10.293-1.414 1.414L12 11.414l-2.293 2.293-1.414-1.414L10.586 10 8.293 7.707l1.414-1.414L12 8.586l2.293-2.293 1.414 1.414L13.414 10l2.293 2.293z"></path>
          </svg>
        </QuestionButton>
        <QuestionButton onClick={handleReportAnswerClick}>
          <svg>
            <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-7 13h-2v-2h2v2zm0-4h-2V5h2v6z"></path>
          </svg>
        </QuestionButton>
        <RGQuestionIndex id={id} />
      </>
    );
  };

  return (
    <Question>
      <QuestionTitle className="question_title">{data.title}</QuestionTitle>
      <QuestionAnswers className="question_answers">
        {questionAnswers}
      </QuestionAnswers>
      <QuestionControls className="question_controls">
        {GRQuestionControls()}
      </QuestionControls>
    </Question>
  );
};

const RGQuestions = () => {
  var questionGroup: ReactElement[] = [];
  var id = 1;

  questionsData.forEach((question) => {
    if (id > 5) return;
    var component = RGQuestion(question, id);
    var currQuestion = {
      id,
      component,
      data: question,
      checked: "0",
    };
    questionGroup.push(component);
    if (!currentQuestions.includes(currQuestion))
      currentQuestions.push(currQuestion);
    id++;
  });
  return <>{questionGroup}</>;
};

const RGQuestionIndex = ({ id }: any) => {
  return <QuestionIndex>{id}</QuestionIndex>;
};

const QuestionIndex = styled.span`
  margin-top: auto;
  color: ${colorData.light.text1};
  font-size: 1rem;
`;

const QuestionControls = styled.div`
  width: auto;
  height: 100%;
  margin-left: 40px;
  grid-area: question_controls;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 5px;
  user-select: none;
`;

const QuestionButton = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${colorData.light.front1};
  border: 2px solid ${colorData.light.front2};
  display: flex;
  place-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;

  &.inactiveQuestionControlButton {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    background-color: ${colorData.light.front2};

    svg {
      fill: ${colorData.light.front1};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${colorData.light.front2};
  }
`;

const QuestionTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  white-space: normal;
  grid-area: question_title;
`;

const Question = styled.div`
  width: 95%;
  height: auto;
  max-width: 1000px;
  background-color: ${colorData.light.front1};
  padding: 20px 30px;
  border-radius: 4px;
  display: grid;
  gap: 0;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "question_title question_controls"
    "question_answers question_controls";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const QuestionAnswers = styled.div`
  width: auto;
  text-align: left;
  margin-top: 16px;
  grid-area: question_answers;

  input[type="radio"] {
    display: none;
  }

  .activeAnswer {
    color: ${colorData.light.selected1};

    &:before {
      background: ${colorData.light.front1};
      border-color: ${colorData.light.selected1};
    }
  }

  label {
    font-size: 1.05rem;
    cursor: pointer;
    padding: 0 0 0 2rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 0.75rem;

    &:focus,
    &:active,
    &:hover {
      color: ${colorData.light.selected1};

      &:before {
        background: ${colorData.light.front1};
        border-color: ${colorData.light.selected1};
      }
    }

    &:first-of-type {
      border: 0;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0rem;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 0.2rem solid #ccc;
    }
  }

  input:checked + label {
    @extend .activeAnswer;

    &:before {
      border-color: ${colorData.light.front1};
      border: 0.2rem solid ${colorData.light.selected1};
      background: ${colorData.light.selected1};
    }
  }
`;

export default RGQuestions;
