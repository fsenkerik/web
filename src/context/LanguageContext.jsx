import { createContext, useContext, useState, useEffect } from 'react'
import translations from 'root/src/lib/translations'

const LanguageContext = createContext({
  lang: 'cs',
  t: translations.cs,
  setLang: () => {},
})

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState('cs')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'cs' || saved === 'en') {
      setLangState(saved)
    } else {
      const browserLang = navigator.language || navigator.userLanguage || ''
      const detected = browserLang.toLowerCase().startsWith('cs') ? 'cs' : 'en'
      setLangState(detected)
    }
  }, [])

  const setLang = (newLang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch (_) {}
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
