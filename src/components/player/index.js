import React, { Component } from 'react';
import './index.css';


class Player extends Component {
  constructor() {
    super();
};



  render() {
    return(
      <tr>
        <td className="player-name">{this.props.name}</td>
        <td>
          <input type="number" value={this.props.front_scores[0]} onInput={(e) => this.props.updateTotal(e.target.value, 1, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[1]} onInput={(e) => this.props.updateTotal(e.target.value, 2, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[2]} onInput={(e) => this.props.updateTotal(e.target.value, 3, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[3]} onInput={(e) => this.props.updateTotal(e.target.value, 4, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[4]} onInput={(e) => this.props.updateTotal(e.target.value, 5, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[5]} onInput={(e) => this.props.updateTotal(e.target.value, 6, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[6]} onInput={(e) => this.props.updateTotal(e.target.value, 7, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[7]} onInput={(e) => this.props.updateTotal(e.target.value, 8, this.props.index)} />
        </td>
        <td>
          <input type="number" value={this.props.front_scores[8]} onInput={(e) => this.props.updateTotal(e.target.value, 9, this.props.index)} />
        </td>
        <td id="total">
          {this.props.total}
        </td>
      </tr>
    )
  }
}

export default Player;
