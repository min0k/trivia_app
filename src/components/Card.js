import { nanoid } from "nanoid";
import React from "react";

export default function Card(props) {

  // Current Problem -- Cards rerender on footer button click, causing every Card component
  // to Re-render which reshuffles all the cards in the UI.


  const choiceButtons = props.answerChoices.map((e) => {
    return (
      <button className="quizpage--button" key={nanoid()}>
        {e}
      </button>
    );
  });

  console.log(props.answerChoices);
  
  return (
    <div>
      <p>{props.question}</p>
      {choiceButtons}
    </div>
  );
}
