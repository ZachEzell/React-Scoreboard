import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import logo from './logo.svg';
import './App.css';

let PLAYERS = [
  {
    name: 'Bob Bilton',
    score: 31,
    id: 1
  },
  {
    name: 'Jim Deltona',
    score: 25,
    id: 2
  },
  {
    name: 'Adam Balsamic',
    score: 25,
    id: 3
  }
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

const Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
      score: this.props.initialScore
    };
  },
  incrementScore: function(e) {
    this.setState({
      score: this.state.score + 1
    });
  },
  decrementScore: function(e) {
    this.setState({
      score: this.state.score - 1
    });
  },
  render: function() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {' '}
          -{' '}
        </button>
        <div className="counter-score"> {this.state.score} </div>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
});

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter initialScore={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map(player => {
          return (
            <Player name={player.name} score={player.score} key={player.id} />
          );
        })}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })
  ).isRequired
};
Application.defaultProps = {
  title: 'Scoreboard'
};
export default App;

ReactDOM.render(
  <Application title="Scoreboard" players={PLAYERS} />,
  document.getElementById('root')
);
registerServiceWorker();
