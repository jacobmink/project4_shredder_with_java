import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            localMountain: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const registrationResponse = await fetch(process.env.REACT_APP_BACKEND + 'user/register', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            if (!registrationResponse.ok) {
                throw Error(registrationResponse.statusText)
            }
            const parsedRegistration = await registrationResponse.json();
            console.log(parsedRegistration, 'registration response parsed');


        } catch(err) {
            console.log(err);
        }
    }

    render(){
        return(
            <form onSubmit={this.handleRegistration}>
            Register:<br/>
                <label>
                    Email:
                    <input type='text' name='email' onChange={this.handleChange} />
                </label><br/>
                <label>
                    Username:
                    <input type='text' name='username' onChange={this.handleChange} />
                </label><br />
                <label>
                    Password:
                    <input type='password' name='password' onChange={this.handleChange} />
                </label><br />
                <label>
                    First Name:
                    <input type='text' name='firstName' onChange={this.handleChange} />
                </label><br />
                <label>
                    Last Name:
                    <input type='text' name='lastName' onChange={this.handleChange} />
                </label><br />
                <label>
                    Local Resort:
                    <input type='text' name='localMountain' onChange={this.handleChange} />
                </label><br />
                <input type='Submit' /><br /><br />
            </form>
        )
    }
}


export default Register;