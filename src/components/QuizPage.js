import React from "react";
import { nanoid } from "nanoid";
import Card from "./Card";
import Footer from "./Footer";

// Hookup answers to the questions, then figure out how to make random

export default function QuizPage() {
  const [trivia, setTrivia] = React.useState([]);

  function decoder(input) {
    return input.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }

  function createTrivia(obj) {
    const decodedQuestion = decoder(obj.question);
    const decodedCorrectAnswer = decoder(obj.correct_answer);
    const decodedIncorrectAnswers = obj.incorrect_answers.map((e) => {
      return decoder(e);
    });

    return {
      question: decodedQuestion,
      correctAnswer: decodedCorrectAnswer,
      wrongAnswers: decodedIncorrectAnswers,
      category: obj.category,
      difficulty: obj.difficulty,
    };
  }

  React.useEffect(() => {
    async function getTrivia() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await response.json();
        console.log(data.results);
        data.results.forEach((e) => {
          setTrivia((prevValue) => [...prevValue, createTrivia(e)]);
        });
      } catch (err) {
        console.log(err);
      }
    }

    getTrivia();
  }, []);

  const TriviaCards = trivia.map((e) => {
    return <Card question={e.question} key={nanoid()} />;
  });

  return (
    <div>
      {TriviaCards}
      <Footer />
    </div>
  );
}
