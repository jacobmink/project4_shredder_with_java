import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import TrailContainer from './TrailContainer';
import Login from './Authentication/Login';
import Register from './Authentication/Register'
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      localMountain: '',
      favoriteTrails: [],
      logged: false,
      showUserModal: false,
      showEditModal: false,
      message: '',
    }
  }

  showUserModal = () => {
    this.setState({
      showUserModal: !this.state.showUserModal
    })
  }
  showEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
  }

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.target.value })
  }

  handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.REACT_APP_BACKEND + this.state._id)
      const response = await fetch(process.env.REACT_APP_BACKEND + 'user/' + this.state._id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await response.json();
      console.log(parsedResponse, 'parsedResponse put')
      //this.setState is parsedRsponse
      this.setState({
        showEditModal: false,
         ...parsedResponse
      })

    } catch (err) {
      console.log(err);
    }
  }

  deleteUser = async (e) => {
    const deleteResponse = await fetch(process.env.REACT_APP_BACKEND + 'user/' + this.state._id, {
      method: 'DELETE',
      credentials: 'include'
    })
    const deletedStatus = deleteResponse.ok;
    this.setState({
      showEditModal: false,
      logged: false
    })

  }

  handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await fetch(process.env.REACT_APP_BACKEND + 'user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(loginResponse, 'raw login response');
      const parsedLogin = await loginResponse.json();
      console.log(parsedLogin, 'parsed login response');
      if (!loginResponse.ok) {
        this.setState({
          message: 'Incorrect Username or Password'
        });
        throw Error(loginResponse.statusText)
      }
      // const parsedLogin = await loginResponse.json();
      // console.log(parsedLogin);
      const user = parsedLogin.user;
      if (parsedLogin) {
        console.log(parsedLogin, " parsed login");
        this.setState({
          logged: true,
          message: '', 
          _id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          email: user.email,
          localMountain: user.localMountain,
          favoriteTrails: parsedLogin.favoriteTrails
        })
        this.props.history.push('/trails');
      } else {
          this.setState({
            message: 'Incorrect Username or Password'
          })
        // display something that tells them incorrect password/username
      }


    } catch (err) {
      console.log(err);
    }
  }

  addTrailToFavorites = async (trail_id)=>{
    try{
        const response = await fetch(process.env.REACT_APP_BACKEND + 'user/trail/' + trail_id, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            throw Error(response.statusText);
        }
        const parsed = await response.json();
        console.log(parsed, ' parsed add trail response');
        this.setState({
          favoriteTrails: [...this.state.favoriteTrails, parsed]
        })

    }catch(err){
        return err;
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <Login state={this.state} showUserModal={this.showUserModal} showEditModal={this.showEditModal} handleChange={this.handleChange} handleUserUpdate={this.handleUserUpdate} deleteUser={this.deleteUser} handleLogin={this.handleLogin} />} />
          <Route exact path='/trails' render={(props) => <TrailContainer username={this.state.username} favoriteTrails={this.state.favoriteTrails} addTrailToFavorites={this.addTrailToFavorites} state={this.state} /> } />
        </Switch>
        
      </div>
    )
  }
}


export default withRouter(App);
