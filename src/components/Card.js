import { nanoid } from "nanoid";
import React from "react";

export default function Card(props) {
  const choiceButtons = props.answerChoices.map((e) => {
    return (
      <button onClick={props.chose} className="quizpage--button" key={nanoid()}>
        {e}
      </button>
    );
  });

  console.log(props.chose);

  // single answer for each button. Propably iterate over each to determine
  // if button has been clicked?
  // console.log(choiceButtons[0].props.children);

  return (
    <div>
      <p>{props.question}</p>
      {choiceButtons}
    </div>
  );
}
