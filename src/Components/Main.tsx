import "./Main.css"
import Row from "./Row";
import React from "react";
export default function Main() {
    const [answer, setAnswer] = React.useState("");
    const [row, setRow] = React.useState(0);
    const [answers, setAnswers] = React.useState(["","","","","",""]);
    const [correctAnswer, setCorrectAnswer] = React.useState("Mario");
        onkeydown = (e) => {
            if (answer.length<5&&e.key.match(/[a-zA-Z]/)&&e.key.length<2) {
                setAnswer((prev)=>{return prev+e.key});
            }
            if (e.key === "Backspace") {
                setAnswer((prev)=>{return prev.substring(0, prev.length-1)});
            }
            if (e.key === "Enter"&&answer.length===5) {
                setAnswer("");
                setRow((prev)=>prev+1);
            }
            console.log(e.key);
            
        }
          console.log(answers,row,answer);
            
    React.useEffect(() => {
        setAnswers((prev)=>{
            let newAnswers = [...prev];
            newAnswers[row] = answer;
            return newAnswers;
        });
    }, [answer,row]);
    //useEffect causes answer array to update with input
    return (
        <div className="AnswerGrid">
            <Row answer={answers[0]} row={0}/>
            <Row answer={answers[1]} row={1}/>
            <Row answer={answers[2]} row={2}/>
            <Row answer={answers[3]} row={3}/>
            <Row answer={answers[4]} row={4}/>
            <Row answer={answers[5]} row={5}/>
        </div>
    );
    }