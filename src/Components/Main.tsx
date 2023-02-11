import "./Main.css"
import Row from "./Row";
import React from "react";
export default function Main() {
    const [answer, setAnswer] = React.useState("");
    
    
        onkeydown = (e) => {
            if (answer.length<5&&e.key.match(/[a-zA-Z]/)&&e.key.length<2) {
            setAnswer((prev)=>prev+e.key);

            }
            if (e.key === "Backspace") {
                setAnswer((prev)=>{return prev.substring(0, prev.length-1)});
            }
        }
          console.log(answer);
            
    
    return (
        <div className="AnswerGrid">
            <Row answer={answer}/>
            <Row answer={answer}/>
            <Row answer={answer}/>
            <Row answer={answer}/>
            <Row answer={answer}/>
            <Row answer={answer}/>
            <input/>
        </div>
    );
    }