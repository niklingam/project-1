import './header.css';
import React, { Component} from 'react';
import Navbar from '../header/Navbar';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            first: "Username",
            second: "Email",
            third: "Password",
        }
    }

    componentDidMount () {
        console.log(31)
    }

    callgetdata = () =>{
        console.log(1704)
    }

    render() {

         return(

            <div>
                <Navbar next1={"Login"} next2={"Signup"} next3={"Home"} getdata={this.callgetdata}  />
                <form className="login-container">
                    <h1 className="login-h">Login Page</h1>

                    <div>
                        <label>{this.state.first}:</label><br />
                        <input type="text" id="uname" /><br />
                    </div>

                    <div>
                        <label>{this.state.second}:</label><br />
                        <input type="text" id="email" /><br />
                    </div>

                    <div>
                        <label>{this.state.third}:</label><br />
                        <input type="password" id="pword" />
                    </div>
                    <br />
                    <button class="button-login" onClick={()=>{this.callgetdata()}}>submit</button>
                </form>
            </div>

            
        );



    }

}

export default Login;