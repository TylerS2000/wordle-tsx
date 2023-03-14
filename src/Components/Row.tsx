import React from 'react';
export default function Row(props: { answer: string, row: any, current: number, correctAnswer: string, win: boolean, setWin: Function, color: any, setColor:Function}) {
    let [checked, setChecked] = React.useState(false);
    let [textColor, setTextColor] = React.useState("#000000");
    const color = props.color;
    const setColor = props.setColor;
    if (props.row === props.current - 1 && checked === false) {
        setChecked(true); checkAnswer(); console.log();
        setTextColor("#ffffff");
    }

    function checkAnswer() {
        for (let i = 0; i < props.answer.length; i++) {
            // eslint-disable-next-line no-loop-func
            if (props.answer[i] === props.correctAnswer[i]) { setColor((prev:any) => { let newColor = [...prev]; newColor[props.row][i] = "#6aaa64"; return newColor; }); }
            else if (props.correctAnswer.includes(props.answer[i])) { setColor((prev: any) => { let newColor = [...prev]; newColor[props.row][i] = "#c9b458"; return newColor; }); }
            else { setColor((prev:any) => { let newColor = [...prev]; console.log("hi",newColor[props.row][i]);
             newColor[props.row][i] = "#787c7e"; return newColor; }); }
        }
    }
console.log(color);

    if (checked === true && JSON.stringify(color[props.row]) === JSON.stringify(["#6aaa64", "#6aaa64", "#6aaa64", "#6aaa64", "#6aaa64"])) {
        props.setWin(true);
    }
    return (
        <div className="row">
            <div className="AnswerBox" style={{ "backgroundColor": color[props.row][0], "color": textColor }}>{props.answer[0] || ""}</div>
            <div className="AnswerBox" style={{ "backgroundColor": color[props.row][1], "color": textColor }}>{props.answer[1] || ""}</div>
            <div className="AnswerBox" style={{ "backgroundColor": color[props.row][2], "color": textColor }}>{props.answer[2] || ""}</div>
            <div className="AnswerBox" style={{ "backgroundColor": color[props.row][3], "color": textColor }}>{props.answer[3] || ""}</div>
            <div className="AnswerBox" style={{ "backgroundColor": color[props.row][4], "color": textColor }}>{props.answer[4] || ""}</div>
        </div>
    );
}