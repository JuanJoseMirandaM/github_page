import React from 'react';

const Repos = ({repo}) => {
  const {name, html_url, stargazers_count, watchers_count, forks_count, description, language, updated_at, archived, full_name} = repo;

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

  return (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-10 col-md-9">
          <h5 className="mb-1">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {full_name}
            </a>
            {archived && <span className="f6 badge badge-secondary ml-1">Archived</span>}
          </h5>
          <p className="text-gray mb-2 mt-2">
            {description}
          </p>
          <div className="f6">
            {language != null?
              (<span className="mr-3">
              <i className="fas fa-circle"></i>
              <span> {language}</span>
              </span>):(<></>)
            }
            <span className="mr-3">
              <i className="fas fa-clock"></i>
              <span> Update {formatDate(updated_at)}</span>
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <span className="badge badge-warning mr-1">
            Star: {kFormatter(stargazers_count)}
          </span>
          <span className="badge badge-success mr-1">
            Watchers: {kFormatter(watchers_count)}
          </span>
          <span className="badge badge-dark mr-1">
            Fork: {kFormatter(forks_count)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Repos;