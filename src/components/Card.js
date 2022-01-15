import { nanoid } from "nanoid";
import React from "react";

export default function Card(props) {

// Understand the code below, then use it to shuffle answers.
// Taken from -- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 

console.log(props.answerChoices)

// React.useEffect(() => {
//   const shuffled = props.answerChoices
//   .map((value) => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)
// })


   const choiceButtons = props.answerChoices.map(e => {
    return <button className="quizpage--button" key={nanoid()}>{e}</button>
  })

    return (
      <div>
        <p>{props.question}</p>
        {choiceButtons}
      </div>
    );
  }