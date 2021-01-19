import axios from 'axios';
import React, { useState } from 'react';
import Search from '../components/Search';
import UserItem from '../components/UserItem';
import PageLoading from '../components/PageLoading';



const User = () => {
  const [loading, setLoading] = useState(false);
  
  const [users, setUsers] = useState([]);
  
  const searchUsers = query => {
    setLoading(true)
    // console.log(query)
    axios
      .get(
        `https://api.github.com/search/users?q=${query}&page=1`
      )
      .then(res => {
        // console.log(res.data.items)
        setUsers(res.data.items)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  return (
    <div className="container">
      <h1 className="mt-5">Buscar usuario</h1>
      <Search searchUsers={searchUsers}/>
      <div className="row justify-content-center m-auto">
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
          />
        ))}
      </div>
      {loading && <PageLoading />}
      {!loading && users.length === 0 && <h2>Sin resultados</h2>}
    </div>
  );
}

export default User;