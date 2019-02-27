import React, { Component } from 'react';
import User from '../UserContainer/User';
import Register from './Register';
import TrailContainer from '../TrailContainer';
import { withRouter } from 'react-router-dom'
// Make a register/login button using browser router and link

const Login = (props) => {
  


        console.log(props.state, 'login props.state')
        return (
            // <div>test</div>
           props.state.logged ? <User userInfo={props.state} showUserModal={props.showUserModal} showEditModal={props.showEditModal} handleChange={props.handleChange} handleUserUpdate={props.handleUserUpdate} deleteUser={props.deleteUser}/> : 
                <div className='login-page'>
                <Register />
                <form onSubmit={props.handleLogin}>
                   Login:<br />
                   <label>
                       Username:
                    <input type='text' name='username' onChange={props.handleChange} />
                   </label>
                   <label>
                       Password:
                    <input type='password' name='password' onChange={props.handleChange} />
                   </label>
                   <input type='Submit' /><br/>
                    {props.state.message}
               </form>
                </div>
            
        )
}

export default withRouter(Login);