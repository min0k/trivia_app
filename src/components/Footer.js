export default function Footer(props) {
  return (
    <div>
      {props.gameEnded ? <h1>You scored 3/5 answers correct</h1> : null}
      {props.gameEnded ? (
        <button className="footer--button" onClick={props.checkAnswers}>
          Play Again
        </button>
      ) : (
        <button className="footer--button" onClick={props.checkAnswers}>
          Check Answers
        </button>
      )}
    </div>
  );
}
