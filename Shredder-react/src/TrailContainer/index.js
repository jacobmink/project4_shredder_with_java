import React, { Component } from 'react';
import TrailList from '../TrailsList';
import { withRouter } from 'react-router-dom'
require('dotenv').config();

class TrailContainer extends Component {
    constructor() {
        super();
        this.state = {
            trails: [],

        }
    }
    componentDidMount(){
        this.getTrails();
    }
    getTrails = async () => {
        try {
            // this will get the trails from the express api
            const apiResponse = await fetch(process.env.REACT_APP_BACKEND + 'trails');
            // console.log(apiResponse, '===== apiResponse');
            const parsedTrails = await apiResponse.json();
            console.log(parsedTrails, '~~~ parsedTrails')
            this.setState({
                trails: parsedTrails
            })
            // console.log(this.state.trails, '000 this.state.trails')
        } catch(err) {
            console.log(err);
        }
    }

    

    render(){
        // list of resorts with links to their page?
        console.log(this.props.username, 'trail container propsusername');
        console.log(this.state, 'trail container this.state')
        return (
            <div>
                <h1 className='title-heading'>Shredder</h1>
                   
                <TrailList trails={this.state.trails} addTrailToFavorites={this.props.addTrailToFavorites}/>
            </div>
        )
    }
}


export default withRouter(TrailContainer);