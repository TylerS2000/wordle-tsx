import './Keyboard.css'
import React from 'react'
export default function Keyboard (props:{guess:string, correctAnswer:string, answer:string, setAnswer:React.Dispatch<React.SetStateAction<string>>, setGuess:React.Dispatch<React.SetStateAction<string>>, setRow:React.Dispatch<React.SetStateAction<number>>}) {
    interface checkedLettersInterface {
        [key: string]: {guessed:boolean,correct:boolean};
    }
    const [checkedLetters, setCheckedLetters] = React.useState<checkedLettersInterface>({"Q":{guessed:false,correct:false},"W":{guessed:false,correct:false},"E":{guessed:false,correct:false},"R":{guessed:false,correct:false},"T":{guessed:false,correct:false},"Y":{guessed:false,correct:false},"U":{guessed:false,correct:false},"I":{guessed:false,correct:false},"O":{guessed:false,correct:false},"P":{guessed:false,correct:false},"A":{guessed:false,correct:false},"S":{guessed:false,correct:false},"D":{guessed:false,correct:false},"F":{guessed:false,correct:false},"G":{guessed:false,correct:false},"H":{guessed:false,correct:false},"J":{guessed:false,correct:false},"K":{guessed:false,correct:false},"L":{guessed:false,correct:false},"Z":{guessed:false,correct:false},"X":{guessed:false,correct:false},"C":{guessed:false,correct:false},"V":{guessed:false,correct:false},"B":{guessed:false,correct:false},"N":{guessed:false,correct:false},"M":{guessed:false,correct:false}})
    const rowOne = "QWERTYUIOP"
    const rowOneArr=rowOne.split('');
    const rowTwo="ASDFGHJKL"
    const rowTwoArr=rowTwo.split('')
    const rowThree="Backspace Z X C V B N M Enter"
    const rowThreeArr=rowThree.split(' ')
    function checkLetter(letter:string){
        if(props.correctAnswer.includes(letter)&&props.guess.includes(letter)&&checkedLetters[letter].guessed===false){
            setCheckedLetters((prev)=>{return {...prev,[letter]:{guessed:true,correct:true}}})
            return
        }
        if(!props.correctAnswer.includes(letter)&&props.guess.includes(letter)&&checkedLetters[letter].guessed===false){
            setCheckedLetters((prev)=>{return {...prev,[letter]:{guessed:true,correct:false}}})
            return
        }
    }
    function handleClick(letter:string){
        if(letter==="Backspace"){
            props.setAnswer(props.answer.slice(0,-1))
            return
        }
        if (letter === "Enter"&&props.answer.length===5) {
                props.setGuess(props.answer)
                props.setAnswer("");
                props.setRow((prev)=>prev+1);
            }
        if(props.answer.length<5&&letter.length===1){props.setAnswer(props.answer+letter)}
    }
return<div className='keyboardWrapper'>
<div className='rowOne'>
{rowOneArr.map(letter=>{checkLetter(letter);return(<button onClick={()=>handleClick(letter)}className={`letter ${checkedLetters[letter].correct?true:(checkedLetters[letter].guessed?false:"")}`}>{letter}</button>)})}
</div>
<div className='rowTwo'>
{rowTwoArr.map(letter=>{checkLetter(letter);return(<button onClick={()=>handleClick(letter)}className={`letter ${checkedLetters[letter].correct?true:(checkedLetters[letter].guessed?false:"")}`}>{letter}</button>)})}
</div>
<div className='rowThree'>
{rowThreeArr.map(letter=>{checkLetter(letter);return(<button onClick={()=>handleClick(letter)}className={(letter.length>1?'action ':'letter '+(checkedLetters[letter].correct?true:(checkedLetters[letter].guessed?false:"")))}>{letter}</button>)})}
</div>
</div>
}