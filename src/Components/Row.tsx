export default function Row(props: {answer: string}) {
    return (
        <div className="row">
            <div className="AnswerBox">{props.answer[0]}</div>
            <div className="AnswerBox">{props.answer[1]}</div>
            <div className="AnswerBox">{props.answer[2]}</div>
            <div className="AnswerBox">{props.answer[3]}</div>
            <div className="AnswerBox">{props.answer[4]}</div>
        </div>
    );
}