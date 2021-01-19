import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Search = ({searchUsers}) => {
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
        searchUsers(query)
      }}
    >
      <FormGroup>
        <InputGroup>
          <Input
            placeholder="Github username..."
            onChange={search}
            value={query}
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
