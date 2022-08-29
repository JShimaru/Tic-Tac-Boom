import React from 'react'
import Table from '../components/Table';

const Play = () => {
    
  return (
    <div className='Container'>
        <div className='How'>
            <h4 className='To'>HOW TO PLAY:</h4>
            <p className='Instruction'>Click a square to place your piece (X). Be the first to get three in a row and watch out for bombs!</p>
            <br/>
            <Table />
        </div>
    </div>
  )
}

export default Play