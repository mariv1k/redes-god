import styled from "styled-components"
import parameters from "./parameters"

// App

export const App = styled.div`
  background-color: ${parameters.colors.color1};
  width: 100%;
  min-height: 100vh;
  min-width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: ${parameters.font.fontFamily}, sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    color: ${parameters.colors.color4};
  }
`

// Main

export const Main = styled.main`
  width: 95%;
  min-height: calc(100vh - ${parameters.height.header});
  height: auto;
  max-width: 1000px;
  padding: 30px 0;
`

// Header

export const Header = styled.header`
  width: 100%;
  height: ${parameters.height.header};
  position: sticky;
  z-index: 1;
  background-color: ${parameters.colors.color3};
  transition: top 0.2s ease-out !important;
  padding: 10px 25px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

// Footer

export const Footer = styled.footer`
  color: ${parameters.colors.color1};
  background-color: ${parameters.colors.color3};
  height: ${parameters.height.footer}px;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  gap: 10px;
  justify-content: left;
  align-items: center;

  * {
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`

// Exam

export const Exam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;
`

// Solved Test

export const SolvedExam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;

  .ExamScore {
    background-color: ${parameters.colors.color2};
    padding: 20px 30px;
    border-radius: 4px;
  }
`

// Question

export const Question = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${parameters.colors.color2};
  color: ${parameters.colors.color4};
  padding: 20px 30px calc(20px - 0.4rem) 30px;
  border-radius: 4px;
  display: grid;
  gap: 0;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "question_title question_panel"
    "question_choices question_choices"
    "question_choices question_choices";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const QuestionTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  grid-area: question_title;
  margin-bottom: ${parameters.margin.questionTitle};
  width: 100%;
`

export const QuestionChoices = styled.div`
  grid-area: question_choices;
  width: 100%;
  text-align: left;

  input[type="radio"] {
    display: none;
  }

  .activeChoice {
    color: ${parameters.colors.color4};

    &:before {
      background: ${parameters.colors.color2};
      border-color: ${parameters.colors.color4};
    }
  }

  label {
    font-size: 1.04rem;
    cursor: pointer;
    padding: ${parameters.padding.choices};
    position: relative;
    display: flex;
    align-items: center;

    &:focus,
    &:active,
    &:hover {
      color: ${parameters.colors.color6};

      &:before {
        background: ${parameters.colors.color2};
        border-color: ${parameters.colors.color6};
      }
    }

    &:first-of-type {
      border: 0;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0rem;
      width: 7px;
      height: 7px;
      border-radius: 20%;
      border: 0.2rem solid #ccc;
    }
  }

  input:checked + label {
    @extend .activeAnswer;
    pointer-events: none;
    color: ${parameters.colors.color6};

    &:before {
      border-color: ${parameters.colors.color6};
      border: 0.2rem solid ${parameters.colors.color6};
      background: ${parameters.colors.color6};
    }
  }
`

export const QuestionPanel = styled.div`
  grid-area: question_panel;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  gap: 8px;
`

// Solved Question

export const SolvedQuestion = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${parameters.colors.color2};
  color: ${parameters.colors.color4};
  padding: 20px 30px calc(20px - 0.4rem) 30px;
  border-radius: 4px;
  display: grid;
  gap: 0;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "question_title question_panel"
    "question_choices question_choices"
    "question_choices question_choices"
    "question_explanation question_explanation";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const SolvedQuestionChoices = styled.div`
  grid-area: question_choices;
  width: 100%;
  text-align: left;
  pointer-events: none;

  input[type="radio"] {
    display: none;
  }

  .activeChoice {
    color: ${parameters.colors.color4};

    &:before {
      background: ${parameters.colors.color2};
      border-color: ${parameters.colors.color4};
    }
  }

  .correctChoice {
    color: ${parameters.colors.color8};
  }

  .wrongChoice {
    color: ${parameters.colors.color9};
  }

  label {
    font-size: 1.04rem;
    cursor: pointer;
    padding: ${parameters.padding.choices};
    position: relative;
    display: flex;
    align-items: center;

    &:focus {
      color: ${parameters.colors.color6};

      &:before {
        background: ${parameters.colors.color2};
        border-color: ${parameters.colors.color6};
      }
    }

    &:first-of-type {
      border: 0;
    }

    &:before {
      content: "";
      opacity: 0.5;
      position: absolute;
      left: 0rem;
      width: 7px;
      height: 7px;
      border-radius: 20%;
      border: 0.2rem solid #ccc;
    }
  }

  input:checked + label {
    @extend .activeAnswer;
    pointer-events: none;

    &:before {
      border-color: ${parameters.colors.color6};
      border: 0.2rem solid ${parameters.colors.color6};
      background: ${parameters.colors.color6};
    }
  }
`

export const SolvedQuestionExplanation = styled.div`
  grid-area: question_explanation;
  width: 100%;
  border-radius: 4px;
  background-color: ${parameters.colors.color1};
  margin-top: 20px;
  font-weight: 500;
  font-size: 1rem;

  &.inactive {
    display: none;
  }

  label {
    padding: 10px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    user-select: none;
    font-weight: 700;

    &:hover {
      opacity: 0.8;
    }
  }

  label + input[type="checkbox"] {
    display: none;
  }

  div {
    max-height: 0;
    overflow: hidden;
    font-size: 0.9rem;
  }

  label + input[type="checkbox"]:checked + div {
    padding: 10px 20px;
    max-height: fit-content;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${parameters.colors.color4};
  }
`

// Button

export const Button1 = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${parameters.colors.color7};
  color: ${parameters.colors.color4};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  padding: 6px 10px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &.inactive {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }

  svg {
    float: left;
    width: 25px;
    height: 25px;
    fill: ${parameters.colors.color4};
  }
`

export const Button2 = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${parameters.colors.color7};
  color: ${parameters.colors.color4};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.inactive {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }

  svg {
    float: left;
    width: 25px;
    height: 25px;
    fill: ${parameters.colors.color4};
  }
`

// Solo Question Exam

export const SoloQuestionExam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;
`

// Author

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  img {
    width: 300px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
  }
`
