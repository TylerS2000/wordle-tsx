import "./WinPopup.css"
export default function WinPopup(props:{win:boolean}){
    return <div className="WinPopup">
        <div className="WinPopup-inner">{props.win?"winner":"loser"}</div>
    </div>
}