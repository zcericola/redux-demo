import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../ducks/peopleReducer';
import './People.css';

class People extends Component {
  componentDidMount() {
    this.props.getPeople();
  }
  render() {
    const { people } = this.props;
    let peopleList;
    if (people !== undefined && people.length !== 0) {
      peopleList = people.data.map((curr, index) => {
        return (
          <div className="card people-card" key={curr.id}>
            <h3>{curr.name}</h3>
            <span>gender: {curr.gender}</span>
            <span>Eye Color: {curr.eye_color}</span>
            <span>Age: {curr.age}</span>
          </div>
        );
      });
    }
    console.log(this.props);
    return (
      <div>
        <h1>People from the Films</h1>
        <div className="film-container">{peopleList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.peopleReducer;
};

export default connect(
  mapStateToProps,
  { getPeople }
)(People);
