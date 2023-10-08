import './header.css';
import { React} from 'react';

import {useNavigate} from 'react-router-dom';
const Navbar = (props) => {
    const navigate = useNavigate()


    function navigations(link) {
        navigate(link)
    }


    
    return (
         
    
        <div>
        
       
           
            <header>
                <nav class="navbar">
                    <tr>
                    <th ><button ><a onClick={()=>{navigations('/login')}} >{props.next3}</a></button></th>
                        <th ><button ><a onClick={()=>{navigations('/signup')}}>{props.next2}</a></button></th>
                        <th><button ><a onClick={()=>{navigations('/home')}}>{props.next1}</a></button></th>
                        
                    </tr>

                </nav>
                <button><th><a class="name">Revanth Kumar</a></th></button>

            </header>

        
        </div>
  );

}
export default Navbar;