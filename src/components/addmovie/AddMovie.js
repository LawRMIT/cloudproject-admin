import React, {Component} from "react";
import MovieClassificationBox from "./MovieClassificationBox";
import LocationList from "./LocationList";
import {connect} from "react-redux";
import {addMovie} from "../../store/actions/movieActions";

class AddMovie extends Component {
  state = {
    title: "",
    genre: "",
    classification: "",
    runningTime: "",
    AirportWest: false,
    Werribee: false,
    Watergardens: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addMovie(this.state);
  };

  render() {
    return (
      <div>
        <h6 className="center black-text">Fill in the form to add a movie</h6>
        <form className="grey lighten-2 container" onSubmit={this.handleSubmit}>
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Movie Information</h5>
          <div className="row">
            <div className="col s5 offset-s1 input-field">
              <input type="text" id="title" onChange={this.handleChange} />
              <label htmlFor="title" style={{color: "black"}}>
                Movie Title
              </label>
            </div>
            <div className="col s5 input-field">
              <input type="text" id="genre" onChange={this.handleChange} />
              <label htmlFor="genre" style={{color: "black"}}>
                Genre
              </label>
            </div>
            <div className="col s5 offset-s1" style={topPad}>
              <label htmlFor="classification" style={{color: "black"}}>
                Movie Classification:
              </label>
              <MovieClassificationBox handleChange={this.handleChange} />
            </div>
            <div className="col s5 input-field">
              <input
                type="number"
                id="runningTime"
                min="0"
                onChange={this.handleChange}
              />
              <label htmlFor="runningTime" style={{color: "black"}}>
                Running Time
              </label>
            </div>
          </div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Movie Location</h5>
          <div className="row">
            <div className="col s5 offset-s1" style={topPad}>
              <LocationList handleChange={this.handleChange} />
            </div>
          </div>
          <br></br>

          <div className="row" style={topPad}>
            <h5 style={{paddingLeft: "10%"}}>Movie Poster</h5>
            <p style={{paddingLeft: "10%", color: "red"}}>
              Please add the poster manually on the S3 Bucket and change the
              permission to public.
            </p>
          </div>
          <div className="row input-field">
            <button
              className="btn grey darken-2 z-depth-0 col s10 offset-s1"
              style={{fontWeight: 700}}
            >
              Add Movie
            </button>
          </div>
          <br></br>
        </form>
      </div>
    );
  }
}

const topPad = {
  paddingTop: 10,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => dispatch(addMovie(movie)),
  };
};

export default connect(null, mapDispatchToProps)(AddMovie);
