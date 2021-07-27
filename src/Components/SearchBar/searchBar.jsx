import React, { useState } from "react";


const SearchBar = (props) => {

  const [searchRequest, setSearchRequest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRequest); // Hello, Hi, ...
    props.getSearchResults(searchRequest); // Back to App.js
  }

  return (
    <React.Fragment>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="searchRequest" 
          placeholder="Search..." 
          onChange={e => setSearchRequest(e.target.value)} 
          value={searchRequest} />
          <input type="submit" id="request" value="Search"></input>
        </form>
    </React.Fragment>
  );
}

export default SearchBar;