import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Profile from '../components/Profile';
import Repos from '../components/Repos';

const UserDetail = ({match}) => {
  
  const [user, setUser] = useState({});

  const [repos, setRepos] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${match.params.username}`)
    .then(res => {
      setUser(res.data);
    })
    .catch(err => {
      setError(true);
      console.log(err.response)
    });
  }, [match.params.username, user])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${match.params.username}/repos?per_page=10&sort=asc`)
    .then(res => {
      setRepos(res.data);
    })
    .catch(err => {
      setError(true);
      console.log(err.response)
    })
  }, [match.params.username, repos])

  return (
    <div className="container mt-5">
      { error ?
        <h3>Ups! No existe el usuario</h3>:
        <>
          <Profile user={user}/>
          <h3 className="mb-3 mt-3">Repos mas recientes</h3>
          {repos.map(repo => (
            <Repos 
              key={repo.id} 
              repo={repo} 
            />
          ))}
        </>
      }
      
    </div>
  )
}

export default UserDetail;