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
          games.slice(0, 10).map((game, index) => (
            <div key={index} className="row align-items-center my-4">
              <div className="col">
                <h4>{game.title}</h4>
                <p>{game.competition.name}</p>
              </div>
              <div className="embed-responsive embed-responsive-4by3 row align-items-center my-4">
                <iframe
                  title={game.title}
                  src={game.embed.substring(137, 181)}
                  className="embed-responsive-item"
                ></iframe>
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
