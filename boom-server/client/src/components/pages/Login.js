import { useState, useEffect, useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { currentUser } from "../UserContext";
import axios from "axios"
import apiUrl from "../../config/config"

function Login(){

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    // const [sign_In_Pin, setSign_In_Pin]=useState("")
    const [loginData, setLoginData]=useState(JSON.stringify({email: "", password: ""}))
    const [loggedIn, setLoggedIn]=useState(false)
    
    const {user, setUser} = useContext(currentUser)


    let navigate = useNavigate()

    function handleUser(event){
        let user = event.target.value
        console.log(user)
        setEmail(user)
    }

    useEffect(()=>{
        if(loggedIn === true){
            return navigate(`/account/${user}`)
        }
    },[loggedIn])

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
        if(!email || !password){
            alert("Please enter your login information")
        }else{
        // if((password === "" && sign_In_Pin === "") || (password !== "" && sign_In_Pin !== "")){
        //     alert("Please enter only your password OR your pin!")
        // }else if(username && password){
            let logData = {email, password}
            setLoginData(logData)
            console.log(logData)
        // }else{
        //     let logPin = {username: {username}, sign_In_Pin: {sign_In_Pin}}
        //     setLoginData(logPin)
        //     console.log(loginData)
        // }
        }
    }

    async function handleLogin(loginData){
            if(loginData.email !== "" && loginData.password !== ""){
                // setLoginData({ email, password })
            try{
                const response = await axios({
                    url: `${apiUrl}/users/login`,
                    method: 'POST',
                    data: loginData
                })
            if(response.status(201)){
                setLoggedIn(true)
            }
                console.log(response)
            }catch(err){
                console.error(err)
            }    
    }
}

    function handleCancel(){
        setLoginData({
            email: "",
            password: ""
        })
    }


    return(
        <>
            <h1>Existing User Login</h1>

        {loginData.email ? <>
        <h3>Log in as: {email}</h3><button className="Confirm" onClick={handleLogin}>confirm</button><br/><button className="Cancel" onClick={handleCancel}>cancel</button></> : <>
        <div id="Login">
            <input type="email" onChange={handleUser} name="email" id="email" placeholder="Email" />
        </div>
        <div id="Password">
            <input type="password" onChange={handlePwd} name="password" id="password" placeholder="password" minLength="6" maxLength="30"/>
        </div>
            <button className="Logbtn" onClick={handleClick}>Login</button></>}

                {/* <p>or</p>
            <input type="tel" onChange={handlePin} name="sign_in_pin" id="sign_in_pin" placeholder="pin" minLength="4" maxLength="6"/>
        </div></>} */}
        </>
)}

export default Login