import React, {useState} from 'react'
import axios from 'axios';
import Search from '../components/Search';
import RepoItem from '../components/RepoItem';
import PageLoading from '../components/PageLoading';

const Repository = () => {
  const [loading, setLoading] = useState(false);
  
  const [repositories, setRepositories] = useState([]);
  
  const searchRepositories = query => {
    setLoading(true)
    // console.log(query)
    axios
      .get(
        `https://api.github.com/search/repositories?q=${query}&per_page=10&page=1`
      )
      .then(res => {
        // console.log(res.data.items)
        setRepositories(res.data.items)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response)
        setLoading(false)
      })
  }
  
  return (
    <div className="container">
      <h1 className="mt-5">Buscar repositorio</h1>
      <Search searchQuery={searchRepositories} placeholder="Github repositories..."/>
      {loading && <PageLoading />}
      {!loading && repositories.length === 0 && <h5>Sin resultados</h5>}
      <ul>
      {repositories.map(repo => (
        <RepoItem
          key={repo.id} 
          repo={repo} 
        />
      ))}
      </ul>
    </div>
  )
}

export default Repository
