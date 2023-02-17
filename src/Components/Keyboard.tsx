import './Keyboard.css'
export default function Keyboard (){
    const rowOne = "QWERTYUIOP"
    const rowOneArr=rowOne.split('');
    const rowTwo="ASDFGHJKL"
    const rowTwoArr=rowTwo.split('')
    const rowThree="Backspace Z X C V B N M Enter"
    const rowThreeArr=rowThree.split(' ')
return<div className='keyboardWrapper'>
<div className='rowOne'>
{rowOneArr.map(letter=><button className="letter">{letter}</button>)}
</div>
<div className='rowTwo'>
{rowTwoArr.map(letter=><button className="letter">{letter}</button>)}
</div>
<div className='rowThree'>
{rowThreeArr.map(letter=><button className={letter.length>1?'action':'letter'}>{letter}</button>)}
</div>
</div>
}