import "./WinPopup.css"
export default function WinPopup(props:{win:boolean, answer:string}){
    return <div className="WinPopup">
        <div className="WinPopup-inner"><>{props.win?<p>Good Job!</p>:<p>the correct answer was {props.answer.toLowerCase()}</p>}<button onClick={()=>window.location.reload()}>Play Again?</button></></div>
        
    </div>
}