import { useState } from "react"
import GLogin from "../components/GLogin"
import GLogout from "../components/GLogout"


function Login(){

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [sign_In_Pin, setSign_In_Pin]=useState("")
    const [loginData, setLoginData]=useState({username: "", password: "", sign_In_Pin: ""})


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

    function handlePin(event){
        let pin = event.target.value
        console.log(pin)
        setSign_In_Pin(pin)
    }

    function handleClick(){
        if(!username){
            alert("Please enter your login information")
        }
        if((password === "" && sign_In_Pin === "") || (password !== "" && sign_In_Pin !== "")){
            alert("Please enter only your password OR your pin!")
        }else if(username && password){
            let logData = {username: {username}, password: {password}}
            setLoginData(logData)
            console.log(loginData)
        }else{
            let logPin = {username: {username}, sign_In_Pin: {sign_In_Pin}}
            setLoginData(logPin)
            console.log(loginData)
        }

    }

    function logout(){
        console.log("Logged Out Successfully!")
        let logout = {username: ""}
        setLoginData(logout)
    }

    return(
        <>
            <h1>Existing User Login</h1>
        {loginData.username !== "" ? <>
        <button className="Logbtn" onClick={logout}>Logout</button><h3>Current User: {username}</h3></> : <><div id="Login">
            <input type="text" onChange={handleUser} name="username" id="user" placeholder="Username" />
            </div>
        <div id="Pass_pin">
            <input type="password" onChange={handlePwd} name="password" id="password" placeholder="password" minLength="6" maxLength="30"/>
                <p>or</p>
            <input type="tel" onChange={handlePin} name="sign_in_pin" id="sign_in_pin" placeholder="pin" minLength="4" maxLength="6"/>
        </div><button className="Logbtn" onClick={handleClick}>Login</button></>}
            {loginData.username !== "" ?
        <div className="google">
            <GLogout />
        </div> : <GLogin />}
        </>
)}

export default Login