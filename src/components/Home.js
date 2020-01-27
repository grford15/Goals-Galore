import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loaded: false,
      competitions: [],
      selectedComp: '',
    };

    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    axios('https://www.scorebat.com/video-api/v1/').then(res =>
      this.setState({
        games: res.data,
        loaded: true,
        competitions: res.data.map(item => item.competition),
      }),
    );
  }

  onSelect(e) {
    this.setState({
      selectedComp: e.target.value,
    });
  }

  render() {
    let { loaded, games, competitions } = this.state;
    console.log(competitions);

    return (
      <div className="conatiner justify-content-center">
        <div className="row my-4 mx-auto">
          <h4>Competitions</h4>
          <div class="form-group mx-auto">
            <select
              className="form-control mx-3"
              id="exampleFormControlSelect1"
              onChange={this.onSelect}
            >
              {competitions.map(comp => (
                <option>{comp.name}</option>
              ))}
            </select>
          </div>
        </div>
        {loaded ? (
          games.slice(0, 10).map((game, index) => (
            <>
              <div
                key={index}
                className="row align-items-center my-4"
              >
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
            </>
          ))
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    );
  }
}
