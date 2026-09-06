import { useLanguage } from 'root/src/context/LanguageContext'

const CzFlag = () => (
  <svg width="26" height="17" viewBox="0 0 26 17" style={{ display: 'block', borderRadius: 2 }}>
    <rect width="26" height="8.5" fill="#fff" />
    <rect y="8.5" width="26" height="8.5" fill="#D7141A" />
    <polygon points="0,0 13,8.5 0,17" fill="#11457E" />
  </svg>
)

const GbFlag = () => (
  <svg width="26" height="17" viewBox="0 0 26 17" style={{ display: 'block', borderRadius: 2 }}>
    <rect width="26" height="17" fill="#012169" />
    <path d="M0,0 L26,17 M26,0 L0,17" stroke="#fff" strokeWidth="3.4" />
    <path d="M0,0 L26,17 M26,0 L0,17" stroke="#C8102E" strokeWidth="1.7" />
    <path d="M13,0 V17 M0,8.5 H26" stroke="#fff" strokeWidth="5.2" />
    <path d="M13,0 V17 M0,8.5 H26" stroke="#C8102E" strokeWidth="3" />
  </svg>
)

const LanguageSwitcher = ({ style }) => {
  const { lang, setLang } = useLanguage()

  const btnStyle = (active) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px 4px',
    lineHeight: 1,
    opacity: active ? 1 : 0.35,
    transition: 'opacity 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
  })

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, ...style }}>
      <button style={btnStyle(lang === 'cs')} onClick={() => setLang('cs')} title='Čeština' aria-label='Přepnout na češtinu'>
        <CzFlag />
      </button>
      <button style={btnStyle(lang === 'en')} onClick={() => setLang('en')} title='English' aria-label='Switch to English'>
        <GbFlag />
      </button>
    </div>
  )
}

export default LanguageSwitcher
