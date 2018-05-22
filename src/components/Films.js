import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilms, addFilm } from "../ducks/filmsReducer";
import "./Films.css";

class Films extends Component {
  componentDidMount() {
    this.props.getFilms();
  }
  render() {
    let filmsList;
    //console logging my films array that should now have my data -- I called for it in componentDidMount
    // console.log("films: ", this.props.films.data);
    console.log(this.props);
    if (this.props.films !== undefined && this.props.films.length !== 0) {
      filmsList = this.props.films.data.map((curr, index) => {
        return (
          <div className="card" key={curr.id}>
            <h3>{curr.title}</h3>
            <span>Release Date: {curr.release_date}</span>
            <span>Rotten Tomatoes Score: {curr.rt_score}</span>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>STUDIO GHIBLI FILMS</h1>
        <div className="film-container">{filmsList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getFilms, addFilm })(Films);
