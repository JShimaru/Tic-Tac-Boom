import React from 'react'
import {useState} from 'react'

const Play = () => {
  const [cells, setCells] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState('X')
  const [bombs, setBombs] = useState(Math.floor((Math.random()*3)-1))
  const [winner, setWinner] = useState('');
  
  let squares = [...cells]
  
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
      if((cells[num] === 'X' || cells[num] === 'O')){
        alert('Please choose a different space!')
          }else if(bombs+3 === num && turn === 'X'){
            setTurn('O')
            setBombs(Math.floor((Math.random()*3)+1))
            alert('Boom! You landed on a bomb!')
          }else if(bombs+3 === num && turn === 'O'){
            setTurn('X')
            setBombs(Math.floor((Math.random()*3)+1))
            alert('Boom! You landed on a bomb!')
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
  }
    
  return (
    <div className='Container'>
        <div className='How'>
            <h4 className='To'>HOW TO PLAY:</h4>
            <p className='Instruction'>Click a square to place your piece. Be the first to get three in a row to win. Beware of bombs that will skip your turn if you land on them!</p>
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