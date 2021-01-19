import React from 'react';

const Profile = ({user}) => {
  const {avatar_url, login, html_url, public_repos, name, public_gists, followers, following, company, blog, location, created_at} = user
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={avatar_url}
            className="img-fluid mb-2"
            alt={login}
          />
          <a 
            target="_blank"
            className="btn btn-primary btn-block mt-2 mb-2"
            rel="noreferrer"
            href={html_url}
          >Mas informacion</a>
        </div>
        <div className="col-12 col-md-8">
          <h2>{name}</h2>
          <span className="badge badge-primary mr-1">
            Public Repos: {public_repos}
          </span>
          <span className="badge badge-success mr-1">
            Public Gists: {public_gists}
          </span>
          <span className="badge badge-dark mr-1">
            Public Followers: {followers}
          </span>
          <span className="badge badge-info mr-1">
            Public Following: {following}
          </span>
          <br/>
          <div className="list-group mt-2">
            <div className="list-group-item"><h5>Company:</h5> {company}</div>
            <div className="list-group-item"><h5>Website/blog:</h5> <a href={blog} target="_blank" rel="noreferrer">{blog}</a></div>
            <div className="list-group-item"><h5>Location:</h5> {location}</div>
            <div className="list-group-item"><h5>Member Since:</h5> {created_at}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
