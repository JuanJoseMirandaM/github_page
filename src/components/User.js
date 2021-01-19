import axios from 'axios';
import React, { useState } from 'react';
import Search from './Search';
import UserItem from './UserItem';



const User = () => {
  const [loanding, setLoanding] = useState(false);
  
  const [users, setUsers] = useState([]);
  
  const searchUsers = query => {
    console.log(query)
    axios
      .get(
        `https://api.github.com/search/users?q=${query}&page=1`
      )
      .then(res => {
        console.log(res.data.items)
        setUsers(res.data.items)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  return (
    <div className="container">
      <h1 className="mt-5">Buscar usuario</h1>
      <Search searchUsers={searchUsers}/>
      
      
    </div>
  );
}

export default User;