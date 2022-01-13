export default function Card(props) {
    return (
      <div>
        <p>{props.question}</p>
        <button className="quizpage--button">Adios</button>
        <button className="quizpage--button">Hola</button>
        <button className="quizpage--button">Au Revior</button>
        <button className="quizpage--button">Salir</button>
      </div>
    );
  }