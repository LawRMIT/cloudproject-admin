import React, {Component} from "react";

export default class MovieClassificationBox extends Component {
  render() {
    const {handleChange} = this.props;
    return (
      <div>
        <select
          id="classification"
          onChange={handleChange}
          className="browser-default"
          style={{height: 30, backgroundColor: "#f5f5f5"}}
        >
          <option value="" disabled selected>
            Classification
          </option>
          <option value="G">General (G)</option>
          <option value="PG">Parental Guidance (PG)</option>
          <option value="M">Mature (M)</option>
          <option value="MA15+">Mature Accompanied (MA15+)</option>
          <option value="R18">Restricted (R18)</option>
          <option value="CTC">Check the Classification (CTC)</option>
        </select>
      </div>
    );
  }
}
