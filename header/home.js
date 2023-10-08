import './header.css';
import React, { useState, useRef, useEffect, callgetData, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../header/Navbar';
const Home = () => {
    const { state } = useLocation
    const navigate = useNavigate();
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [Password, setPassword] = useState('')
    const unameRef = useRef("")
    const pwordRef = useRef("")
    const fnameRef = useRef("")
    const lnameRef = useRef("")
    const emailRef = useRef("")
    const [add, setadd] = useState(2)
    const [add1, setadd1] = useState(2)




    useEffect(() => {
        // unameRef.current.focus();


    })


    const handlecheck = (Event) => {
        Event.preventDefault();
        navigate('/signup')
        // pwordRef.current.value = ""
        // unameRef.current.value = "font@gmail.com"
        console.log(fnameRef.current.value)
        console.log(lnameRef.current.value)
        console.log(unameRef.current.value)
        console.log(emailRef.current.value)
        console.log(pwordRef.current.value)

    };

    const callgetData = () => {
        navigate("/signup")
    }



    return (
        <div>


            <Navbar next1={"Home"} next2={"Signup"} next3={"Login"} getData={callgetData} />

            <div className="home-container">
                <form onSubmit={handlecheck}>

                    <h1 className="home-h">Home Page</h1>

                    <div>
                        <label>First Name:</label><br />
                        <input type="text" id="fname" ref={fnameRef} /><br />
                    </div>

                    <div>
                        <label>Last Name:</label><br />
                        <input type="text" id="lname" ref={lnameRef} /><br />
                    </div>
                    <div>
                        <label>Username:</label><br />
                        <input type="text" id="uname" ref={unameRef} /><br />
                    </div>
                    <div>
                        <label>Email:</label><br />
                        <input type="text" id="email" ref={emailRef} /><br />
                    </div>
                    <div>
                        <label>Password:</label><br />
                        <input type="password" id="pword" ref={pwordRef} />
                    </div>
                    <br />
                    <button class="button-home">submit</button>

                </form>

            </div>



        </div>


    );
}

export default Home;