import { useState, useEffect } from 'react'
import { useLanguage } from 'root/src/context/LanguageContext'

const STORAGE_KEY = 'cookie_consent'

const CookieConsent = () => {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setVisible(true)
    } catch (_) {
      // localStorage unavailable — don't show
    }
  }, [])

  const handleChoice = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch (_) {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.emoji}>🍪</div>
        <h2 style={styles.title}>{t.cookies.title}</h2>
        <p style={styles.text}>{t.cookies.text}</p>
        <div style={styles.buttons}>
          <button
            style={styles.btnOutline}
            onClick={() => handleChoice('essential')}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            {t.cookies.essentialOnly}
          </button>
          <button
            style={styles.btnFilled}
            onClick={() => handleChoice('all')}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            {t.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.65)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '16px',
  },
  modal: {
    background: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '40px 36px 36px',
    maxWidth: '460px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
  },
  emoji: {
    fontSize: '48px',
    marginBottom: '16px',
    lineHeight: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '14px',
    lineHeight: 1.3,
  },
  text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    lineHeight: 1.7,
    marginBottom: '28px',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnOutline: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.25)',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.2s',
    fontFamily: 'inherit',
  },
  btnFilled: {
    background: '#c0392b',
    border: 'none',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    fontFamily: 'inherit',
  },
}

export default CookieConsent
