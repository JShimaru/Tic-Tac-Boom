import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios"
import apiUrl from "../../config/config"

function Login(){

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    // const [sign_In_Pin, setSign_In_Pin]=useState("")
    const [loginData, setLoginData]=useState({username: "", password: ""})


    let navigate = useNavigate()


    useEffect(()=>{
        async function findUser(){
            if(loginData.username !== ""){
            try{
                const response = await axios({
                    url: `${apiUrl}/users/login`,
                    method: 'POST',
                    data: loginData
                })
            if()
                console.log(response)
            }catch(err){
                console.error(err)
            }
        }}
        findUser();
    },[loginData, navigate])

    function handleUser(event){
        let user = event.target.value
        console.log(user)
        setUsername(user)
    }

    function handlePwd(event){
        let pwd = event.target.value
        console.log(pwd)
        setPassword(pwd)
    }

    // function handlePin(event){
    //     let pin = event.target.value
    //     console.log(pin)
    //     setSign_In_Pin(pin)
    // }

    function handleClick(){
        if(!username || !password){
            alert("Please enter your login information")
        }else{
        // if((password === "" && sign_In_Pin === "") || (password !== "" && sign_In_Pin !== "")){
        //     alert("Please enter only your password OR your pin!")
        // }else if(username && password){
            let logData = {
                username: {username},
                password: {password}
            }
            setLoginData(logData)
            console.log(logData)
        // }else{
        //     let logPin = {username: {username}, sign_In_Pin: {sign_In_Pin}}
        //     setLoginData(logPin)
        //     console.log(loginData)
        // }
        }
    }


    return(
        <>
            <h1>Existing User Login</h1>
        {loginData.username !== "" ? <>
        <h3>Logging in as: {username}</h3></> : <><div id="Login">
            <input type="text" onChange={handleUser} name="username" id="user" placeholder="Username" />
            </div>
        <div id="Pass_pin">
            <input type="password" onChange={handlePwd} name="password" id="password" placeholder="password" minLength="6" maxLength="30"/></div><button className="Logbtn" onClick={handleClick}>Login</button></>}
                {/* <p>or</p>
            <input type="tel" onChange={handlePin} name="sign_in_pin" id="sign_in_pin" placeholder="pin" minLength="4" maxLength="6"/>
        </div></>} */}
        </>
)}

export default Login