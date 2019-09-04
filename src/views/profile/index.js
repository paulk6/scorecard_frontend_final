import React, { Component } from 'react';
import './index.css';
import Player from '../../components/player'
import ProfileCourses from '../../components/profileCourses'
import ProfileHeader from '../../components/profileHeader'

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      round_data: {},
      front_score_list: [],
    }
  }

  getUser = async() => {
    let token = localStorage.getItem('token');

    const URL = 'http://localhost:5000/api/retrieve/user';

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      }
    });

    let data = await response.json();
    console.log(data);
    this.setState({ data });

  }

  getRounds = async() => {
    let token = localStorage.getItem('token');

    const URL = 'http://localhost:5000/api/retrieve/rounds'

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      }
    });

    let round_data = await response.json();
    let front_scores = []
    let scorecard_id_list = Object.keys(round_data.info);
    let user_list = []
    for (let i = 0; i < scorecard_id_list.length; i++) {
      user_list.push(Object.keys(round_data.info[scorecard_id_list[i]]))
    }
    let scorecard_round_list = []
    let scorecard_list = []
    for (let i = 0; i < scorecard_id_list.length; i++) {
      scorecard_round_list = []
      for (let j = 0; j < user_list[i].length; j++) {
        let id = scorecard_id_list[i]
        let user = user_list[i][j]
        scorecard_round_list.push(Object.values(round_data.info[id][user]))

        // scorecard_round_list.unshift(Object.values(round_data.info[scorecard_id_list[i]][user_list][j]))
      }
      scorecard_list.unshift(scorecard_round_list)
    }
    
    this.setState({ round_data, scorecard_list })
  }

  // showRounds = () =>
  //   for (let i = 0; i < this.state.front_scores_list.length; i++) {
  //     <Player front_scores={this.state.front_scores_list[i]}/>
  //   }

  componentDidMount() {
    this.getUser()
  }

  render() {
    return (
      <div className="container">
        <h1>Your Profile</h1>
        {
          this.state.data.info &&
            <div className="profile-info">
              <h3>Email: {this.state.data.info.email}</h3>
              <h3>First Name: {this.state.data.info.first_name}</h3>
              <h3>Last Name: {this.state.data.info.last_name}</h3>
              <h3>Nickname: {this.state.data.info.nickname}</h3>
              <h3>Phone Number: {this.state.data.info.phone_number}</h3>
              <h3>Handicap: {this.state.data.info.handicap}</h3>
            </div>
        }

        <button onClick={this.getRounds} className="btn get-rounds-btn btn-primary">Get Previous Rounds</button>


            <div className="scorecard-container">
                  {
                    this.state.scorecard_list &&
                      this.state.scorecard_list.map( list =>
                        <ProfileCourses player_list={list} />
                      )

                  }
            </div>
      </div>
    );
  }
}

export default Profile;

// {
//   this.state.round_data.info &&
//     this.state.scorecard_list.map( list =>
//       {return (<ProfileHeader />,
//        list.map( round =>
//
//       <ProfileCourses front_scores={round} data={this.state.round_data.info} scorecard_list={this.state.scorecard_list} /> ))})
// }
