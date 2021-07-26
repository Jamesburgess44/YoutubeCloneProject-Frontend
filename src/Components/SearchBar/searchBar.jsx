import React from 'react';
// import { Form } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

const SearchBar = (props) => {  


  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <input type="text" 
        name="searchRequest" 
        placeholder="Search..." 
        onChange={props.handleChange}  
        value={props.searchRequest} />
        <input type="submit" id="request" value="Search"></input>
      </form>
    </React.Fragment>
  );
}

export default SearchBar;

/*
<Form className="d-flex">
  <FormControl
    type="search"
    placeholder="Search"
    className="mr-2"
    aria-label="Search"
  />
  <Button variant="outline-success">Search</Button>
</Form>
*/