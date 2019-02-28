import React from 'react';

const Edit = (props) => {
    return (
        <div>
            <p>Edit Profile</p>

            <p>{props.editUser.username}</p>

            <form onSubmit={props.handleUserUpdate}>
                <input type='text' name='username' onChange={props.handleChange} value={props.editUser.username} placeholder="username"/>
                <input type='text' name='email' onChange={props.handleChange} value={props.editUser.email} placeholder="email"/>
                <input type='text' name='firstName' onChange={props.handleChange} value={props.editUser.firstName} placeholder="firstName"/>
                <input type='text' name='lastName' onChange={props.handleChange} value={props.editUser.lastName} placeholder="lastName"/>
                <input type='text' name='localMountain' onChange={props.handleChange} value={props.editUser.localMountain} placeholder="localMountain"/>
                <input type='Submit' />
            </form>
            <button onClick={props.deleteUser}>Delete Profile</button>
        </div>
    )
}

export default Edit;