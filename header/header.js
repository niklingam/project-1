 import './header.css';
import { React, useState, useEffect, } from 'react';

import Navbar from '../header/Navbar';

import { useNavigate } from 'react-router-dom';
const Header = (props) => {

    const navigate = useNavigate();
    


    const handlecheck = (Event) => {
        Event.preventDefault();
        navigate('/home')
    };

    function handle (){
      
      console.log(13)
    }
    
    return (
          
    
        <div>
        <Navbar page={"Home"} next1={"Signup"} next2={"Login"}  />
       
           
            <header>
                <nav class="navbar">
                    <tr>
                    <th ><button ><a href="./Login" >Login</a></button></th>
                        <th ><button ><a href="./signup" >Signup</a></button></th>
                        <th><button onClick={()=>{handle()}}> <a href="./home">Home</a></button></th>
                    </tr>

                </nav>
                <button><th><a class="name">Revanth Kumar</a></th></button>

            </header>

        
        </div>
  );

}
export default Header;