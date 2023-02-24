import React from 'react';
export default function Row(props: {answer: string, row: number, current: number, correctAnswer: string, win: boolean, setWin: Function}) {
    let [checked,setChecked] = React.useState(false);
    let [color ,setColor] = React.useState(["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]);
   if(props.row===props.current-1&&checked===false){setChecked(true); checkAnswer(); console.log();
   }

   function checkAnswer(){
         for(let i = 0; i<props.answer.length; i++){
            console.log(props.correctAnswer);
            
            if(props.answer[i]===props.correctAnswer[i]){setColor((prev)=>{let newColor = [...prev]; newColor[i] = "#6aaa64"; return newColor;});}
            else if(props.correctAnswer.includes(props.answer[i])){setColor((prev)=>{let newColor = [...prev]; newColor[i] = "#ffff00"; return newColor;});}
            else{setColor((prev)=>{let newColor = [...prev]; newColor[i] = "#ff0000"; return newColor;});}
         }
         console.log(JSON.stringify(color),JSON.stringify(["#00ff00","#00ff00","#00ff00","#00ff00","#00ff00"]));
         
    }
   
    if(checked===true&&JSON.stringify(color)===JSON.stringify(["#6aaa64","#6aaa64","#6aaa64","#6aaa64","#6aaa64"])){props.setWin(true);
    }
    return (
        <div className="row">
            <div className="AnswerBox" style={{"backgroundColor":color[0]}}>{props.answer[0]||""}</div>
            <div className="AnswerBox" style={{"backgroundColor":color[1]}}>{props.answer[1]||""}</div>
            <div className="AnswerBox" style={{"backgroundColor":color[2]}}>{props.answer[2]||""}</div>
            <div className="AnswerBox" style={{"backgroundColor":color[3]}}>{props.answer[3]||""}</div>
            <div className="AnswerBox" style={{"backgroundColor":color[4]}}>{props.answer[4]||""}</div>
        </div>
    );
}