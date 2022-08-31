import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import apiUrl from "../../config/config"
import GLogin from '../GLogin'
import GLogout from '../GLogout'

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function CreateUser(){

    const [details, setDetails]= useState({
        username:"",
        email:"",
        password:"",
        passwordCheck:"",
        pin:""
    })
    const [packet, setPacket]= useState({
        username:"",
        email:"",
        password:"",
        sign_in_pin:""
    })
    
    const [user, setUser]= useState({username:""})
    const [error, setError]= useState("")
    const [display, setDisplay]= useState(false)
    const [confirm, setConfirm]= useState(null)

    // useEffect(()=>{
    //     const result = USER_REGEX.test(details.username)
    //     console.log(result);
    //     console.log(user)
    //     setUser(result)
    // },[details.username])

    // useEffect(()=>{
    //     const result = PWD_REGEX.test(details.password)
    //     console.log(result)
    //     console.log(details.password)
    //     const match = details.password === details.passwordCheck
    //     setPacket({...packet, password: match})
    // },[details.password, details.passwordCheck])

    // useEffect(()=>{
    //     setPacket({...packet, sign_in_pin: details.pin})
    // },[details.pin])

    
    const CreateAccount = (details) =>{
        //console.log(details)
        
        if(details.password !== details.passwordCheck){
            setError("Passwords DO NOT Match! Please re-enter password.")
            setDisplay(false)
        }else if(!error && display === false && details.password === details.passwordCheck){
            setUser(details.username)
            setDisplay(true)
            setConfirm(`Account Created!`)
        }else{
            setError("")
            setConfirm(null)
            setDisplay(false)
        }
    }

    function makePacket(details){
        console.log(details)
        let username = details.username
        let email = details.email
        let password = details.password
        let sign_in_pin = details.pin

        console.log(packet)
        setPacket({
            "username": username,
            "email": email,
            "password": password,
            "sign_in_pin": sign_in_pin
        })
    }

    function sendPacket(){
        makePacket(details)
        axios({
            url: `${apiUrl}/users`,
            method: 'POST',
            data: packet
        }).then(res => console.log(res.data)).catch(console.error)
    }


    return(
        <div id="CreateUser">
            { display ? <><h2>{confirm}</h2><h4>Welcome to Tic Tac Boom, {user}!</h4></> : <><form onSubmit={(e)=>{e.preventDefault(); CreateAccount(details); sendPacket(packet)}}>
                <div className="Inner">
                    <h4>Create a new user account</h4>
                            {error}
                    <div className="form">
                        <input type="text" name="name" id="name" placeholder="Username" onChange={e => {setDetails({...details, username:e.target.value}); makePacket(details)}} value={details.name}/>
                    </div>
                    <div className="form">
                        <input type='email' name='email' id='email' placeholder='email'onChange={e => {setDetails({...details, email:e.target.value}); makePacket(details)}} value={details.email}/>
                    </div>
                    <div className="form">
                        <input type='password' name='password' id="password" placeholder="password" onChange={e => {setDetails({...details, password:e.target.value}); makePacket(details)}} value={details.password} minLength="6" maxLength="30"/>
                    </div>
                    <div className="form">
                        <input type='password' name='passwordCheck' id="passwordCheck" placeholder="Confirm password" onChange={e => setDetails({...details, passwordCheck:e.target.value})} value={details.passwordCheck} minLength="6" maxLength="30"/>
                    </div>
                    <div className="form">
                        <label htmlFor="pin">Optional-</label>
                        <input type="tel" name="pin" id="pin" placeholder="4-6 digit pin" maxLength="6" minLength="4" onChange={e => {setDetails({...details, pin:e.target.value}); makePacket(details)}} value={details.pin}/>
                    </div>
                    <input type='submit' value='Create Account' className="CreateAccount"/>
                </div>
            </form></>}
            {/* {user === "" ?
        <div className="google">
            <GLogout />
        </div> : <GLogin />} */}
        </div>
    )
}

export default CreateUser