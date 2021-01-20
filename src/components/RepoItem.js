import React from 'react';
import './RepoItem.css';

const RepoItem = ({repo}) => {
  const {html_url, stargazers_count, description, language, updated_at, archived, full_name} = repo;

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

  return (
    <li className="repo-list-item d-flex flex-justify-start">
      <div className="mr-2">
        <i class="fas fa-laptop-code fa-2x"></i>
      </div>
      <div>
        <div className="">
          <h5>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {full_name}
            </a>
            {archived && <span className="f6 badge badge-secondary ml-1">Archivado</span>}
          </h5>
        </div>
        <div className="mb-2">
          <p className="text-gray">
            {description}
          </p>
        </div>
        <div className="f6">
          {stargazers_count != null &&
            <span className="mr-3">
            <i className="far fa-star"></i>
            <span> {kFormatter(stargazers_count)}</span>
            </span>
          }
          {language != null &&
            <span className="mr-3">
            <i className="fas fa-circle"></i>
            <span> {language}</span>
            </span>
          }
          <span className="mr-3">
            <i className="fas fa-clock"></i>
            <span> Update {formatDate(updated_at)}</span>
          </span>
        </div>
      </div>
    </li>
  )
}

export default RepoItem;