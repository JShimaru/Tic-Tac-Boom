import { useEffect } from 'react'
import {useState} from 'react'

const Play = () => {
  const [cells, setCells] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState('X')
  const [bombs, setBombs] = useState(Math.floor((Math.random()*3)-2))
  const [winner, setWinner] = useState('');
  const [mode, setMode] = useState(false)

  let squares = [...cells]

  useEffect(()=>{
    const winCon = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]
  const freeMoves = squares.map((square, index)=> square === '' ? index : null)
  .filter(val => val !== null)
  
  const lines = (a,b,c) =>{
    return winCon.filter(squaresIndex=>{
      const squareValues = squaresIndex.map(index => squares[index])
      return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValues.sort())
    })
  }
  // const playerVictory = lines('X', 'X', 'X').length > 0;
  const cpuVictory = lines('O','O','O').length > 0;
  
  // if(playerVictory){
    //   alert("You've bested the Computer! Now try to best your friend!")
    // }
    if(cpuVictory){
      setWinner('O')
      //alert("This one goes to the CPU!")
    }
    
    const cpuMove = index => {
      let newSquares = squares;
      if(index !== bombs){
        newSquares[index] = 'O'
        setCells(newSquares)
        setTurn('X')
      }else{
        setTurn('X')
      }
    }
    
    if(mode === false && turn === 'O' && winner === ''){
      const winninMove = lines('O', 'O', '');
      if(winninMove.length > 0){
        const winMove = winninMove[0].filter(index => squares[index] === '')[0];
        cpuMove(winMove)
        return;
      }
      const blockMove = lines('X', 'X', '');
      if(blockMove.length > 0){
        const stop = blockMove[0].filter(index => squares[index] === '')[0];
        cpuMove(stop)
        return;
      }
      const build = lines('O','','');
      if(build.length > 0){
        const add = build[0].filter(index => squares[index] === '')[0];
        cpuMove(add)
        return;
      }
      const randoMove = freeMoves[Math.ceil(Math.random()*freeMoves.length)]
      cpuMove(randoMove)
      return;
    }
  },[squares])
  
  const checkWinner = (squares) =>{
    let combos = {
      across: [
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      down: [
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],
      diag: [
        [0,4,8],
        [2,4,6]
      ]
    };
    
    for(let combo in combos){
      combos[combo].forEach((pattern)=>{
        if(
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
          ){
            console.log("No Winner Yet...")
          }else if(
            squares[pattern[0]] === squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]]        
            ){
              setWinner(squares[pattern[0]])
            }
          }
          )}
        }
        
  const handleClick = (num)=>{
    const fullBoard = squares.map((square, index)=> square === '' ? index : null)
    .filter(val => val !== null)

    if(fullBoard.length === 0){
      alert('Full board, Please press start over? to clear board!')
        return;
          }
    if(winner !== ''){
      alert(`${winner} won this round, Please press play again!`)
      return;
    }
    if((cells[num] === 'X' || cells[num] === 'O')){
        alert('Please choose a different space!')
      }else if(bombs+3 === num && turn === 'X'){
            setTurn('O')
            setBombs(Math.floor((Math.random()*3)+1))
            alert('Boom! X landed on a bomb!')
      }else if(bombs+3 === num && turn === 'O'){
            setTurn('X')
            setBombs(Math.floor((Math.random()*3)+1))
            alert('Boom! O landed on a bomb!')
      }else if(turn === 'X'){
          squares[num]= 'X'
          setTurn('O')
      }else{
          squares[num]= 'O'
          setTurn('X')
      }
      checkWinner(squares)
      setCells(squares)
      console.log(squares)
  }

  const Cell = ({num}) =>{
      return <td onClick={()=>handleClick(num)} className='Cell'>{cells[num]}</td>
  }

  function handleRestart(){
    setCells(Array(9).fill(''))
    setWinner('')
    setTurn('X')
  }
  function cpuOff(){
    if(mode === false){
      setMode(true)
    }else{
      setMode(false)
    }
  }
    
  return (
    <div className='Container'>
        <div className='How'>
            <h4 className='To'>HOW TO PLAY:</h4>
            <p className='Instruction'>Click a square to place your piece; Get three in a row to win. Beware of bombs that skip your turn, if you land on them!</p><br/>
            <p className='Instruction'>Click "Two Player" button to play face to face!</p>
            <h5 className='Mode'><button onClick={()=>cpuOff()}>{mode ? "Single Player" : "Two Player"}</button></h5>
            <br/>
            <div className='Container'>
        <div className='Table'>
        <table>
            <tbody>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </tr>
            </tbody>
        </table>
        </div>
        <br/>
            {winner !== '' ? <><p>{winner} Wins! Thanks for playing!</p>
            <button id='Restart' onClick={()=>handleRestart()}>Play again?</button></> : <><h6>{turn}'s Turn!</h6><button id='Restart' onClick={()=>handleRestart()}>Start Over?</button></>}
    </div>
        </div>
    </div>
  )
}


export default Play