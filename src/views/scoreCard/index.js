import React, { Component } from 'react';
import './index.css';
import { Link, withRouter } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import ManualCard from '../../components/manualCard';
import PlayerInfoForm from '../../components/playerInfoForm';
import Player from '../../components/player';
import API_KEY from '../../config.js';
import SECRET_KEY from '../../config.js';


class ScoreCard extends Component {
  constructor() {
    super();

    this.state = {
      'data': [],
      'API_KEY': '',
      'players': [],
    }
  }

  componentDidMount() {
  this.setState({ API_KEY });
}

addNewPlayer = async() => {
  // make a new player component
  var player_email_prompt = prompt("Please enter the email address of the user you would like to add to the game.", "");

  if (player_email_prompt == null || player_email_prompt == "") {
    alert("You must enter a name.");
    return
  }

  const URL = 'http://localhost:5000/api/retrieve/other_user';

  let response = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'email' : player_email_prompt,
    }
  });
  let data = await response.json();

  if (data.info) {
    let player = {
      'email' : data.info.email,
      'first_name' : data.info.first_name,
      'last_name' : data.info.last_name,
      'user_id' : data.info.user_id,
      'player_type' : 'player',
      'front_scores': [0, 0, 0, 0, 0, 0, 0, 0, 0],
      'back_scores': [0, 0, 0, 0, 0, 0, 0, 0, 0],
      'total': 0,
    }

    let players = this.state.players
    players.push(player)
    // add that component to the state
    this.setState({
      players
    })
  } else {
    alert('That email is not in our user database.')
  }
}

addGuest = () => {
  var guest_name_prompt = prompt("Please enter the guest's name", "");

  if (guest_name_prompt == null || guest_name_prompt == "") {
    alert("You must enter a name.");
    return
  }

  let player = {
    'first_name' : guest_name_prompt,
    'player_type' : 'guest',
    'user_id' : 'guest',
    'front_scores': [0, 0, 0, 0, 0, 0, 0, 0, 0],
    'back_scores': [0, 0, 0, 0, 0, 0, 0, 0, 0],
    'total': 0,
  }

  let players = this.state.players
  players.push(player)
  // add that component to the state
  this.setState({
    players
  })
}

saveCard = async() => {

  const URL = 'http://localhost:5000/api/save/scorecard'
  let players = this.state.players
  let course_name=this.props.history.location.state.name
  let course_city=this.props.history.location.state.city
  let course_state=this.props.history.location.state.state
  let course_info = [course_name, course_city, course_state]

  let response = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'players' : JSON.stringify(players),
      'course_info' : JSON.stringify(course_info)
    },
    method: 'POST'
  });
  let data = await response.json();

  if (data.message === 'success') {
    alert('The scorecard has been saved.')
  } else {
    alert(data.message)
  }
}

updateTotal = (text, hole, player_index) => {
  console.log(text, hole);

  let players = this.state.players;
  let current_player = players[player_index];

  players[player_index].front_scores[hole - 1] = text;

  let total = 0;

  for (let i in current_player.front_scores) {
    if (current_player.front_scores[i] != '') {
    total += parseInt(current_player.front_scores[i]);
  }};

  players[player_index].total = total;

  this.setState({ players });
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


  render() {
    return (
      <div className="row">
        <ManualCard updateTotal={this.updateTotal} addNewPlayer={this.addNewPlayer} addGuest={this.addGuest} players={this.state.players} updateTotal={this.updateTotal} saveCard={this.saveCard} logged_in={this.state.logged_in} current_player={this.state.data.info} course_name={this.props.history.location.state.name} course_city={this.props.history.location.state.city}
        course_state={this.props.history.location.state.state}/>
      </div>
    );
  }
}

export default withRouter(ScoreCard);
