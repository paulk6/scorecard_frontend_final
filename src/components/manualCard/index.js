import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import Player from '../player'


class ManualCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table-dark table" id="scorecard-table">
              <thead>
                <tr>
                {this.props.course_name &&
                  <td colSpan="4">
                    {this.props.course_name}
                  </td>
                }
                {this.props.course_city &&
                  <td colSpan="3">
                    {this.props.course_city}
                  </td>
                }
                {this.props.course_state &&
                  <td colSpan="3">
                    {this.props.course_state}
                  </td>
                }
                </tr>
                <tr class="green-row">
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
                <tr class="blue-row"> {/* row 1 - blue */}
                  <td>
                    Blue
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr class="green-row"> {/* row 2 - dark green */}
                  <td>
                    Dark Green
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr> {/* row 3 - grey */}
                  <td>
                    Grey
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr> {/* row 4 - handicap */}
                  <td>
                    Handicap
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>

                {
                  this.props.players &&
                    this.props.players.map( (player, index) =>
                      <Player name={player.first_name} front_scores={player.front_scores} back_scores={player.back_scores}
                      total={player.total}
                      updateTotal={this.props.updateTotal}
                      index={index}
                      key={index}
                      />
                    )
                }
                <tr>
                  <td>
                    <button type="button" className="button" onClick={this.props.addNewPlayer}>Add New Player</button>
                  </td>
                  <td>
                    <button type="button" className="button" onClick={this.props.addGuest}>Add Guest Player</button>
                  </td>
                </tr>
                <tr class="green-row"> {/* row 9 - par */}
                  <td>
                    Par
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr class="light-green-row"> {/* row 14 - light green */}
                  <td>
                    Light Green
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr> {/* row 15 - ladies' handicap */}
                  <td>
                    Ladies' Handicap
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr> {/* card info */}
                  <td colSpan="1">
                    Date: <input class="bottom-info" id="date" type="text" />
                  </td>
                  <td colSpan="5">
                    Scorer: <input class="bottom-info" id="scorer" type="text" />
                  </td>
                  <td colSpan="3">
                    Attest: <input class="bottom-info" id="attest" type="text" />
                  </td>
                  <td colSpan="2">
                    <button id="save-card" onClick={this.props.saveCard}>Save Scorecard</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> // end of container
      );
    }
  }


export default withRouter(ManualCard);
