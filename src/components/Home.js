import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loaded: false,
    };
  }

  componentDidMount() {
    axios('https://www.scorebat.com/video-api/v1/').then(res =>
      this.setState({
        games: res.data,
        loaded: true,
      }),
    );
  }

  render() {
    let { loaded, games } = this.state;

    return (
      <div>
        {loaded ? (
          games.map((game, index) => (
            <div key={index} className="row align-items-center my-3">
              <div className="col">
                <h6>{game.title}</h6>
                <p>{game.competition.name}</p>
                <a href={game.url}>Watch the game here</a>
              </div>
              <div className="col">
                <img
                  src={game.thumbnail}
                  alt="game thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    );
  }
}
