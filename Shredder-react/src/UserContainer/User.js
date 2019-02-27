import React from 'react';
import Edit from './Edit';
import Profile from './Profile';
import { withRouter } from 'react-router-dom'
// Link to Profile page (user show page) 
// On profile page, edit and delete
// pass the show edit modal as a props
// on the edit page, have the form for all the fields

// if check if the showModal is false, then don't show the Edit componenet
const User = (props) => {
    // console.log(props.handleChange.bind(this), 'bind(this)')
    // console.log(props, 'usercomponenet props')
    // console.log(props.handleChange, 'props.handleChange');
    // console.log(props.handleChange())
    // console.log(e.currentTarget, 'e.currentTarget on User C');
    return(
        <div>
            Logged In!!!!
            Welcome: {props.userInfo.username}
            <button onClick={props.showUserModal.bind(null)}>Profile</button>
            <button onClick={props.showEditModal.bind(null)}>Edit</button>

            {props.userInfo.showUserModal ? <Profile showUser={props.userInfo} /> : null}
            {props.userInfo.showEditModal ? <Edit editUser={props.userInfo} handleChange={props.handleChange.bind(this)} handleUserUpdate={props.handleUserUpdate.bind(this)} deleteUser={props.deleteUser.bind(this)} /> : null}
            
        </div>
    )
}

export default withRouter(User);