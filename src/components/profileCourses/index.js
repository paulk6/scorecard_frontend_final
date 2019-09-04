import React, { Component } from 'react';
import './index.css';


class ProfileCourses extends Component {
  constructor() {
    super();
};



  render() {
    console.log(this.props.player_list);
    return(
      <table className="table-dark table scorecard-table" id="scorecard-table">
      <thead>
        <tr className="green-row green-row-profile">
          <th id="hole">Hole</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th id="out">OUT</th>
        </tr>
      </thead>
      <tbody>
      {
        this.props.player_list &&
        this.props.player_list.map( sublist =>
          <tr id="scores">
            <td>
              {sublist[0]}
            </td>
            <td>
              {sublist[1]}
            </td>
            <td>
              {sublist[2]}
            </td>
            <td>
              {sublist[3]}
            </td>
            <td>
              {sublist[4]}
            </td>
            <td>
              {sublist[5]}
            </td>
            <td>
              {sublist[6]}
            </td>
            <td>
              {sublist[7]}
            </td>
            <td>
              {sublist[8]}
            </td>
            <td>
              {sublist[9]}
            </td>
            <td>
              {sublist[10]}
            </td>
          </tr>
        )}
        </tbody>
      </table>
    )
  }
}

export default ProfileCourses;
