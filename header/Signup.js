import './header.css';
import React, { useState, useRef, useEffect, callgetData } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../header/Navbar';
const Signup = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [Password, setPassword] = useState('')
    const emailRef = useRef("")
    const pwordRef = useRef("")
    const [name, setName] = useState("revanth")
    const test = [2, 4, 6, 8]



    useEffect(() => {
        // unameRef.current.focus();
        // console.log(1, state)

    }, [state])

    const handlecheck = (Event) => {
        Event.preventDefault();
        navigate('/login')
        // pwordRef.current.value = ""
        // emailRef.current.value = "font@gmail.com"
        console.log(emailRef.current.value)

        // if(emailRef.current.value && emailRef.current.value.indexOf("@") == -1){
        //     console.log(emailRef.current.value+"@gmail.com") 
        // }

        console.log(pwordRef.current.value)
        setName(emailRef.current.value)

    };

    const callgetData = () => {
        navigate('/login')
        
    }


    return (

        <div>

            <Navbar next1={"Signup"} next2={"Home"}  next3={"Login"} getData={callgetData} />
            <div className="signup-container">
                <form onSubmit={handlecheck}>
                    <h1 className="signup-h">Signup Page</h1>

                    <div>
                        <label>Email:</label><br />
                        <input type="text" id="email" ref={emailRef} /><br />
                    </div>
                    <div>
                        <label>Password:</label><br />
                        <input type="password" id="pword" ref={pwordRef} />
                    </div>
                    <br />
                    <button class="button-signup">submit</button>
                </form>





            </div>


        </div>
    );
}

export default Signup;