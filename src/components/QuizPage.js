



export default function QuizPage() {
    return (
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Footer />
        </div>
    )
}

function Card() {
    return(
        <div>
            <h2>How would one say goodbye in Spanish?</h2>
            <button>Adios</button>
            <button>Hola</button>
            <button>Au Revior</button>
            <button>Salir</button>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <h2>You scored 3/5 answers correct</h2>
            <button>Play Again</button>
        </div>
    )
}