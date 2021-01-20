import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Search = ({searchQuery, placeholder}) => {
  const [query, setquery] = useState("");
  const search = e => {
    // console.log(e.target.value);
    setquery(e.target.value);
  }

  return (
    <Form 
      className="mt-4 mb-4"
      onSubmit={e => {
        e.preventDefault();
        searchQuery(query)
      }}
    >
      <FormGroup>
        <InputGroup>
          <Input
            placeholder={placeholder}
            onChange={search}
            value={query}
            required={true}
          />
          <InputGroupAddon addonType="prepend">
            <Button type="submit" color="success">Buscar</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

Search.propTypes = {

}

export default Search
