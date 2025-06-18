import './index.css'

const RepositoryItem = ({repoData}) => {
  const {name, avatar_url, stars_count, forks_count, issues_count} = repoData

  return (
    <li className="repository-item" data-testid="repository-item">
      <img
        src={avatar_url}
        alt={name}
        className="repository-image"
        data-testid="avatar-url"
      />
      <h1 className="repository-name" data-testid="repository-name">
        {name}
      </h1>
      <div className="stats-container">
        <div className="stats-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="stats-icon"
            data-testid="stars-img"
          />
          <p className="stats-text" data-testid="stars-count">
            {stars_count} stars
          </p>
        </div>
        <div className="stats-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="stats-icon"
            data-testid="forks-img"
          />
          <p className="stats-text" data-testid="forks-count">
            {forks_count} forks
          </p>
        </div>
        <div className="stats-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="stats-icon"
            data-testid="issues-img"
          />
          <p className="stats-text" data-testid="issues-count">
            {issues_count} open issues
          </p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
