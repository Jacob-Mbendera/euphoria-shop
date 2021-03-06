import React from "react";

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            'email': '',
            'password': ''
        }
    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }


    handleChange = event =>{
        const{value, name} = event.target;

        this.setState({ [name] : value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label htmlFor="email">Email</label>

                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <label htmlFor="password">password</label>
                    
                    <input type="submit"  value="submit form" />
                </form>

            </div>
        )
    }
}


export default SignIn;