import './index.css'

const LanguageFilterItem = ({languageData, isActive, changeLanguage}) => {
  const {id, language} = languageData

  const onClickLanguage = () => {
    changeLanguage(id)
  }

  const activeLanguageClassName = isActive ? 'active-language-filter' : ''

  return (
    <li className="language-filter-item">
      <button
        type="button"
        className={`language-filter-button ${activeLanguageClassName}`}
        onClick={onClickLanguage}
        data-testid={`language-filter-${id}`}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
