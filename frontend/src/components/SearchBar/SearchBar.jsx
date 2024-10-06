import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';
function SearchBar() {
  return (
    <InputGroup className='mt-5'>
      <InputGroup.Text id="basic-addon1"><FaSearch className=''/></InputGroup.Text>
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"   

      />
    </InputGroup>
  )
}

export default SearchBar