    import React, { Component } from 'react'
import "tachyons";
import firebase from "../firebase/config"

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login =(e)=> {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then((u)=>{})
        .catch((err)=> console.log(err))
    }

    render() {
        return (
            <main className="pa4 black-80 ma2" style={{color:"white"}}>
                <form>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <p>Email</p>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="mv3">
                            <p>Password</p>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
                            onClick={this.login} style={{backgroundColor:"white",color:"black"}}
                        />
                    </div>
                </form>
            </main>

        )
    }
}
export default Login;
