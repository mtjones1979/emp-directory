import React from "react";
import "./style.css";

function Search(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor ="search"><strong>Employee Name: </strong></label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder="Type in Employee First/Last Name or click on First Name in table for alphabetical order"
            id="search"
          />
          
          <button type="submit" onClick={props.handleFormSubmit} className="btn">
            Search
          </button>
        </div>
      </form>
    );
  }
  export default Search;