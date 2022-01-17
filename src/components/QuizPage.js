import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import createTrivia from "./createTrivia";

export default function QuizPage() {
  const [trivia, setTrivia] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [answerChosen, setAnswerChosen] = React.useState(false);


function choseAnswer(id) {
  console.log(id);
}

  React.useEffect(() => {
    async function getTrivia() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=31&difficulty=hard&type=multiple"
        );
        const data = await response.json();
        setTrivia(createTrivia(data.results));
      } catch (err) {
        console.log(err);
      }
    }
    getTrivia();
  }, []);

  const TriviaCards = trivia.map((e) => {
    return (
      <Card
        question={e.question}
        key={e.id}
        answerChoices={e.allAnswerChoices}
        chose={() => choseAnswer(e.id)}
      />
    );
  });

  function checkAnswers() {
    setGameEnded((prevValue) => !prevValue);
  }

  console.log("rendered quizpage");

  return (
    <div>
      {TriviaCards}
      <Footer checkAnswers={checkAnswers} gameEnded={gameEnded} />
    </div>
  );
}
