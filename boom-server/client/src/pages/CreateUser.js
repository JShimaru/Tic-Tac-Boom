import { useState } from "react"
import { NavLink } from "react-router-dom"

function CreateUser(){

    const [details, setDetails]=useState({username:"", email:"",password:"",passwordCheck:"",pin:""})
    const [user, setUser]=useState({username:""})
    const [error, setError]=useState("")
    const [display, setDisplay]=useState(false)
    const [packet, setPacket]=useState({username:"", email:"", password:"",sign_in_pin:""})
    
    const CreateAccount = (details) =>{
        //console.log(details)
        
        if(details.password !== details.passwordCheck){
            setError("Passwords DO NOT Match! Please re-enter password.")
            setDisplay(false)
        }else if(!error && display === false && details.password === details.passwordCheck){
            setUser(details.username)
            setDisplay(true)
            makePacket(details)
        }else{
            setError("")
        }
    }

    function makePacket(details){
        //console.log(details)
        let username = details.username
        let email = details.email
        let password = details.password
        let sign_in_pin = details.pin

        setPacket({username,email,password,sign_in_pin})
    }


    return(
        <div id="CreateUser">
            { display ? <><h4>Welcome to Tic Tac Boom, {user}!</h4></> : <><form onSubmit={(e)=>{e.preventDefault(); CreateAccount(details)}}>
                <div className="Inner">
            <button className="LoginBtn"><h2><NavLink to='/login' className="LoginBtn">Login</NavLink></h2></button>
                    <h4>Create an user account</h4>
                            {error}
                    <div className="form">
                        <input type="text" name="name" id="name" placeholder="Username" onChange={e => setDetails({...details, username:e.target.value})} value={details.name}/>
                    </div>
                    <div className="form">
                        <input type='email' name='email' id='email' placeholder='email'onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                    </div>
                    <div className="form">
                        <input type='password' name='password' id="password" placeholder="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} minLength="6" maxLength="30"/>
                    </div>
                    <div className="form">
                        <input type='password' name='passwordCheck' id="passwordCheck" placeholder="Confirm password" onChange={e => setDetails({...details, passwordCheck:e.target.value})} value={details.passwordCheck} minLength="6" maxLength="30"/>
                    </div>
                    <div className="form">
                        <label htmlFor="name">Optional-</label>
                        <input type="tel" name="pin" id="pin" placeholder="4-6 digit pin" maxLength="6" minLength="4" onChange={e => setDetails({...details, pin:e.target.value})} value={details.pin}/>
                    </div>
                    <input type='submit' value='Create Account' className="CreateAccount"/>
                </div>
            </form></>}
        </div>
    )
}

export default CreateUser