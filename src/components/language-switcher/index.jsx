import { useLanguage } from 'root/src/context/LanguageContext'

const LanguageSwitcher = ({ style }) => {
  const { lang, setLang } = useLanguage()

  const btnStyle = (active) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 3px',
    fontSize: 20,
    lineHeight: 1,
    opacity: active ? 1 : 0.35,
    transition: 'opacity 0.2s',
    verticalAlign: 'middle',
  })

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2, ...style }}>
      <button
        style={btnStyle(lang === 'cs')}
        onClick={() => setLang('cs')}
        title='Čeština'
        aria-label='Přepnout na češtinu'
      >
        🇨🇿
      </button>
      <button
        style={btnStyle(lang === 'en')}
        onClick={() => setLang('en')}
        title='English'
        aria-label='Switch to English'
      >
        🇬🇧
      </button>
    </div>
  )
}

export default LanguageSwitcher
