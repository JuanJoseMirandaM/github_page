import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';

const UserItem = ({user}) => {
  const {avatar_url, login} = user
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-3">
      <Card>
        <CardImg
          top width="100%"
          src={avatar_url}
          alt={login}
        />
        <CardBody>
          <CardTitle>{login}</CardTitle>
          <Link to={`user/${login}`}>
            <Button>ver mas</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserItem
