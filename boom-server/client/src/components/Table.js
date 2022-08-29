import React from 'react'
import {useState} from 'react';

const Table = () => {
    
    const [cells, setCells] = useState(Array(9).fill(''))
    const [turn, setTurn] = useState('X')
    const [bombs, setBombs] = useState(0)
    const [winner, setWinner] = useState('');
    
    let squares = [...cells]
    let bomb = Math.floor((Math.random()*9)-1)
    setBombs(bomb)
    
    const checkWinner = (squares) =>{
        
        let across = [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ]
        let down = [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ]
        let diag = [
                [0,4,8],
                [2,4,6]
            ]
        }        

    const handleClick = (num)=>{
        if((cells[num] !== '')){
            }

        if(cells[bombs] !== 'X' || cells[bombs] !== 'O'){
            console.log(bomb)
        }

        if(turn === 'X'){
            squares[num]= 'X'
            setTurn('O')
        }else{
            squares[num]= 'O'
            setTurn('X')
        }
        setCells(squares)
        console.log(squares)
    }

    const Cell = ({num}) =>{
        return <td onClick={()=>handleClick(num)} className='Cell'>{cells[num]}</td>
    }
  return (
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
            <button id='Restart'>Play again?</button></> : <><h6>{turn} Turn!</h6></>}
    </div>
  )
}

export default Table