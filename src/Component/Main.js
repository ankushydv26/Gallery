import React, { Component } from 'react'
import firebase from "../firebase/config"
import Login from "./Login"
import Home from "./Home"

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        firebase.auth().onAuthStateChanged((user)=>{
            // console.log(user);
            if(user){
                this.setState({user:user})
                localStorage.setItem("user", user.uid);
            }
            else{
                this.setState({user:null});
                // localStorage.removeItem("user");
            }
        })
    }
   
    render() {
        return (
            <div className="sign-main">
                {this.state.user ? <Home/> : <Login/>}
            </div>
        )
    }
}
export default Main;