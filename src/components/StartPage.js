export default function StartPage(props) {
    return (
        <div>
            <h1>Trivia Quiz!</h1>
            <p>Let's see how many questions you can answer correctly.</p>
            <button onClick={props.start}>Play</button>
        </div>
    )
}

