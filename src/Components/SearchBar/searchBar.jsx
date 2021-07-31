import React, { useState } from "react";


const SearchBar = ({ setSearchTerm }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(query); // Hello, Hi, ...
    setSearchTerm(query) // Back to App.js
  }

  return (
    <React.Fragment>
      <div className="col d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="searchRequest" 
          placeholder="Search..." 
          onChange={e => setQuery(e.target.value)} 
          value={query} />
          <input type="submit" id="request" value="Search"></input>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;