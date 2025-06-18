const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos'

const GithubPopularRepos = () => {
  const languageFiltersData = [
    {id: 'ALL', language: 'All'},
    {id: 'JAVASCRIPT', language: 'Javascript'},
    {id: 'RUBY', language: 'Ruby'},
    {id: 'JAVA', language: 'Java'},
    {id: 'CSS', language: 'CSS'},
  ]

  const [reposList, setReposList] = useState([])
  const [activeLanguage, setActiveLanguage] = useState('ALL')
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    const getRepos = async () => {
      setIsLoading(true)
      setApiError(false)
      try {
        const response = await fetch(
          `${githubReposApiUrl}?language=${activeLanguage}`,
        )
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json()
        setReposList(data.popular_repos || [])
      } catch (error) {
        setApiError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getRepos()
  }, [activeLanguage])

  const changeLanguage = id => {
    setActiveLanguage(id)
  }

  const renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  const renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">Something Went Wrong</h1>
    </div>
  )

  const renderReposListView = () => (
    <ul className="repos-list">
      {reposList.map(repo => (
        <RepositoryItem key={repo.id} repoData={repo} />
      ))}
    </ul>
  )

  return (
    <div className="github-popular-repos-container">
      <h1 className="main-heading">Popular</h1>
      <ul className="language-filters-list">
        {languageFiltersData.map(language => (
          <LanguageFilterItem
            key={language.id}
            languageData={language}
            isActive={language.id === activeLanguage}
            changeLanguage={changeLanguage}
          />
        ))}
      </ul>
      {isLoading
        ? renderLoadingView()
        : apiError
        ? renderFailureView()
        : renderReposListView()}
    </div>
  )
}

export default GithubPopularRepos
