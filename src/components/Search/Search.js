import React from "react";
import "./style.css";

function Search(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label ><strong>Employee Name: </strong></label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="name"
            type="text"
            className="form-control"
            placeholder="Type in Employee First Name"
            id="name"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  export default Search;