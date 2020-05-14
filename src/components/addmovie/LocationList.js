import React, {Component} from "react";

export default class LocationList extends Component {
  render() {
    const {handleChange} = this.props;
    return (
      <div>
        <label style={{color: "black"}}>
          <input
            type="checkbox"
            className="filled-in"
            name="AirportWest"
            value="true"
            onClick={handleChange}
            id="AirportWest"
          />
          <span>Village Cinemas Airport West</span>
        </label>
        <label style={{color: "black"}}>
          <input
            type="checkbox"
            className="filled-in"
            name="Werribee"
            value="true"
            onClick={handleChange}
            id="Werribee"
          />
          <span>Village Cinemas Werribee Plaza</span>
        </label>
        <label style={{color: "black"}}>
          <input
            type="checkbox"
            className="filled-in"
            name="Watergardens"
            value="true"
            onClick={handleChange}
            id="Watergardens"
          />
          <span>HOYTS Watergardens</span>
        </label>
      </div>
    );
  }
}
