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
    let game = games[0];

    return (
      <div>
        {loaded ? (
          //   games.map((game, index) => (
          //     <div key={index} className="row align-items-center my-4">
          //       <div className="col">
          //         <h4>{game.title}</h4>
          //         <p>{game.competition.name}</p>
          //         <a href={game.url} className="btn btn-primary">
          //           Watch the highlights here
          //         </a>
          //       </div>
          //       <div className="col">
          //         <img
          //           src={game.thumbnail}
          //           alt="game thumbnail"
          //           style={{ width: '150px', height: '150px' }}
          //         />
          //       </div>
          //     </div>
          //   ))
          <div>
            <h4>{game.title}</h4>
            <iframe
              title={game.title}
              src="https://www.scorebat.com/embed/g/878324/?s=2"
              width="560"
              height="650"
            ></iframe>
          </div>
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    );
  }
}
