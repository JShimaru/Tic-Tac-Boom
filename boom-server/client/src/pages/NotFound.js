import axios from 'axios';
import {useState, useEffect} from 'react';
import Image from '../images/Bsbs_Bob_2F.png'

function NotFound(){

    const botd = Math.floor((Math.random()*333)+1)
    const [name, setName] = useState('')
    

    useEffect(()=>{
        const burgerDay = () =>{
        axios.get(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${botd}`).then(res =>{
            setName(res.data.name)
        })
        }
        burgerDay()
    },[])



    return(
        <div className="Error">
            <h1>Oh no, you found our Burger page!</h1>
            <h3>Today's Burger:</h3>
            <h5>{name}</h5>
            <img src={Image} alt='Bob'/>
        </div>
    )
}

export default NotFound